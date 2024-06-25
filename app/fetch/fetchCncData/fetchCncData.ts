import { sql } from "@vercel/postgres";

export type fetch_cnc_data_type = {
  id:number;
  serial_num: string;
  name: string;
  date: string;
  brand: string;
};

export default async function fetch_cnc_data() {
  // try {
  //   const data = await sql`SELECT * FROM cnc`;
  //   return data.rows
  // } catch (err) {
  //   console.error("Database Error:", err);
  //   throw new Error("Failed to fetch the latest fetch_cnc_data.");
  // }
  return [
    {
      id:0,
      serial_num: "sss",
      name: "sss",
      date: "sss",
      brand: "sss"
    }
  ]
}
