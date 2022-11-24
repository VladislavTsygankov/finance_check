import { Quote } from "@stoqey/finnhub";
import FinnhubClient from "../finnhub-client";

const getCostByTicker = async (ticker: string): Promise<Quote> => {
  return await FinnhubClient.getQuote(ticker);
};

export default {
  getCostByTicker
}