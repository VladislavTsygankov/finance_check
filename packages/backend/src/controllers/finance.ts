import { Quote } from "@stoqey/finnhub";
import { FastifyInstance, FastifyPluginAsync } from "fastify";
import fp from "fastify-plugin";
import {
  FinanceRequestQuerySchema,
  FinanceRequestQuery
} from "../schemas";
import financeService from "../service/finance-service";


type Response = Quote | null;


const FinanceController: FastifyPluginAsync = async (server: FastifyInstance) => {
  server.get<{ Reply: Response, Querystring: FinanceRequestQuery }>(
    "/",
    {
      schema: {
        querystring: {
          description: "Querystring",
          ...FinanceRequestQuerySchema
        },
        response: {}
      }
    },
    async (request, reply) => {
      try {
        const {ticker} = request.query;

        const quote = await financeService.getCostByTicker(ticker);
        return reply.code(200).send(quote);
      } catch (err: any) {
        server.log.error(err);
        return reply.code(500).send(null);
      }
    }
  );
};

export default fp(FinanceController);
