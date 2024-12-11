import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigAppService } from '~/shared/config/config.service';
import { ConfigAppModule } from '~/shared/config/config.module';
import { DatabaseService } from '~/shared/database/database.service';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigAppModule],
      inject: [ConfigAppService],
      useFactory: (configService: ConfigAppService) => {
        return configService.getDatabaseConfig();
      },
    }),
  ],
  providers: [DatabaseService],
  exports: [DatabaseService],
})
export class DatabaseModule {}
