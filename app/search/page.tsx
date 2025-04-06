"use client"

import { searchGames } from "@/lib/games"
import { GameCard } from "@/components/game-card"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Search } from "lucide-react"
import { motion } from "framer-motion"
import { useSearchParams } from "next/navigation"

export default function SearchPage() {
  const searchParams = useSearchParams()
  const query = searchParams.get("q") || ""
  const games = searchGames(query)

  return (
    <main className="container py-8">
      <div className="flex items-center gap-2 mb-6">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <h1 className="text-2xl font-bold">Search Results</h1>
      </div>

      <motion.div
        className="flex flex-col items-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="bg-muted p-4 rounded-lg flex items-center gap-3 w-full max-w-2xl">
          <Search className="h-5 w-5 text-muted-foreground" />
          <p className="text-lg">
            {query ? (
              <>
                Results for <span className="font-medium">"{query}"</span>
              </>
            ) : (
              "Please enter a search term"
            )}
          </p>
        </div>
      </motion.div>

      {games.length > 0 ? (
        <div className="flex flex-col gap-4 max-w-4xl mx-auto">
          {games.map((game, index) => (
            <GameCard key={game.slug} game={game} index={index} />
          ))}
        </div>
      ) : (
        <motion.div
          className="text-center py-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <p className="text-muted-foreground text-lg mb-4">No games found matching "{query}"</p>
          <Button asChild>
            <Link href="/">Return to Home</Link>
          </Button>
        </motion.div>
      )}
    </main>
  )
}