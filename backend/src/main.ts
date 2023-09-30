import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

// import { CorsOptions } from '@nestjs/common';
import * as express from 'express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const publicPath = join(__dirname, '../static');
  app.useStaticAssets(publicPath);
  // Define your CORS options here
  // const corsOptions: CorsOptions = {
  //   origin: 'http://localhost:3000', // Replace with your Next.js frontend URL
  //   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  //   credentials: true, // If you need to include credentials (cookies, authorization headers, etc.)
  // };

  // app.use((req, res, next) => {
  //   // Use express for CORS handling
  //   express().use((req, res, next) => {
  //     res.header('Access-Control-Allow-Origin', corsOptions.origin);
  //     res.header('Access-Control-Allow-Methods', corsOptions.methods);
  //     res.header(
  //       'Access-Control-Allow-Credentials',
  //       corsOptions.credentials ? 'true' : 'false',
  //     );
  //     res.header(
  //       'Access-Control-Allow-Headers',
  //       'Origin, X-Requested-With, Content-Type, Accept',
  //     );
  //     next();
  //   });
  //   next();
  // });
  app.enableCors();
  await app.listen(3333);
}
bootstrap();
