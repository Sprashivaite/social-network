import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.GRPC,
    options: {
      url: 'localhost:5000',
      protoPath: [
        join(__dirname, '../user/user.proto'),
        join(__dirname, '../auth/auth.proto'),
      ],
      package: ['userpackage', 'authpackage'],
      loader: {
        keepCase: true,
        longs: Number,
        enums: String,
        defaults: true,
        oneofs: true,
      },
    },
  });
  await app.startAllMicroservices();
  await app.listen(3000);
}
bootstrap();