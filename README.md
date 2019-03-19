# react-router
Пример использования реакт-роутера.

Для запуска выполнить:

```
npm install

npm start
```

Решение проблемы "cannot GET /URL" после перзагрузки страницы на определённом роуте:

В webpack.config.js добавить publicPath и historyApiFallback:
```
output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
    publicPath: '/'
},
...
devServer: {
    historyApiFallback: true,
},
```

https://tylermcginnis.com/react-router-cannot-get-url-refresh/