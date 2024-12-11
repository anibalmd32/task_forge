import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DataSourceOptions } from 'typeorm';

@Injectable()
export class ConfigAppService {
  constructor(private readonly configService: ConfigService) {}

  getDatabaseConfig() {
    return {
      type: this.configService.get<string>('database.type'),
      host: this.configService.get<string>('database.host'),
      port: this.configService.get<number>('database.port'),
      username: this.configService.get<string>('database.username'),
      password: this.configService.get<string>('database.password'),
      name: this.configService.get<string>('database.name'),
      entities: [__dirname + '/../**/*.entity{.ts,.js}'], // Ajusta según tu estructura
      synchronize: this.configService.get<boolean>(
        'database.synchronize',
        true,
      ),
    } as DataSourceOptions;
  }

  getEnvVariable(key: string, defaultValue: string = ''): string {
    return this.configService.get<string>(key, defaultValue);
  }
}
