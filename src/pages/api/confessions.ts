/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const session = await getServerSession(req, res, authOptions);

    if (!session) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const { title, content } = req.body;

    const prismaUser = await prisma.user.findUnique({
      where: {
        email: session?.user?.email as string,
      },
    });

    if (!prismaUser) {
      return res.status(404).json({ message: "User not found" });
    }

    try {
      const confession = await prisma.confession.create({
        data: {
          title,
          content,
          userId: prismaUser.id,
        },
      });

      return res.status(201).json(confession);
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  } else if (req.method === "GET") {
    const confessions = await prisma.confession.findMany({
      include: {
        user: true,
      },
    });

    return res.status(200).json(confessions);
  }
}
