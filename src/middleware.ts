import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();

  const supabase = createMiddlewareClient({ req, res });

    const { data: {session}, error } = await supabase.auth.getSession();
/*     console.log(data);
 */    console.log(error);
    
    if (!session) {
        return NextResponse.rewrite(new URL('/login', req.url))
    }

 
  

  return res;
}

export const config = {
    matchers: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ]
}