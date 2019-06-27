## TSLint

```bash
# 检查并自动修成部分错误
yarn lint
```

## Git commit

commit 提交规范遵循 `Angular` 社区规范。

使用 `yarn commit` 代替 `git commit`

## antd

如果你使用 `create-react-app` 创建基础项目并且没有进行 `eject` 操作，你可以按照官方指南安装 `antd`。

如果你进行了 `eject` 操作，则可以使用以下方法进行安装。

### babel-loader

`yarn add babel-plugin-import -D`

然后在 babel-loader 中进行配置

```js
{
  test: /\.(js|mjs|jsx|ts|tsx)$/,
  loader: require.resolve('babel-loader'),
  options: {
    // ...
    plugins: [
      // ...
      [
        require.resolve('babel-plugin-import'),
        {
          libraryDirectory: "es",
          libraryName: "antd",
          style: "css",
        }
      ]
    ],
    // ...
  },
},
```

### ts-loader

`yarn add ts-import-plugin -D`

```js
{
  test: /\.(ts|tsx)$/,
  use: [
    {
      loader: require.resolve("ts-loader"),
      options: {
        // ...
        getCustomTransformers: () => ({
          before: [
            tsImportPluginFactory({
              libraryDirectory: "es",
              libraryName: "antd",
              style: "css",
            }),
          ],
        }),
      },
    },
  ],
},
```

## Browserslist

使用 `yarn browserslist` 来查看当前应用所支持的浏览器列表。

## CSS and Sass

全局样式文件名使用 `*.css *.scss`，要开启 `CSS Module` 则使用 `*.module.css *.module.scss`。

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
