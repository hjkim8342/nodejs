### 2024.01.30

1. pub, handlebars view engine use

### 2024.01.24

1. typescript delete

### typescript debugger

1. sudo npm install -g nodemon
2. launch.json

```
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "ts-node",
      "type": "node",
      "request": "launch",
      "restart": true,
      "runtimeExecutable": "nodemon",
      "program": "${workspaceFolder}/app.ts",
      "console": "integratedTerminal"
    }
  ]
}
```

### typescript

1. npm init
2. npm install -g ts-node

### compile & start

1. tsc
2. node dist/app.js
