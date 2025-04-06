import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-[70vh] py-8 text-center">
      <h1 className="text-4xl font-bold mb-4">404 - Game Not Found</h1>
      <p className="text-muted-foreground mb-8 max-w-md">
        The game you're looking for doesn't exist or has been removed from our library.
      </p>
      <Button asChild>
        <Link href="/">Return to Home</Link>
      </Button>
    </div>
  )
}

