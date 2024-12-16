import {
    pgTable,
    serial,
    text,
    timestamp,
    // uniqueIndex,
} from 'drizzle-orm/pg-core';

export type Message = typeof messagesTable.$inferSelect;

export const messagesTable = pgTable(
    'portfolio_messages',
    {
        id: serial('id').primaryKey(),
        name: text('name').notNull(),
        email: text('email').notNull(),
        message: text('message').notNull(),
        createdAt: timestamp('createdAt').defaultNow().notNull(),
    },
);