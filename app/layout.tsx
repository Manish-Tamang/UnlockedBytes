import type React from "react"
import ClientLayout from "./ClientLayout"
import "./globals.css"
import { Suspense } from "react"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>
          <Suspense fallback={<div className="text-center py-20">Loading...</div>}>
            {children}
          </Suspense>
        </ClientLayout>
      </body>
    </html>
  )
}
