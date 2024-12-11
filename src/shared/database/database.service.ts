import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Injectable()
export class DatabaseService {
  constructor(private readonly dataSource: DataSource) {}

  async testConnection(): Promise<boolean> {
    try {
      await this.dataSource.initialize();
      console.info('Database connection successful!');
      return true;
    } catch (error) {
      console.error('Database connection failed:', error);
      return false;
    }
  }
}
