import { gta5 } from "./games/gta-5"
import { eldenRing } from "./games/elden-ring"
import { cyberpunk2077 } from "./games/cyberpunk-2077"
import { minecraft } from "./games/minecraft"
import { fortnite } from "./games/fortnite"
import { doomEternal } from "./games/doom-eternal"
import type { Game } from "./types"

import { callOfDuty } from "./games/call-of-duty"
import { assassinsCreed } from "./games/assassins-creed"
import { theWitcher } from "./games/the-witcher"
import { redDeadRedemption } from "./games/red-dead-redemption"
import { fifa } from "./games/fifa"
import { leagueOfLegends } from "./games/league-of-legends"
import { valorant } from "./games/valorant"
import { amongUs } from "./games/among-us"
import { fallGuys } from "./games/fall-guys"

export const games: Game[] = [
  gta5,
  eldenRing,
  cyberpunk2077,
  minecraft,
  fortnite,
  doomEternal,
  callOfDuty,
  assassinsCreed,
  theWitcher,
  redDeadRedemption,
  fifa,
  leagueOfLegends,
  valorant,
  amongUs,
  fallGuys,
]

export function getGameBySlug(slug: string): Game | undefined {
  return games.find((game) => game.slug === slug)
}

export function getAllGames(): Game[] {
  return games
}

export function getPaginatedGames(
  page = 1,
  limit = 10,
): {
  games: Game[]
  totalGames: number
  totalPages: number
} {
  const startIndex = (page - 1) * limit
  const endIndex = startIndex + limit
  const paginatedGames = games.slice(startIndex, endIndex)

  return {
    games: paginatedGames,
    totalGames: games.length,
    totalPages: Math.ceil(games.length / limit),
  }
}

export function searchGames(query: string): Game[] {
  const searchTerm = query.toLowerCase()

  return games.filter(
    (game) =>
      game.title.toLowerCase().includes(searchTerm) ||
      game.shortDescription.toLowerCase().includes(searchTerm) ||
      game.subCategory.toLowerCase().includes(searchTerm),
  )
}

