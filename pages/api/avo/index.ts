import DB from "@database";
import { NextApiRequest, NextApiResponse } from "next";

const allAvos = async (req: NextApiRequest, res: NextApiResponse) => {
  const db = new DB();
  try {
    const allEntries = await db.getAll();

    res.status(200).json({
      length: allEntries.length,
      data: allEntries,
    });
  } catch (error) {}
};
export default allAvos;
