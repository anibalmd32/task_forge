import { INestApplication, Module } from '@nestjs/common';
import { ConfigAppModule } from '~/shared/config/config.module';
import { DatabaseModule } from '~/shared/database/database.module';
import { DocsModule } from '~/shared/docs/docs.module';

@Module({
  imports: [ConfigAppModule, DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {
  static setupDocs(app: INestApplication) {
    DocsModule.setup(app);
  }
}
