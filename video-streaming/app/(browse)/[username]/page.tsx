import { isFollowingUser } from "@/lib/follow-service";
import { getUserByUsername } from "@/lib/user-service";
import { isBlockedByUser } from "@/lib/block-service";

import { notFound } from "next/navigation";
import { Actions } from "./_components/actions";

interface UserPageProps {
    params: {
        username: string;
    };
};

const UserPage = async ({ 
    params
}: UserPageProps) => {
    const user = await getUserByUsername(params.username);

    if (!user) {
        notFound();
    }

    const isFollowing = await isFollowingUser(user.id);
    const isBlocked = await isBlockedByUser(user.id);

    return (
        <div className="flex flex-col gap-y-4">
            <p>User: {user.username}</p>
            <p>user ID: {user.id} </p>
            <p>is following: {`${isFollowing}`} </p>
            <p>is blocked by this user: {`${isBlocked}`}</p>
            <Actions userId={user.id} isFollowing={isFollowing} />
        </div>
    );
};

export default UserPage;