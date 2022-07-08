import twilio from "twilio";
import client from "@libs/server/client";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import smtpTransport from "@libs/server/mail";

const twilioClient = twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { email, phone } = req.body;
  const user = phone ? { phone } : email ? { email } : null;
  if (!user) return res.status(400).json({ ok: false });
  const payload = Math.floor(100000 + Math.random() * 900000) + "";
  const token = await client.token.create({
    data: {
      payload,
      user: {
        connectOrCreate: {
          where: {
            ...user,
          },
          create: {
            name: "Anonymous",
            ...user,
          },
        },
      },
    },
  });
  if (phone) {
    /* await twilioClient.messages.create({
      messagingServiceSid: process.env.TWILIO_MSG_SID,
      to: process.env.PHONE!, //env 값이 없을 수도 있어 오류가 남. 느낌표를 붙여 존재하는 값임을 알려준다.
      body: `로그인 토큰: ${payload}.`,
    }); */
  } else if (email) {
    /* const mailOptions = {
      from: "blacktea37@naver.com",
      to: "devchoi89@gmail.com",
      subject: "Nomad Carrot Authentication Email",
      text: `Authentication Code : ${payload}`,
    };
    const result = await smtpTransport.sendMail(
      mailOptions,
      (error, responses) => {
        if (error) {
          console.log(error);
          return null;
        } else {
          console.log(responses);
          return null;
        }
      }
    );
    smtpTransport.close();
    console.log(result); */
  }
  /*  if (email) {
    user = await client.user.findUnique({
      where: {
        email,
      },
    });
    if (user) console.log("found it");
    if (!user) {
      console.log("Did not find. Will create.");
      //create function returns promise
      user = await client.user.create({
        data: {
          name: "Anonymous", // name is required in schema.prisma
          email,
        },
      });
    }
    console.log(user);
  }
  if (phone) {
    user = await client.user.findUnique({
      where: {
        phone: +phone,
      },
    });
    if (user) console.log("found it");
    if (!user) {
      console.log("Did not find. Will create.");
      //create function returns promise
      user = await client.user.create({
        data: {
          name: "Anonymous", // name is required in schema.prisma
          phone: +phone,
        },
      });
    }
    console.log(user);
  } */
  return res.json({ ok: true });
}

export default withHandler({ methods: ["POST"], handler, isPrivate: false });
