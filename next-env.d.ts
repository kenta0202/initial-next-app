/// <reference types="next" />
/// <reference types="next/types/global" />
// ↑デフォルト
/// <reference types="next/image-types/global" />
/*
これらのファイルで宣言されていてコンパイル対象になっていることで、
Reactがグローバルで使えるようになっていたり、
css modulesもコンパイルできる

*/

/*
///から始まるコメントはTriple-Slash Directivesと呼ばれるコメント
///の後にxmlを書く
TypeScript特有のもので、ファイルの先頭にあるTriple-Slash Directivesはコンパイラへの指示として読み込まれます
exportされていないようなファイルなどが依存関係として必要な時にこのディレクティブを使う
tsconfig.jsonでincludeしてこれらの宣言がコードの中で使えるようにしている
用途：jQueryのようなexport/importを使って書かれていないようなライブラリをTypeScriptで利用したい場合などに使えた

/// <reference path="hoge" />
例：
lib/log.ts
const log = (...args: any[]) => console.log(...args)

src/index.ts
/// <reference path="../lib/log.ts" />
log('Hello World!')


/// <reference types="hoge" />
@types/node/index.d.tsで宣言された名前を使用することが宣言


*/
