module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1446),
  app: {
    keys: env.array('APP_KEYS'),
  },
  vercel: {
    // Required
    token: env('VERCEL_TOKEN'),
    // Required
    projectId: env('VERCEL_PROJECT_ID'),
    // Required (hooks)
    triggers: {
        production: env('VERCEL_TRIGGER_PRODUCTION')
    }
  }
});
