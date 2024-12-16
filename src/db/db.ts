// import '@/drizzle/envConfig';
import { drizzle } from 'drizzle-orm/vercel-postgres';
import { sql } from '@vercel/postgres';
import * as schema from './schema';

export const db = drizzle(sql, { schema });

// export const getMessages = async () => {
//     return db.query.messagesTable.findMany();
// };

// export const createMessage = async (message: schema.Message) => {
//     return db.insert(messagesTable).values(message);
// };