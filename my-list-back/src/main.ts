import { Module } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

@Module({
  imports: [AppModule],
})
export class MainModule {}

async function bootstrap() {
  const app = await NestFactory.create(MainModule);
  app.enableCors({
    origin: 'https://mylist-a570c.web.app', // Reemplaza con tu dominio
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });
  await app.listen(3001);
}
bootstrap();
