module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", `${process.env.HOST}`),
      port: env.int("DATABASE_PORT", `${process.env.PORT}`),
      database: env("DATABASE_NAME", `${process.env.DB_NAME}`),
      user: env("DATABASE_USERNAME", `${process.env.USER}`),
      password: env("DATABASE_PASSWORD", `${process.env.PASSWORD}`),
      schema: env("DATABASE_SCHEMA", "public"), // Not required
      ssl: {
        ca: env("DATABASE_CA"),
      },
    },
    debug: false,
  },
});
