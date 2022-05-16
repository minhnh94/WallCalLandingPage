import { Client } from "@notionhq/client";

export const queryDatabase = async () => {
  const notion = new Client({ auth: process.env.NOTION_API_KEY })
  return await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID ?? '',
  })
};

export const parseProperties = (database) => {
  return database.results.map(row => ({
    id: row.properties.id.title[0].plain_text,
    question: row.properties.question.rich_text[0].plain_text,
    answer: row.properties.answer.rich_text[0].plain_text,
    imageUrl: row.properties.image.url
  })).sort((a, b) => a.id - b.id);
}
