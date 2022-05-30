/*
リクエスト完了前に特定のコードを実行
Pros
・VercelにNext.jsをデプロイするとこのmiddleware部分をEdge Functionsで捌いてくれる
→ オリジンサーバーに触れことなくmiddlewareを実行できる



middlewareに処理された後のレスポンスがCDNにキャッシュされる。
→リロードしてもキャッシュが有効な間はx-middleware-modified-atは同じ値のまま


*/

import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// レスポンスヘッダーを追加
export function middleware(req: NextRequest) {
  const res = NextResponse.next()
  res.headers.set("x-middleware-modified-at", new Date().getTime().toString())
  return res
}
