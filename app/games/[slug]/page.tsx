"use client"

import { getGameBySlug } from "@/lib/games"
import { notFound, useParams } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download, ArrowLeft } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { motion } from "framer-motion"
import { DetailedHTMLProps, ImgHTMLAttributes, JSX, RefAttributes, useEffect, useState } from "react"
import cn from "clsx"
import { PlaceholderValue, OnLoadingComplete } from "next/dist/shared/lib/get-img-props"

function BlurImage(props: JSX.IntrinsicAttributes & Omit<DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, "height" | "width" | "loading" | "ref" | "alt" | "src" | "srcSet"> & { src: string | import("next/dist/shared/lib/get-img-props").StaticImport; alt: string; width?: number | `${number}`; height?: number | `${number}`; fill?: boolean; loader?: import("next/image").ImageLoader; quality?: number | `${number}`; priority?: boolean; loading?: "eager" | "lazy" | undefined; placeholder?: PlaceholderValue; blurDataURL?: string; unoptimized?: boolean; overrideSrc?: string; onLoadingComplete?: OnLoadingComplete; layout?: string; objectFit?: string; objectPosition?: string; lazyBoundary?: string; lazyRoot?: string } & RefAttributes<HTMLImageElement | null>) {
  const [isLoading, setLoading] = useState(true);
  return (
    <Image
      {...props}
      alt={props.alt}
      className={cn(
        props.className,
        'duration-700 ease-in-out rounded-lg',
        isLoading
          ? 'grayscale blur-2xl scale-110'
          : 'grayscale-0 blur-0 scale-100'
      )}
      onLoadingComplete={() => setLoading(false)}
    />
  );
}

export default function GamePage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const params = useParams()
  const slug = params?.slug as string
  const game = getGameBySlug(slug)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  if (!game) {
    notFound()
  }

  return (
    <main className="container py-8">
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-6">
          <Button variant="ghost" size="icon" asChild className="mb-4">
            <Link href="/">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>

          <motion.div
            className="flex flex-col gap-2"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <h1 className="text-3xl font-bold">{game.title}</h1>
            <div className="flex flex-wrap gap-2">
              {game.subCategory.split(",").map((category, index) => (
                <Badge key={index} variant="secondary">
                  {category.trim()}
                </Badge>
              ))}
              <Badge variant="outline" className="bg-primary/10 text-primary font-medium">
                {game.size}
              </Badge>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <Carousel className="w-full">
            <CarouselContent>
              {game.images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="relative aspect-video overflow-hidden rounded-lg">
                    <BlurImage
                      src={image || "/placeholder.svg"}
                      alt={`${game.title} screenshot ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </motion.div>

        <motion.div
          className="flex flex-col gap-6 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <div>
            <h2 className="text-xl font-semibold mb-2">About this game</h2>
            <p className="text-muted-foreground">{game.shortDescription}</p>
          </div>

          <div className="bg-muted/50 p-6 rounded-lg">
            <div className="whitespace-pre-line">{game.longDescription}</div>
          </div>

          <div className="flex justify-center mt-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a href={game.downloadLink} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="gap-2">
                  <Download className="h-5 w-5" />
                  Download Game
                </Button>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </main>
  )
}