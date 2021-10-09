// import { Controller, Module, Get } from "@nestjs/common";
// import { NestFactory } from "@nestjs/core";
// import { get } from "http";

// @Controller()
//? Decorator telling nest we are trying to create a class that will handle incoming requests
// class AppController {
//    @Get()
   //? @Get() This allows to create route handlers that have http methods
//    getRootRoute() {
//       const newStudent = {
//          name: "James",
//          age: 56,
//       };
//       return newStudent;
//    }
// }

// @Controller()
// class studentController {
//    @Get()
//    getStudent() {
//       const find = "students";
//       return find;
//    }
// }

//? Module wraps up a controller
// @Module({
//    controllers: [AppController],
// })
// class AppModule {}

// async Function that runs app
// async function bootstrap() {
   //? Creates instance of nest application
//    const app = await NestFactory.create(AppModule);
//    await app.listen(3000);
// }
// bootstrap();
