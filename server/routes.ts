import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  app.get(api.content.get.path, async (_req, res) => {
    try {
      const content = await storage.getContent();
      res.json(content);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch content" });
    }
  });

  return httpServer;
}
