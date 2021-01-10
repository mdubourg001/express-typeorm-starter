require("dotenv").config();

if (process.env.NODE_ENV === "production") {
  // TODO production database setup
  module.exports = {
    name: "default",
  };
} else if (process.env.NODE_ENV === "test") {
  // test database setup
  module.exports = {
    type: "better-sqlite3",
    name: "default",
    database: ":memory",
    entities: [__dirname + "/entity/*.ts"],
  };
} else {
  // development database setup
  module.exports = {
    type: "better-sqlite3",
    name: "default",
    database: "db.sqlite3",
    entities: [__dirname + "/entity/*.ts"],
    migrations: [__dirname + "/migrations/*.ts"],
    migrationsTableName: "__migration",
    cli: {
      migrationsDir: "migrations",
    },
    cache: true,
  };
}
