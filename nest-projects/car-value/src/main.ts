import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
const cookieSession = require('cookie-session')

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieSession({
    // String aleatorio para encriptar la información que
    // se guarda en la cookie
    keys: ['aldskfj']
  }))
  // useGlobalPipes es para las validaciones,
  // y whitelist creo que era para que no se puedan mechar propiedades 
  // que no tiene la entidad (algo asi, por seguridad)
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
