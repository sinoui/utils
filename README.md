# @sinoui/utils

[![npm version](https://img.shields.io/npm/v/@sinoui/utils)](https://www.npmjs.com/package/@sinoui/utils)
[![downloads](https://img.shields.io/npm/dm/@sinoui/utils)](https://www.npmjs.com/package/@sinoui/utils)

sinoui 工具库。

<!-- TOC -->

- [@sinoui/utils](#sinouiutils)
  - [API](#api)
    - [debounce](#debounce)
    - [animate](#animate)
  - [本地开发](#本地开发)
    - [`yarn start`](#yarn-start)
    - [`yarn build`](#yarn-build)
    - [`yarn lint`](#yarn-lint)
    - [`yarn format`](#yarn-format)
    - [`yarn test`](#yarn-test)

<!-- /TOC -->

## API

### debounce

`0.1.0`

[防抖函数](https://sinoui.github.io/sinoui-guide/docs/debounce-and-throttle-guide)的简易实现。与 [lodash/debounce](https://lodash.com/docs/4.17.15#debounce) 类似。

```ts
import { debounce } from '@sinoui/utils';

const callback = () => console.log('update');
const debounced = debounce(callback);

// 执行
debounced();
// 取消执行
debounced.cancel();
```

方法类型：

```ts
function debounce(func: Function, [wait = 166]): Function;
```

参数：

| 参数名称 | 说明                                   |
| -------- | -------------------------------------- |
| func     | 执行的回调函数                         |
| wait     | 等待时长。单位是毫秒。默认为 `166ms`。 |
| options  | 配置项。默认为`{}`。|
| options.leading | 默认为`false`。设置为 `true`，则第一次函数调用会立马执行。|

返回值：

返回包装后的函数。此函数还有一个 `cancel` 属性，执行 `cancel()`，可以取消 `func` 的执行。

### animate

`0.2.0`

简单的动画执行函数。

```ts
import { animate } from '@sinoui/utils';

const handleUpdate = (currentValue) => console.log(currentValue);
const cancel = animate(0, 1000, 250, handleUpdate);

// 取消动画的执行
cancel();
```

方法类型：

```ts
function animate(
  start: number,
  end: number,
  duration: number,
  onUpdate: (currentValue: number) => void,
  easingFunction = linear,
): () => void;
```

参数：

| 参数名称       | 说明                                                                                                                            |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| start          | 开始值                                                                                                                          |
| end            | 结束值                                                                                                                          |
| duration       | 动画时长                                                                                                                        |
| onUpdate       | 动画过程中值发生变更的回调函数                                                                                                  |
| easingFunction | 缓动函数。默认为线性缓动函数。可以在 [js-easing-functions](https://github.com/bameyrick/js-easing-functions) 找到更多缓动函数。 |

返回值：

返回可以取消动画执行的函数。执行此函数，则结束动画。

## 本地开发

项目中有以下可用的命令。

### `yarn start`

在开发和监听模式下启动项目。当代码发生变化时就会重新编译代码。它同时会实时地向你汇报项目中的代码错误。

### `yarn build`

打包，并将打包文件放在`dist`文件夹中。使用 rollup 对代码做优化并打包成多种格式（`Common JS`，`UMD`和`ES Module`）。

### `yarn lint`

`yarn lint`会检查整个项目是否有代码错误、风格错误。

开启 vscode 的 eslint、prettier 插件，在使用 vscode 编码时，就会自动修正风格错误、提示语法错误。

### `yarn format`

`yarn format`可以自动调整整个项目的代码风格问题。

### `yarn test`

`yarn test`以监听模式启动 jest，运行单元测试。

开启 vscode 的 jest 插件，会在文件变化时自动运行单元测试。
