import { Repository } from 'typeorm';
import { Brand } from './modules/brand/brand.entity';

declare module 'fastify' {
  interface FastifyInstance {
    brand: {
      repo: Repository<Brand>;
    };
  }
}
