# sryd-token-previewer 🖥

## Install

```
npm i sryd-token-previewer
```

## API

### ThemeEditor

| Property         | Description                              | Type                           | Default |
| ---------------- | ---------------------------------------- | ------------------------------ | ------- |
| theme            | Controlled Theme object                  | `Theme`                        | -       |
| onThemeChange    | Callback when `theme` changed            | `(theme: Theme) => void`       | -       |
| locale           | Language used in ThemeEditor             | `Locale`                       | `zhCN`  |
| actions          | Actions displayed on the right of header | `React.ReactNode`              | -       |
| advanced         | Advance mode                             | `boolean`                      | -       |
| onAdvancedChange | Callback when `advanced` change          | `(advanced: booleaen) => void` | -       |
| children         | Preview area.                            | `ReactNode`                    | -       |

### Theme

| Property | Description                    | Type          |
| -------- | ------------------------------ | ------------- |
| name     | Name of Theme                  | `string`      |
| key      | Used as `key` for ReactElement | `string`      |
| config   | Theme config of sryd           | `ThemeConfig` |

## Development

```
npm install
npm start
```

## License

sryd-token-previewer is released under the MIT license.
