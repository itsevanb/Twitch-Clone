import { db } from "@/lib/db";
import { getSelf } from "./auth-service";

export const getRecommended = async () => {
    let userId;

    try {
        const self = await getSelf();
        userId = self.id;
    } catch {
        userId = null;
    }

    let users = []

    if (userId) {
        users = await db.user.findMany({
            // Find all users that are not the current user and not followed by the current user
            // This is the same as finding all users that are not followed by the current user
            where: {
                AND: [
                    {
                        NOT: {
                            id: userId,
                    },
                },
                {
                    NOT: {
                        followedBy: {
                            some: {
                                followerId: userId,
                            },
                        },
                    },
                },
            ],
        },
            orderBy: {
                createdAt: "desc",
            },
        });
    } else {
        users = await db.user.findMany({
            orderBy: {
                createdAt: "desc",
            },
        });
    }

    return users;
}