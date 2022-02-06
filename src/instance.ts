import 'reflect-metadata';
import Fastify, { fastify, FastifyInstance, FastifyReply, FastifyRequest, RouteShorthandOptions } from 'fastify';
import fastifyTypeorm from 'fastify-typeorm-plugin';
import typeormConfig from './database/ormconfig';
import router from './router';
import { Brand } from './modules/brand/brand.entity';
import { getRepository, Repository } from 'typeorm';
import { FastifyPluginOptions } from 'fastify/types/plugin';

const instance: FastifyInstance = Fastify();

// typeorm plugin
instance.register(fastifyTypeorm, typeormConfig);

// service plugins
instance.register((instance: FastifyInstance, opts: FastifyPluginOptions, done) => {
  instance.decorate('brand', {
    repo: getRepository(Brand),
  });
  instance.register(router, { prefix: '/' });
  done();
});

export default instance;
