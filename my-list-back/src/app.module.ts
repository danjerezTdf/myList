import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ListModule } from './list/list.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Tdf19955',
      database: 'list_db',
      entities: ['dist/**/**/**.entity{.ts,.js}'],
      synchronize: true,
    }),
    ListModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
