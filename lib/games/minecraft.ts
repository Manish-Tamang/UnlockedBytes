import type { Game } from "../types"

export const minecraft: Game = {
  slug: "minecraft",
  title: "Minecraft",
  shortDescription: "A sandbox game that allows players to build and explore virtual worlds made up of blocks.",
  longDescription: `Minecraft is a sandbox video game developed by Mojang Studios. The game was created by Markus "Notch" Persson in the Java programming language and released as a public alpha for personal computers in 2009 before officially releasing in November 2011, with Jens Bergensten taking over development.

In Minecraft, players explore a blocky, procedurally generated 3D world with virtually infinite terrain, and may discover and extract raw materials, craft tools and items, and build structures, earthworks, and machines. Depending on game mode, players can fight computer-controlled mobs, as well as cooperate with or compete against other players in the same world.

Game modes include:
- Survival mode, where players must acquire resources to build the world and maintain health
- Creative mode, where players have unlimited resources and access to flight
- Adventure mode, where players can play custom maps created by other players
- Spectator mode, where players can fly around and clip through blocks, but cannot place or destroy any

The game's open-ended nature allows players to create their own gameplay, objectives, and rules, which has led to the creation of countless player-created challenges, mini-games, and adventures.`,
  image: "/placeholder.svg?height=80&width=80",
  images: [
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
  ],
  size: "2 GB",
  subCategory: "Sandbox, Adventure, Survival",
  downloadLink: "https://example.com/downloads/minecraft",
}

