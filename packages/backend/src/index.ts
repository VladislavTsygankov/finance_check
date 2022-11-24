import server from "./server";

const PORT = Number(process.env.PORT) || 4000;

const start = async () => {
  try {
    await server.listen({ port: PORT, host: "0.0.0.0" });

    server.log.info(`Server running on port = ${PORT}`);
  } catch(e) {
    server.log.error(e);
    process.exit(1);
  }
};

start();