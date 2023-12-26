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