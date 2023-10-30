import { PrismaClient } from "@prisma/client";
import { withAccelerate } from "@prisma/extension-accelerate";

const client =
  globalThis.prisma || new PrismaClient().$extends(withAccelerate());
if (process.env.NODE_ENV !== "production") globalThis.prisma = client;

export default client;
