export default async function getUsers() {
    const client = await pool.connect();
  
    try {
      const result = await client.query('SELECT * FROM users');
      return result.rows;
    } catch (err) {
      console.error('Error fetching users:', err);
      throw err;
    } finally {
      client.release();
    }
  }