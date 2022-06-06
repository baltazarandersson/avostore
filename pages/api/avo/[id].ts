import { NextApiRequest, NextApiResponse } from "next";
import DB from "@database";

const avoDetail = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const db = new DB();
    const { id } = req.query;
    const entry = await db.getById(id as string);
    res.status(200).json(entry);
  } catch (e) {
    res.status(404).json({
      message: e.message,
    });
  }
};
export default avoDetail;
