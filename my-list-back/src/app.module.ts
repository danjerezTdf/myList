import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ListModule } from './list/list.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'bgzybbn4w4pdzueqnica-mysql.services.clever-cloud.com',
      port: 3306,
      username: 'ubqxuvkmiha0wboq',
      password: 'FJzYKNxkCrVWcDXC9p43',
      database: 'bgzybbn4w4pdzueqnica',
      entities: ['dist/**/**/**.entity{.ts,.js}'],
      synchronize: true,
    }),
    ListModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
