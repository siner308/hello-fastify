import 'reflect-metadata';
import Fastify, { FastifyInstance, FastifyReply, FastifyRequest, RouteShorthandOptions } from 'fastify';
import fastifyTypeorm from 'fastify-typeorm-plugin';
import typeormConfig from './database/ormconfig';
import router from './router';

const server: FastifyInstance = Fastify();
server.register(fastifyTypeorm, typeormConfig);

const opts: RouteShorthandOptions = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          pong: {
            type: 'number',
          },
        },
      },
    },
  },
};

server.get('/ping', opts, async (request: FastifyRequest, reply: FastifyReply) => {
  console.log(request.headers);
  return { pong: 'it worked!' };
});

// server.register(brandRepo)

server.register(router, { prefix: '/' });

export default server;
