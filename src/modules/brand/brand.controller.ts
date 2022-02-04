import { FastifyInstance, FastifyReply } from 'fastify';
import { getBrandList } from './brand.service';
import { getRepository, Repository } from 'typeorm';
import { Brand } from './brand.entity';

const brandController = (fastify: FastifyInstance, options, done) => {
  fastify.get('/', async(fastify, reply) => {
    const repo: Repository<Brand> = getRepository(Brand);
    const brands: Brand[] = await repo.find();
    reply.send(brands);
  });
  done();
};

export default brandController;
