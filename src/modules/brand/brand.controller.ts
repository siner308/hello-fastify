import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import { Brand } from './brand.entity';

const brandController = (fastify: FastifyInstance, options, done) => {
  fastify.get('/', async(request: FastifyRequest, reply: FastifyReply) => {
    const brands: Brand[] = await fastify.brand.repo.find();
    reply.send(brands);
  });
  done();
};

export default brandController;
