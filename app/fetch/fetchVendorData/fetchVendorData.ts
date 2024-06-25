import { sql } from "@vercel/postgres";

export type fetch_vendor_data_type = {
    id:number
    category:string
    companyname:string
};

export default async function fetch_vendor_data() {
    try {
        const data = await sql<fetch_vendor_data_type[]>`SELECT * FROM vendor`;
        return data.rows
    } catch (err) {
        console.error("Database Error:", err);
        throw new Error("Failed to fetch the latest fetch_cnc_data.");
    }

}
