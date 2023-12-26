import { db } from "@/lib/db";
import { getSelf } from "./auth-service";

export const getRecommended = async () => {
    const users = await db.user.findMany({
        orderBy: {
            createdAt: "desc",
        },
    });

    return users;
}