import { FastifyTypeormOptions } from 'fastify-typeorm-plugin';
import env from '../env';
import { Brand } from '../entities/brand.entity';
import { Hashtag } from '../entities/hashtag.entity';
import { Place } from '../entities/place.entity';
import { User } from '../entities/user.entity';

const typeormConfig: FastifyTypeormOptions = {
  type: 'mysql',
  database: env.db.name,
  host: env.db.host,
  port: env.db.port,
  username: env.db.username,
  password: env.db.password,
  entities: [Brand, Hashtag, Place, User],
  synchronize: false,
  logging: true,
  migrations: [],
  cli: {
    entitiesDir: 'src/entities',
    migrationsDir: 'src/migrations',
  },
}

export default typeormConfig;
