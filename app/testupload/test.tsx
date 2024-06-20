
import { sql } from "@vercel/postgres";
import { useEffect } from "react";

export default async function Test() {
    "use server"

    const { rows } = await sql`SELECT * from users`;

    return (
      <div>
        { (rows && rows.length > 0) && rows.map((item,idx)=>
            <div className="" key={idx}>
                {item.username}
            </div>
        )}
      </div>
    );
  }