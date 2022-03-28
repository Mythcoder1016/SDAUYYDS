module.exports = {
  apps : [{
    script: 'scripts/start.js',
    watch: '.',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    },
  }],

  deploy : {
    production : {
      user : 'root',
      host : '81.70.9.154',
      port : '22',
      ref  : 'origin/master',
      repo : 'git@github.com:Mythcoder1016/SDAUYYDS.git',
      path : '/root/www/blog',
      'pre-deploy-local': '',
      'pre-deploy': 'git fetch --all',
      'post-deploy' : 'npm install --registry=https://registry.npm.taobao.org && npm run build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
    }
  }
};
