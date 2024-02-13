const { join } = require('path');

module.exports = {
  default: ({ env }) => ({
    jwtSecret: env("JWT_SECRET"),
    jwt: {
      expiresIn: "30d",
    },
    ratelimit: {
      interval: 60000,
      max: 10,
    },
  }),
  graphql: {
    endpoint: '/graphql',
    config: {
      generateArtifacts: true,
      artifacts: {
        schema: join(__dirname, '..', 'graphql', 'schema.graphql'),
        typegen: join(__dirname, '..', 'graphql', 'types.d.ts'),
      },
    }
  },
};
