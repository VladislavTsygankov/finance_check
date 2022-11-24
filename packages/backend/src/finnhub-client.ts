import FinnhubAPI from '@stoqey/finnhub';

const finnhubAPI = new FinnhubAPI(process.env.FINNHUB_API_KEY || "");

export default finnhubAPI;
