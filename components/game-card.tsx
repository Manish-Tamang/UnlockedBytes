"use client"

import Link from "next/link"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Game } from "@/lib/types"
import { motion } from "framer-motion"

interface GameCardProps {
  game: Game
  index: number
}

export function GameCard({ game, index }: GameCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ scale: 1.02 }}
      className="w-full"
    >
      <Link href={`/games/${game.slug}`}>
        <Card className="overflow-hidden h-full transition-all duration-200 hover:shadow-lg hover:border-primary">
          <div className="flex p-4">
            <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-md">
              <Image
                src={game.image || "/placeholder.svg"}
                alt={game.title}
                fill
                className="object-cover"
                sizes="80px"
              />
            </div>

            <div className="flex flex-col ml-4 flex-grow">
              <h3 className="font-bold text-base line-clamp-1">{game.title}</h3>
              <p className="text-muted-foreground text-xs line-clamp-2 mt-1">{game.shortDescription}</p>
              <div className="mt-auto pt-2 flex gap-2">
                {game.subCategory
                  .split(",")
                  .slice(0, 2)
                  .map((category, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {category.trim()}
                    </Badge>
                  ))}
              </div>
            </div>

            <div className="flex flex-col items-end justify-between ml-4 min-w-[70px]">
              <Badge variant="outline" className="whitespace-nowrap bg-primary/10 text-primary font-medium">
                {game.size}
              </Badge>
            </div>
          </div>
        </Card>
      </Link>
    </motion.div>
  )
}

