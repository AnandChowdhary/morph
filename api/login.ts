import axios from "axios";
import { NowRequest, NowResponse } from "@now/node";

export default async (req: NowRequest, res: NowResponse) => {
  try {
    return (
      await axios.post(
        `https://github.com/login/oauth/access_token?client_id=Iv1.Iv1.b2c83c354835a430&client_secret=${process.env.MORPH_CLIENT_SECRET}&code=${req.body.code}`
      )
    ).data;
  } catch (error) {
    res.status(400);
    res.json({ error });
  }
};
