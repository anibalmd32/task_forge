import { Module } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';

@Module({})
export class DocsModule {
  static setup(app: INestApplication) {
    const config = new DocumentBuilder()
      .setTitle('TaskForge API')
      .setDescription('Projects and task management app')
      .setVersion('1.0.0')
      .addTag('tasks')
      .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api/docs/v1', app, document);
  }
}
