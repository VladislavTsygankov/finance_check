import fastify from "fastify";
import cors from "@fastify/cors";
import financeController from "./controllers/finance";
import logger from "./logger";

const server = fastify({logger});

server.register(cors, {
  origin: ["http://localhost:3000", "http://localhost"],
});

server.register(financeController);

export default server;