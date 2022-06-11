## 質問

- 型アサーションを使う場面の例知りたい

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
} catch (err: unknown) {
if (err instanceof Error) {
throw err
}

## TypeScript

- アノテーション>アサーション
- ReturnType:関数の戻り値の型から新たな型を生成
  - type hogehoge = ReturnType<関数型>
  - 使用例
    - import { calculateByAllOperator } from "./calculateByAllOperator";
    - type Props = ReturnType<typeof calculateByAllOperator>;
    - const hogehogeComponent: React.FC<Props> = (props) => {...}
- ユニオンのリテラル型から型を抽出する Extract
  - Extract<対象の型, { type: "route" }<!-- 抜き出すものの一部 -->>

## Tips

- Recoil に key に uuid を使ってユニークにしてしまう → 意図しない衝突を防ぐ
