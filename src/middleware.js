import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
  const currentUser = {
    role: "admin",
    email: "test@admin.com"
  };
  let isServicePage = request.nextUrl.pathname.startsWith('/services');
  let isAdmin = currentUser.role === 'admin';
  if(isServicePage && !isAdmin){
    return NextResponse.redirect(new URL('/signIn', request.url))
  }
  return NextResponse.next()
}
 