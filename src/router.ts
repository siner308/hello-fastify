import { FastifyInstance } from 'fastify';
import brandController from './modules/brand/brand.controller';

const router = (fastify: FastifyInstance, opts, done) => {
  fastify.register(brandController, { prefix: '/brand' });
  done();
};

export default router;
