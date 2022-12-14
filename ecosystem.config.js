module.exports = {
  apps : [{
    name   : "Desua strapi",
    script : "yarn start",
    env_production: {
      HOST: "0.0.0.0",
      PORT: "1445",
      APP_KEYS: "sFkZDYJcAH0PuIA99zq+VA==,Mqs1cBWOJLseGez1UqXXZQ==,et9iv4ZNrSs4b+sJvcdAbQ==,K0tcyEOzDd4xroikcNmSjA==",
      API_TOKEN_SALT: "JAxQqi9pCVWmmZ0qmRJD6A==",
      ADMIN_JWT_SECRET: "x3zJJiebLrQwT/gS7hzzVg==",
      JWT_SECRET: "/h3UTeCyJMABg0PenkgLMw==",
    }
  }],

  deploy : {
    production : {
      user : 'dimi',
      host : ['89.221.216.23'],
      ref  : 'origin/main',
      repo : 'git@github.com:simon1400/desuacz-strapi.git',
      path : '/var/www/desuacz/strapi',
      'post-deploy' : 'yarn && yarn build && pm2 reload ecosystem.config.js --env production',
    }
  }
};
