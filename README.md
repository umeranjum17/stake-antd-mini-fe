# ⚛️ Create React Ant Design Boilerplate <br>[![GitHub issues](https://img.shields.io/github/issues/PW486/react-antd-boilerplate.svg?style=flat-square&color=brown)](https://github.com/PW486/react-antd-boilerplate/issues) [![GitHub forks](https://img.shields.io/github/forks/PW486/react-antd-boilerplate.svg?style=flat-square)](https://github.com/PW486/react-antd-boilerplate/network) [![GitHub stars](https://img.shields.io/github/stars/PW486/react-antd-boilerplate.svg?style=flat-square&color=orange)](https://github.com/PW486/react-antd-boilerplate/stargazers) [![GitHub license](https://img.shields.io/github/license/PW486/react-antd-boilerplate.svg?style=flat-square&color=violet)](https://github.com/PW486/react-antd-boilerplate/blob/develop/LICENSE) ![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/PW486/react-antd-boilerplate.svg?color=blueviolet&style=flat-square) ![GitHub last commit](https://img.shields.io/github/last-commit/PW486/react-antd-boilerplate.svg?style=flat-square&color=red) [![David](https://img.shields.io/david/PW486/react-antd-boilerplate.svg?style=flat-square&color=green)](https://david-dm.org/PW486/react-antd-boilerplate)

> **[Create React App](https://github.com/facebook/create-react-app) + [Ant Design](https://ant.design) + [React Boilerplate](https://github.com/react-boilerplate/react-boilerplate)**

Need to change the **`REACT_APP_BASE_URL`**. Here is an example server. [https://github.com/PW486/express-ts-starter](https://github.com/PW486/express-ts-starter)

## Getting Started

```
> git clone https://github.com/PW486/react-antd-boilerplate.git
> npm install
> npm start
```

### Set Environments

```
> cp .env.example .env
> vi .env
```

### Building

```
> npm run build
```

## Developing

- Remove local branches deleted on remote server
  ```
  > git fetch -p && for branch in `git branch -vv --no-color | grep ': gone]' | awk '{print $1}'`; do git branch -D $branch; done
  ```
- Keep the linter and formatter rules
- Check unused, outdated states of dependencies : **`depcheck` `npm-check-updates`**

### Tech Stack

| Category            | Name           |
| ------------------- | -------------- |
| Language            | **JavaScript** |
| UI Framework        | **React**      |
| State Manager       | **Redux**      |
| Side Effect Manager | **Redux Saga** |
| Selector            | **Reselect**   |
| UI Component        | **Ant Design** |
| Authentication      | **JWT**        |
| Linter              | **ESLint**     |
| Formatter           | **Prettier**   |

## Demo

[![Create React Ant Design Boilerplate](https://img.youtube.com/vi/-TT-cMpDv1c/0.jpg)](https://www.youtube.com/watch?v=-TT-cMpDv1c)
<br>
[YouTube](https://www.youtube.com/watch?v=-TT-cMpDv1c)

## License

Copyright © 2019 [DONGGEON LIM](https://github.com/PW486).<br />
This project is [MIT](https://github.com/PW486/react-antd-boilerplate/blob/master/LICENSE) licensed.