### \_App.tsx

- すべてのページにおいて、ページを初期化するために App コンポーネント
- ページ移動間の固定レイアウト,状態管理ライブラリとの結合,広告まわりの関数の実行や、NProgress などのローディングを設定

### \_document.tsx

- 全体の文書構造をカスタマイズ

### React-Testing-Library のインストール

- yarn add -D jest@27.5.1 @testing-library/react @testing-library/jest-dom jest-css-modules

## Document

### 例外を投げる

// 渡された数値が 0 以上ではない場合に例外を投げる関数
function assertPositiveNumber(num) {
if (num < 0) {
throw new Error(`${num} is not positive.`);
}
}

try {
// 0 未満の値を渡しているので、関数が例外を投げる
assertPositiveNumber(-1);
} catch (error) {
console.log(error instanceof Error); // => true
console.log(error.message); // => "-1 is not positive."
}
