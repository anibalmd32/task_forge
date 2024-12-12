import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DataSourceOptions } from 'typeorm';
import { UserEntity } from '~/infrastructure/typeorm-entities/user.entity';
import { TaskEntity } from '~/infrastructure/typeorm-entities/task.entity';
import { CommentEntity } from '~/infrastructure/typeorm-entities/comment.entity';
import { ProjectEntity } from '~/infrastructure/typeorm-entities/project.entity';

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
      database: this.configService.get<string>('database.database'),
      entities: [CommentEntity, ProjectEntity, TaskEntity, UserEntity],
      synchronize: this.configService.get<boolean>(
        'database.synchronize',
        true,
      ),
      autoLoadEntities: true,
    } as DataSourceOptions;
  }

  getEnvVariable(key: string, defaultValue: string = ''): string {
    return this.configService.get<string>(key, defaultValue);
  }
}
