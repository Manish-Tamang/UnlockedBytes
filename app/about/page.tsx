"use client"

import { motion } from "framer-motion"
import { Download, Users, Shield, Zap, HelpCircle, Mail, Info, Layers } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Image from "next/image" // Use Next.js Image for optimization

export default function AboutPage() {
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
  const faqs = [
    {
      question: "What is this site?",
      answer:
        "This site acts as a user-friendly interface or 'wrapper' for PC games listed on filecr.com. We scrape, sort, and present the game information from their PC Games category in a clean and searchable format. We do not host any files ourselves.",
    },
    {
      question: "Are all games free to download?",
      answer:
        "The games listed link to filecr.com. While filecr.com often provides free access to software, users should always verify the licensing and terms of use for each specific game on the source site. We simply organize the information provided.",
    },
    {
      question: "How do I request a game that's not listed?",
      answer:
        "You can use our 'Request a Game' form. While we primarily reflect the PC game listings from filecr.com, we appreciate suggestions as it helps us understand user interest. However, adding a game ultimately depends on its availability on the source site.",
    },
    {
      question: "Are the downloads safe?",
      answer:
        "We do not host any files. All download links redirect to filecr.com. Users should exercise caution and use appropriate security software when downloading files from any third-party source, including filecr.com. We are not responsible for the safety or content of external sites.",
    },
    {
      question: "How often is the game list updated?",
      answer:
        "We aim to regularly update our listings to reflect the current PC game selection available on filecr.com. The frequency depends on updates on the source site and our scraping schedule.",
    },
    {
      question: "Do I need an account?",
      answer:
        "No account is needed to browse the games listed on this site. Any account requirements would be on the source site (filecr.com) if applicable.",
    },
  ];


  return (
    <main className="container py-12 md:py-16">
      <motion.section
        className="mb-16 md:mb-20 text-center md:text-left"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-center md:justify-start mb-4">
          <div className="bg-primary/10 p-3 rounded-full inline-block">
            <Download className="h-8 w-8 text-primary" />
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About This Game Hub</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mb-6 mx-auto md:mx-0">
          Welcome! This platform provides an organized and easy-to-navigate interface for discovering PC games. We aim to simplify the process of finding games by curating listings from external sources.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <Button asChild size="lg">
            <Link href="/request">Request a Game</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/">Browse Games</Link>
          </Button>
        </div>
      </motion.section>

      <motion.section
        className="mb-16 md:mb-20 p-6 bg-secondary/50 border border-border rounded-lg"
        variants={item}
        initial="hidden"
        animate="show"
      >
        <div className="flex items-start gap-4">
          <div className="mt-1">
            <Layers className="h-6 w-6 text-primary flex-shrink-0" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">Our Approach: Aggregation & Curation</h2>
            <p className="text-muted-foreground">
              Please note: This website functions as an aggregator. We discover and index publicly available PC game listings from <code className="font-mono text-sm bg-muted px-1 py-0.5 rounded">filecr.com</code>.
              We then sort and present this information in a user-friendly format. <strong className="font-semibold text-foreground">We do not host any game files ourselves</strong>, nor are we affiliated with filecr.com. All download links will redirect you to the original source page on their site. Think of us as a specialized search engine or directory focused on the PC games available there.
            </p>
          </div>
        </div>
      </motion.section>

      <motion.section className="mb-16 md:mb-20" variants={container} initial="hidden" animate="show">
        <h2 className="text-3xl font-bold text-center mb-10 md:mb-12">Our Focus</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <motion.div className="bg-card rounded-lg p-6 border shadow-sm" variants={item}>
            <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">User Experience</h3>
            <p className="text-muted-foreground">
              We prioritize a clean, fast, and intuitive interface, making it easy for users to browse and find information about games listed on the source site.
            </p>
          </motion.div>

          <motion.div className="bg-card rounded-lg p-6 border shadow-sm" variants={item}>
            <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Transparency</h3>
            <p className="text-muted-foreground">
              We are clear about our role as an aggregator and direct users to the original source (filecr.com) for downloads and detailed information. We do not host files.
            </p>
          </motion.div>

          <motion.div className="bg-card rounded-lg p-6 border shadow-sm" variants={item}>
            <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Zap className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Efficient Discovery</h3>
            <p className="text-muted-foreground">
              Our goal is to provide a streamlined way to explore the PC game catalog found on filecr.com, saving you time in finding relevant game listings.
            </p>
          </motion.div>
        </div>
      </motion.section>
      <motion.section
        className="mb-16 md:mb-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="flex items-center justify-center gap-2 mb-8 md:mb-10">
          <HelpCircle className="h-6 w-6 text-primary" />
          <h2 className="text-3xl font-bold text-center">Frequently Asked Questions</h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg py-4 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </motion.section>

      <motion.section
        className="text-center md:text-left p-8 bg-muted/50 rounded-lg border"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className="max-w-3xl mx-auto md:mx-0">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Have Feedback?</h2>
          <p className="text-muted-foreground mb-6">
            While we don't handle game downloads or support directly (as that's managed by filecr.com), we welcome feedback about this website's interface, usability, or any issues you encounter while browsing our listings.
          </p>
          <Button asChild>
            <Link href="mailto:feedback@yourdomain.example.com" className="inline-flex items-center gap-2">
              <Mail className="h-4 w-4" />
              Send Feedback
            </Link>
          </Button>
          <p className="text-xs text-muted-foreground mt-4">
            (Replace <code className="font-mono text-xs">feedback@yourdomain.example.com</code> with your actual feedback email address). For issues with specific game downloads, please refer to the source site, filecr.com.
          </p>
        </div>
      </motion.section>
    </main>
  )
}