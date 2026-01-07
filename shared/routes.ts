import { z } from "zod";
import { multiLangContentSchema } from "./schema";

export const api = {
  content: {
    get: {
      method: "GET" as const,
      path: "/api/content",
      responses: {
        200: multiLangContentSchema,
        500: z.object({ message: z.string() }),
      },
    },
  },
};
