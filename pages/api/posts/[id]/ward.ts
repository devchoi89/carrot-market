import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import client from "@libs/server/client";
import { withApiSession } from "@libs/server/withSession";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const {
    query: { id },
    session: { user },
  } = req;
  const post = await client.post.findUnique({
    where: {
      //id가 배열일 수 있으므로 toString()
      id: +id.toString(),
    },
    select: {
      id: true,
    },
  });
  if (!post) res.status(404).json({ ok: false, error: "Not found page" });
  const alreadyExists = await client.ward.findFirst({
    where: {
      userId: user?.id,
      postId: +id.toString(),
    },
    select: {
      id: true,
    },
  });
  if (alreadyExists) {
    await client.ward.delete({
      where: {
        id: alreadyExists.id,
      },
    });
  } else {
    await client.ward.create({
      data: {
        user: {
          connect: {
            id: user?.id,
          },
        },
        post: {
          connect: {
            id: +id.toString(),
          },
        },
      },
    });
  }
  res.json({
    ok: true,
  });
}

export default withApiSession(
  withHandler({ methods: ["POST"], handler, isPrivate: true })
);
