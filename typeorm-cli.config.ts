import { Coffee } from "src/coffees/entities/coffee.entity";
import { Flavor } from "src/coffees/entities/flavor.entity";
import { CoffeeRefactor1657221258745 } from "src/migrations/1657221258745-CoffeeRefactor";
import { SchemaSync1657223507222 } from "src/migrations/1657223507222-SchemaSync";
import { DataSource } from "typeorm";

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'postgres',
  entities: [Coffee, Flavor],
  migrations: [CoffeeRefactor1657221258745, SchemaSync1657223507222], 
})