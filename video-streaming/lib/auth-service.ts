import { currentUser } from "@clerk/nextjs";

import { db } from "@/lib/db";

// fetch current user from clerk
export const getSelf = async () => {
    const self = await currentUser();

    if (!self) {
        throw new Error("Not Authenticated");
    }

    const user = await db.user.findUnique({
        where: { externalUserId: self.id },
    });

    if (!user) {
        throw new Error("User not found");
    }

    return user;
};

// load creator dashboard by username
export const getSelfByUsername = async (username: string) => {
    const self = await currentUser();

    if (!self || !self.username) {
        throw new Error("Not Authorized");
    }

    const user = await db.user.findUnique({
        where: { username },
    });

    if (!user) {
        throw new Error("User not found");
    }

    // not able to access someone else's dashboard
    if (self.username !== user.username) {
        throw new Error("Not Authorized");
    }

    return user;
};