"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { motion } from "framer-motion"
import { FileUp, Send, ArrowLeft, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"

const formSchema = z.object({
  gameName: z.string().min(2, {
    message: "Game name must be at least 2 characters.",
  }),
  developer: z.string().min(2, {
    message: "Developer name must be at least 2 characters.",
  }),
  releaseYear: z.string().regex(/^\d{4}$/, {
    message: "Please enter a valid year (e.g., 2023).",
  }),
  category: z.string({
    required_error: "Please select a category.",
  }),
  description: z.string().min(10, {
    message: "Description must be at least 10 characters.",
  }),
  reason: z.string().min(10, {
    message: "Please tell us why you want this game.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
})

export default function RequestGamePage() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      gameName: "",
      developer: "",
      releaseYear: "",
      category: "",
      description: "",
      reason: "",
      email: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // In a real application, you would send this data to your backend
    console.log(values)

    // Simulate submission success
    setTimeout(() => {
      setIsSubmitted(true)
    }, 1000)
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  if (isSubmitted) {
    return (
      <main className="container py-8">
        <motion.div
          className="max-w-2xl mx-auto text-center px-4 md:px-0"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="h-10 w-10 text-primary" />
          </div>
          <h1 className="text-3xl font-bold mb-4">Request Submitted!</h1>
          <p className="text-muted-foreground mb-8">
            Thank you for your game request. Our team will review it and get back to you soon.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild className="w-full sm:w-auto">
              <Link href="/">Browse Games</Link>
            </Button>
            <Button variant="outline" asChild className="w-full sm:w-auto">
              <Link href="/request" onClick={() => setIsSubmitted(false)}>
                Submit Another Request
              </Link>
            </Button>
          </div>
        </motion.div>
      </main>
    )
  }

  return (
    <main className="container py-8">
      <div className="max-w-2xl mx-auto px-4 md:px-0">
        <Button variant="ghost" size="icon" asChild className="mb-6">
          <Link href="/">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>

        <motion.div
          className="flex flex-col items-center text-center mb-8 px-4 md:px-0"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-primary/10 p-3 rounded-full mb-4">
            <FileUp className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-3xl font-bold mb-2">Request a Game</h1>
          <p className="text-muted-foreground max-w-md">
            Can't find the game you're looking for? Fill out this form and we'll consider adding it to our collection.
          </p>
        </motion.div>

        <motion.div variants={container} initial="hidden" animate="show">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <motion.div variants={item}>
                <FormField
                  control={form.control}
                  name="gameName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Game Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter the full name of the game" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <motion.div variants={item}>
                  <FormField
                    control={form.control}
                    name="developer"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Developer</FormLabel>
                        <FormControl>
                          <Input placeholder="Game developer or publisher" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </motion.div>

                <motion.div variants={item}>
                  <FormField
                    control={form.control}
                    name="releaseYear"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Release Year</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., 2023" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </motion.div>
              </div>

              <motion.div variants={item}>
                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Category</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a category" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="action">Action</SelectItem>
                          <SelectItem value="adventure">Adventure</SelectItem>
                          <SelectItem value="rpg">RPG</SelectItem>
                          <SelectItem value="strategy">Strategy</SelectItem>
                          <SelectItem value="simulation">Simulation</SelectItem>
                          <SelectItem value="sports">Sports</SelectItem>
                          <SelectItem value="racing">Racing</SelectItem>
                          <SelectItem value="puzzle">Puzzle</SelectItem>
                          <SelectItem value="shooter">Shooter</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </motion.div>

              <motion.div variants={item}>
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Game Description</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Provide a brief description of the game"
                          className="min-h-[100px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </motion.div>

              <motion.div variants={item}>
                <FormField
                  control={form.control}
                  name="reason"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Why do you want this game?</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us why you want to see this game in our collection"
                          className="min-h-[100px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </motion.div>

              <motion.div variants={item}>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="We'll notify you when the game is available" {...field} />
                      </FormControl>
                      <FormDescription>We'll never share your email with anyone else.</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </motion.div>

              <motion.div className="flex justify-center pt-4" variants={item}>
                <Button type="submit" className="w-full sm:w-auto" size="lg">
                  <Send className="mr-2 h-4 w-4" /> Submit Request
                </Button>
              </motion.div>
            </form>
          </Form>
        </motion.div>
      </div>
    </main>
  )
}

