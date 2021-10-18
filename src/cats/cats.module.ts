import { CacheModule, Module } from "@nestjs/common";
import { CatsService } from "./cats.service";
import { CatsController } from "./cats.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Cat } from "./entities/cat.entity";
import * as redisStore from "cache-manager-redis-store";

@Module({
  imports: [
    CacheModule.register({
      store: redisStore,
      host: "redis",
      port: 6379,
      ttl: 10,
    }),
    TypeOrmModule.forFeature([Cat]),
  ],
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatsModule {}
