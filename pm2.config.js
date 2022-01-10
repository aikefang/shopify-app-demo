module.exports = {
  apps : [
    {
      name: "shopify-app-demo",                   // 项目名
      script: "app.js",               // 执行文件
      watch: true,                             // 是否监听文件变动然后重启
      // cwd: "./",
      exec_interpreter: "node",
      "log_date_format": "YYYY-MM-DD HH:mm Z",
      env_production: {
        "PORT": 1999,
        "NODE_ENV": "production",
      },
      "ignore_watch": [                        // 不用监听的文件
        "node_modules",
        "logs",
        "tmp"
      ],
      "error_file": "/home/wwwroot/shopify-app-demo/logs/err.log",
      "out_file": "/home/wwwroot/shopify-app-demo/logs/out.log",
    }
  ]
}
