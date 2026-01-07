import { type MultiLangContent, type MultiAppContent } from "@shared/schema";
import fs from "fs/promises";
import path from "path";

export interface IStorage {
  getContent(): Promise<MultiLangContent>;
}

export class FileStorage implements IStorage {
  private contentPath = path.join(process.cwd(), "server", "content.json");

  async getContent(): Promise<MultiLangContent> {
    try {
      const data = await fs.readFile(this.contentPath, "utf-8");
      const allContent: MultiAppContent = JSON.parse(data);
      
      const appKey = (process.env.app || "ecosave").toLowerCase();
      const appContent = allContent[appKey];
      
      if (!appContent) {
        console.warn(`No content found for app "${appKey}", falling back to "ecosave"`);
        return allContent["ecosave"];
      }
      
      return appContent;
    } catch (error) {
      console.error("Error reading content.json:", error);
      throw new Error("Failed to load site content");
    }
  }
}

export const storage = new FileStorage();
