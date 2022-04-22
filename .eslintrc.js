module.exports = {
  root: true,
  env: {
    // プログラムの実行環境を ESLint に教える
    es6: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  // デフォルトではeslinitのparserはないからインストールする

  parserOptions: {
    // パーサの各種実行オプションを設定する
    // ES2016 以降の構文を有効にするに
    sourceType: 'module',
    ecmaVersion: 2020, // Node.js 12の場合は2019、他のバージョンのNode.jsを利用している場合は場合は適宜変更する
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.eslint.json'],
  },
  plugins: [
    /* 任意の（インストール済みの）プラグインを組み込む
    これをしただけではルールはオンにならない
     */
    '@typescript-eslint',
    // 'tailwindcss',
    // 'jest',
    'import',
    'jsx-a11y',
    'react',
    'react-hooks',
  ],
  extends: [
    /*   どのルールセットを導入するか？
    プラグインが提供する推奨設定を指定
    ここに記述した共有設定間でルール設定が重複している場合、
    リストの後ろに記述されたほうが優先される*/
    'plugin:react/recommended',
    // "airbnb",
    // "airbnb/hooks",
    // "plugin:import/errors",
    // "plugin:import/warnings",
    // "plugin:import/typescript",
    // "plugin:@typescript-eslint/recommended",
    // "plugin:@typescript-eslint/recommended-requiring-type-checking",
  ],
  rules: {
    //     "linebreak-style": 0,
    //     "react/function-component-definition": [
    //       2,
    //       {
    //         namedComponents: "function-declaration",
    //         unnamedComponents: "function-expression",
    //       },
    //     ],
    //     // 適用する個々のルールと、エラーレベルや例外などその設定値を記述する
    //     // 定義前の変数の使用を禁じる ESLint と TypeScript ESLint のルール
    //     "no-use-before-define": "off",
    //     // クラスメンバーの定義の間に 1 行記述のメンバーのときは空行を入れなくていい
    //     "@typescript-eslint/no-use-before-define": ["error"],
    //     "lines-between-class-members": [
    //       "error",
    //       "always",
    //       {
    //         exceptAfterSingleLine: true,
    //       },
    //     ],
    //     //void 演算子の（式としての）使用を禁ずるルール。文はOK
    //     "no-void": [
    //       "error",
    //       {
    //         allowAsStatement: true,
    //       },
    //     ],
    //     // return 文の前に常に空行を入れる
    //     "padding-line-between-statements": [
    //       "error",
    //       {
    //         blankLine: "always",
    //         prev: "*",
    //         next: "return",
    //       },
    //     ],
    //     // 使用していない変数の定義を許さないルール。ここでは変数名を _ にしたときのみ許容するように設定
    //     "@typescript-eslint/no-unused-vars": [
    //       "error",
    //       {
    //         vars: "all",
    //         args: "after-used",
    //         argsIgnorePattern: "_",
    //         ignoreRestSiblings: false,
    //         varsIgnorePattern: "_",
    //       },
    //     ],
    //     /*     インポートの際のファイル拡張子を記述するかを定義するルール。npm パッケージ以外の
    // ファイルについて .js、.jsx、.ts、.tsx のファイルのみ拡張子を省略し、他のファイルは拡張子
    // を記述させるように設定 */
    //     "import/extensions": [
    //       "error",
    //       "ignorePackages",
    //       {
    //         js: "never",
    //         jsx: "never",
    //         ts: "never",
    //         tsx: "never",
    //       },
    //     ],
    //     // JSX のファイル拡張子を制限するルール。eslint-config-airbnb で .jsx のみに限定されているので、.tsx を追加
    //     "react/jsx-filename-extension": ["error", { extensions: [".jsx", ".tsx"] }],
    //     /* JSX でコンポーネントを呼ぶときの props の記述にスプレッド構文を許さないルール。
    // eslint-config-airbnb にてすべて禁止されているが、<Foo {...{ bar, baz } /}> のように個々の
    // props を明記する書き方のみ許容するように設定 */
    //     "react/jsx-props-no-spreading": [
    //       "error",
    //       {
    //         html: "enforce",
    //         custom: "enforce",
    //         explicitSpread: "ignore",
    //       },
    //     ],
    //     /* JSX 記述を使用する場合に react モジュールを React としてインポートすることを強制す
    // る。新しい JSX 変換形式を用いる場合はインポートが不要になるためこの設定を無効化 */
    //     "react/react-in-jsx-scope": "off",
  },
  /* 任意の glob パターン 60 にマッチするファイルのみ、ルールの適用を上書きできるプ
ロパティ。ここでは react/prop-types ルールを通常の JSX ファイルでは適用したままにして、.tsx
ファイルでは無効にするために使ってる。 */
  overrides: [
    {
      files: ['*.tsx'],
      /* コンポーネントの props に型チェックを行うための propTypes プロパティ 59 の定義を強制
するルール。eslint-config-airbnb で設定されているが、TypeScript の場合は不要なのでファイル
拡張子が .tsx の場合に無効化するよう設定を上書き */
      rules: {
        'react/prop-types': 'off',
      },
    },
  ],
  /* 任意の実行ルールに適用される追加の共有設定。tsconfig.json で src/ 配下のファイ
ルを絶対パスでインポートできるようにしていたけど 61、このままでは eslint-plugin-import がその
絶対パスを解決できずにエラーを出してしまう。だからここでは eslint-plugin-import が内部で使用
している eslint-import-resolver-node
62 というモジュール解決プラグインに対して、パスに src を追加
してあげてる */
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
  ignorePatterns: [
    'next-env.d.ts',
    'build',
    'public',
    '**/coverage',
    '**/node_modules',
    '**/*.min.js',
    '*.config.js',
    '.*lintrc.js',
  ],
};