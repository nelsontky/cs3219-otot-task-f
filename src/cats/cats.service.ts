import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { plainToClass } from "class-transformer";
import { Like, Repository } from "typeorm";
import { Cat } from "./entities/cat.entity";

import * as mockData from "./mock-data.json";

@Injectable()
export class CatsService {
  constructor(
    @InjectRepository(Cat)
    private readonly catsRepository: Repository<Cat>
  ) {
    // FOR DEMO PURPOSES
    // initialize database with 3000 cats whenever app is launched
    const newCats = mockData.map((data) => plainToClass(Cat, data));

    this.catsRepository.save(newCats);
  }

  findAll() {
    return this.catsRepository.find({ where: { name: Like("%a%") } });
  }
}
