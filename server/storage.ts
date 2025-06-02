// This file is kept as a placeholder in case you need to add any server-side storage in the future
// For a static website, we don't need any storage functionality

export interface IStorage {
  // Add any methods you might need in the future here
}

export class MemStorage implements IStorage {
  constructor() {
    // Initialize any needed properties
  }
  
  // Add any methods you might need in the future
}

export const storage = new MemStorage();
