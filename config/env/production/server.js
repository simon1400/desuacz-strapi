module.exports = ({ env }) => ({
  proxy: true,
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1446),
  url: env('HOST_URL'), // Sets the public URL of the application.
  app: {
    keys: env.array('APP_KEYS')
  },
});
