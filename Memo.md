## レンダリングのアプローチ

- Fetch-on-Render（レンダリングしたうえでフェッチする）
  - FCP→FMP→LCP
  - 非同期処理はカーレースで帰ってきた順に state が更新される
- Fetch-Then-Render(子孫コンポーネントに必要となるデータを親コンポーネントでまとめて並列的に取得する方法)
  - FCP→(同時に。長くなる)→FMP→(すぐ)→LCP
- Render-as-You-Fetch()
  - Suspence と useQuery
  - レンダリングしながら Fetch を実施
  - レンダリングしている最中
    - 未取得のデータ →Fallback を Render
    - データフェッチ完了 →Content を Render
  - レンダリングは計 2 回

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

## TypeScript で Jest ファイルを走らせる(ビルドする)方法

- ➀Next12 以降
  - メリット1
    - jest.cofing.json の記述の簡略化
  - メリット2
    - ビルドをする Webpack の一部を SWC で置き換えることでビルドの高速化
  - コンパイル：Babel→SWCLoader
  - 圧縮Terser→swcMinify
- ➁TypeScript のコンパイルに TypeScript を使う場合
  - ts-jest が必要
  - jest.config.json で preset: 'ts-jest' を指定
- ➂TypeScript のコンパイルに Babel を使う場合
  - babel.config.js で perset の設定
  - @preset/typescript と babel-jest をインストール
