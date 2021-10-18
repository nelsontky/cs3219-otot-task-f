import {
  CacheInterceptor,
  Controller,
  Get,
  UseInterceptors,
} from "@nestjs/common";
import { CatsService } from "./cats.service";

@Controller("cats")
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get("no-cache")
  findAll() {
    return this.catsService.findAll();
  }

  @UseInterceptors(CacheInterceptor)
  @Get("cached")
  findAllCached() {
    return this.catsService.findAll();
  }
}
