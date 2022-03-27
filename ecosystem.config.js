module.exports = {
  apps : [{
    script: 'index.js',
    watch: '.',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    },
  }, {
    script: './service-worker/',
    watch: ['./service-worker']
  }],

  deploy : {
    production : {
      user : 'root',
      host : '81.70.9.154',
      port : '22',
      ref  : 'origin/master',
      repo : 'https://github.com/Mythcoder1016/SDAUYYDS.git',
      path : '/www/blog/production',
      'pre-deploy-local': '',
      'pre-deploy': 'git fetch --all',
      'post-deploy' : 'npm install --registry=https://registry.npm.taobao.org && npm run build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
    }
  }
};
