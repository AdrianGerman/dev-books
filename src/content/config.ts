import { defineCollection, z } from "astro:content"

const books = defineCollection({
  schema: z.object({
    title: z.string(),
    author: z.string(),
    img: z.string(),
    pages: z.number(),
    description: z.string(),
    read: z.string().url(),
    buy: z.object({
      mx: z.string().url(),
      us: z.string().url()
    })
  })
})

export const collections = { books }
