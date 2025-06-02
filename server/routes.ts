import type { Express } from "express";
import { createServer, type Server } from "http";

export async function registerRoutes(app: Express): Promise<Server> {
  // For a static corporate website, we don't need any special API routes
  // The static files will be served by the server/vite.ts configuration
  
  // You can add any custom API endpoints here if needed in the future
  // Example: app.get('/api/company-info', (req, res) => { ... });

  const httpServer = createServer(app);
  return httpServer;
}
