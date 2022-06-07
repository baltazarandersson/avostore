import { NextApiRequest, NextApiResponse } from "next";
import DB from "@database";

const avoDetail = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const db = new DB();
    const { id } = req.query;
    const entry = await db.getById(id as string);
    res.status(200).json(entry);
  } catch (err) {
    if (err instanceof Error) {
      res.status(404).json({
        message: err.message,
      });
    } else {
      res.status(404).json({
        message: "Unexpected Error",
      });
    }
  }
};
export default avoDetail;
