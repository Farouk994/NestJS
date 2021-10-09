import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

// async Function that runs app
async function bootstrap() {
   // Creates instance of nest application
   const app = await NestFactory.create(AppModule);
   await app.listen(3000);
}
bootstrap();
