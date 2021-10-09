import { Controller, Get } from "@nestjs/common";

@Controller("/school")
export class AppController {
   @Get("/app")
   getRootRoute() {
      const students = "<h1>Jackie Chan</h1>";
      return students;
   }

   @Get("/app/schools")
   getSchools() {
      const schools = "<h1>More schools...</h1>";
      return schools;
   }
}
