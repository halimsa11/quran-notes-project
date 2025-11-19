import {pgTable, serial, varchar, text, integer} from 'drizzle-orm/pg-core'

export const users = pgTable('users', {
    id: serial('id').primaryKey(),
    username: varchar('username', {length: 256}).notNull().unique(),
    password: varchar('password', {length: 256}).notNull(),
});

export const quranNotes = pgTable('quran_notes', {
    id: serial('id').primaryKey(),
    //catatan spesifik, misalnya: surah:Ayar - judul
    surah_ayah: varchar('surah_ayah', {length: 256}.notNull()),
    note:text('note').notNull(),
    userId: integer('user_id').references(() => users.id).notNull(),
})
