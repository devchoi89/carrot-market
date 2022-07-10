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
    body: { answer },
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

  const newAnswer = await client.answer.create({
    data: {
      user: {
        connect: {
          id: user?.id,
        },
      },
      post: { connect: { id: +id.toString() } },
      answer,
    },
  });
  console.log(newAnswer);

  res.json({
    ok: true,
    answer: newAnswer,
  });
}

export default withApiSession(
  withHandler({ methods: ["POST"], handler, isPrivate: true })
);
