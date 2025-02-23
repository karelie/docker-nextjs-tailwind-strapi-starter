module.exports = ({ env }) => ({
  connection: {
    client: "mysql",
    connection: {
      host: env("DATABASE_HOST", "db"),
      port: env.int("DATABASE_PORT", 3306),
      database: env("DATABASE_NAME", "backend"),
      user: env("DATABASE_USERNAME", "strapi"),
      password: env("DATABASE_PASSWORD", "strapi"),
      ssl: env.bool("DATABASE_SSL", false),
    },
  },
});
