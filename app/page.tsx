"use client"

import { getPaginatedGames } from "@/lib/games"
import { GameCard } from "@/components/game-card"
import { Pagination } from "@/components/pagination"
import { Gamepad2 } from "lucide-react"
import { motion } from "framer-motion"
import { useSearchParams } from "next/navigation"
import Image from "next/image"

export default function Home() {
  const searchParams = useSearchParams()
  const pageParam = searchParams.get("page")
  const page = pageParam ? Number.parseInt(pageParam) : 1
  const itemsPerPage = 12;
  const { games, totalGames, totalPages } = getPaginatedGames(page, itemsPerPage)

  return (
    <main className="container py-8 md:py-12">

      <motion.section
        className="flex flex-col lg:flex-row items-center justify-between mb-16 md:mb-20 gap-8 lg:gap-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="lg:w-1/2 text-center lg:text-left">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Welcome to <span className="text-primary">UnlockedBytes</span>
          </motion.h1>
          <motion.p
            className="text-lg text-muted-foreground mb-6 max-w-xl mx-auto lg:mx-0"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Your one-stop platform to discover and download high-quality PC games — completely free, forever.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <button className="bg-primary text-primary-foreground px-6 py-3 rounded-md font-semibold hover:bg-primary/90 transition duration-200 ease-in-out shadow-md">
              Start Downloading
            </button>
            <button className="bg-secondary text-secondary-foreground px-6 py-3 rounded-md font-semibold hover:bg-secondary/90 transition duration-200 ease-in-out border border-border">
              Explore Collection
            </button>
          </motion.div>
        </div>

        <motion.div
          className="lg:w-1/2 w-full"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative aspect-video w-full max-w-2xl mx-auto lg:max-w-none">
            <Image
              src="https://cdn.sanity.io/images/3do82whm/next/67f5df8a8dc397a7559935772d6aea7e17dfcf30-3232x1868.png?w=1920&q=75&fit=clip&auto=format"
              alt="UnlockedBytes Platform"
              fill
              className="object-cover rounded-lg shadow-xl"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
            />
          </div>
        </motion.div>
      </motion.section>

      <motion.div
        className="flex flex-col items-center mb-10 md:mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className="bg-primary/10 p-3 rounded-full mb-4 inline-block">
          <Gamepad2 className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">Featured Games</h2>
        <p className="text-muted-foreground text-center max-w-2xl px-4">
          Browse our curated selection of popular and newly added games available for download.
        </p>
      </motion.div>

      {games.length > 0 ? (
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6, staggerChildren: 0.1 }}
        >
          {games.map((game, index) => (
            <motion.div
              key={game.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <GameCard game={game} index={index} />
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <motion.div
          className="text-center text-muted-foreground py-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          No games found for this page.
        </motion.div>
      )}

      {totalPages > 1 && (
        <motion.div
          className="mt-12 md:mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Pagination
            totalItems={totalGames}
            itemsPerPage={itemsPerPage}
            currentPage={page}
          />
        </motion.div>
      )}
    </main>
  )
}
