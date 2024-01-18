import { PrismaClient } from "@prisma/client";

declare global {
    var prisma: PrismaClient | undefined;
}

export const db = global.prisma || new PrismaClient();

// prevents hot reload from creating new instances

if (process.env.NODE_ENV !== "production") global.prisma = db;