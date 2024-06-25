import { sql } from "@vercel/postgres";

export type fetch_measure_data_type = {
    id:number;
    name: string;
    standard: string;
    date: string;
    brand: string;
};

export default async function fetch_measure_data() {
    // try {
    //     const data = await sql`SELECT * FROM measure`;
    //     return data.rows
    // } catch (err) {
    //     console.error("Database Error:", err);
    //     throw new Error("Failed to fetch the latest fetch_cnc_data.");
    // }

    return [
        {
            id:0,
            name: 'kk',
            standard:'kk',
            date: 'kk',
            brand: 'kk'
        }
    ]
}
