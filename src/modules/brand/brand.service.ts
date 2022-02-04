import { FastifyInstance } from 'fastify';

export const getBrandList = (fastify: FastifyInstance, options, done) => {
  return fastify['brandRepo'].findAll()
}
