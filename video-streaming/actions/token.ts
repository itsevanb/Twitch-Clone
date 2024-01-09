"use server";

import { v4 } from "uuid";
import { AccessToken } from "livekit-server-sdk";

import { getSelf } from "@/lib/auth-service";
import { getUserById } from "@/lib/user-service";
import { isBlockedByUser } from "@/lib/block-service";

// function connects to hostidentity and creates a token for viewer
export const createViewerToken = async (hostIdentity: string) => {
  let self;

  // check if user is logged in and if not creates a guest user id
  // logged out users can still watch the stream
  try {
    self = await getSelf();
  } catch {
    const id = v4();
    const username = `guest#${Math.floor(Math.random() * 1000)}`;
    self = { id, username };
  }

  // get host user
  const host = await getUserById(hostIdentity);

  if (!host) {
    throw new Error("User not found");
  }

  // check if viewer is blocked by host
  const isBlocked = await isBlockedByUser(host.id);

  if (isBlocked) {
    throw new Error("User is blocked");
  }

  // check if viewer is host
  const isHost = self.id === host.id;

  // create token for viewer
  const token = new AccessToken(
    process.env.LIVEKIT_API_KEY!,
    process.env.LIVEKIT_API_SECRET!,
    // if viewer is host, identity is guest id for host, because host id is already configured in ingress action
    {
      identity: isHost ? `host-${self.id}` : self.id,
      name: self.username,
    }
  );

  // add grant permissions to viewer
  token.addGrant({
    room: host.id,
    roomJoin: true,
    canPublish: false,
    canPublishData: true,
  });

  // return token as jwt
  // jwt is used to connect to livekit server
  return await Promise.resolve(token.toJwt());
};