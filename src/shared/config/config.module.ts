import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ConfigAppService } from './config.service';
import databaseConfig from '~/shared/config/configForLoad/databaseConfig';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [databaseConfig],
    }),
  ],
  providers: [ConfigAppService],
  exports: [ConfigAppService],
})
export class ConfigAppModule {}
