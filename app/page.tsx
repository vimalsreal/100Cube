"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

const faqs = [
  {
    number: "01/",
    question: "How is HundredCube different from Y Combinator?",
    answer:
      "Unlike YC's batch model with hundreds of startups, we work with only 3 founders per year, providing personalized attention. We don't just mentor - we build, design, and market with you as your execution team.",
  },
  {
    number: "02/",
    question: "What makes you better than other startup accelerators?",
    answer:
      "We don't just mentor. We build, design, and market with you. Most accelerators give advice; we give you a complete team. We take 5% equity only after you hit $1M ARR, not upfront like VCs.",
  },
  {
    number: "03/",
    question: "What if I don't have a technical background?",
    answer:
      "Perfect! We specialize in helping non-technical founders. We handle all the technical development, design, and implementation while you focus on the business strategy and customer relationships.",
  },
  {
    number: "04/",
    question: "How long does it take to reach $1M ARR?",
    answer:
      "Typically 18-24 months with our intensive program. We've seen startups reach $1M ARR in as little as 10 months when they follow our proven 5-step process consistently. Most founders see their first $10K month within 6-12 months.",
  },
  {
    number: "05/",
    question: "Do you work with international founders?",
    answer:
      "Yes! We work with founders from India, US, Europe, Singapore, and other countries. Our program is designed to work across different markets and time zones with quarterly in-person intensive sessions.",
  },
  {
    number: "06/",
    question: "What industries do you focus on?",
    answer:
      "We work across SaaS, fintech, edtech, healthtech, and other scalable digital businesses. We avoid hardware startups and businesses that require significant physical infrastructure.",
  },
  {
    number: "07/",
    question: "How do you select the 3 founders each year?",
    answer:
      "We look for founders under 35 who are non-obvious (not from traditional tech backgrounds), have a clear vision, and are committed to building a real business, not just raising money. You should be making under $10K MRR and want real freedom.",
  },
  {
    number: "08/",
    question: "What does 'non-obvious' founders mean?",
    answer:
      "You're not from Stanford. Not ex-Google. Maybe you didn't even finish college. You're bootstrapped, making under $10K MRR. Non-obvious founders come from unexpected backgrounds: teachers, doctors, consultants who bring unique insights that traditional tech founders might miss.",
  },
  {
    number: "09/",
    question: "Do you provide funding?",
    answer:
      "No. We help you build a revenue-generating business first. Many of our founders start with less than $10K and reach profitability before ever raising external capital. We're not VCs - we're your execution team.",
  },
  {
    number: "10/",
    question: "What do you actually do for me?",
    answer:
      "Everything you can't do yourself: Build your app/website, find your first customers, reach out to customers, manage all marketing, handle boring business stuff, and make sure you don't quit when it gets hard.",
  },
  {
    number: "11/",
    question: "How much does this cost?",
    answer:
      "Anywhere between $1,000-$5,000 per month depending on what you need. Way cheaper than hiring a developer, designer, and marketer. We're flexible - if you're broke but have a killer idea, we can work something out.",
  },
  {
    number: "12/",
    question: "When do you take equity?",
    answer:
      "Only after you hit $1M in revenue. Then we get 5%. Before that? You own 100% of your company. We take nothing until you make $1M - unlike VCs who take equity upfront.",
  },
  {
    number: "13/",
    question: "What's the time commitment required?",
    answer:
      "Start with 3 hours a day. Keep your job. Once you're making $30K/month, quit and go full-time. We'll be there the whole time. Expect 30-60 hours per week during intensive phases.",
  },
  {
    number: "14/",
    question: "Do I need to know how to code?",
    answer:
      "Nope. That's our job. You just need to know your market and be willing to hustle. We handle all technical development, design, and implementation.",
  },
  {
    number: "15/",
    question: "What if my startup idea doesn't work?",
    answer:
      "We pivot with you. Our process includes rapid validation and iteration. If your initial idea doesn't gain traction, we help you find a better market fit using the same systematic approach. Better to fail in 3 months than 3 years.",
  },
  {
    number: "16/",
    question: "Do I need to relocate to join the program?",
    answer:
      "No, our program is designed to work remotely. However, we do have intensive in-person sessions quarterly for strategy and planning across India, US, Europe, and Singapore.",
  },
  {
    number: "17/",
    question: "What happens after I hit $1M ARR?",
    answer:
      "You're officially successful. You'll think about $10M exit or even $1B dream. We get our 5% and step back. You run your company. We celebrate together and show up when you need us. You become part of our alumni network.",
  },
  {
    number: "18/",
    question: "How do you help with customer acquisition?",
    answer:
      "We don't just advise on marketing. We execute with you. We set up your funnels, run campaigns, send cold emails, and test channels until we find what works for your specific business.",
  },
  {
    number: "19/",
    question: "Can I apply if I already have a team?",
    answer:
      "Yes, but we primarily work with solo founders or founding teams of 2-3. If you have a larger team, we'll evaluate on a case-by-case basis. You retain full ownership of your IP and company.",
  },
  {
    number: "20/",
    question: "What if I already started building something?",
    answer:
      "Perfect! If you're making some money (under $10K MRR) and want to scale to $1M, you're exactly who we want to work with. We'll help you accelerate your existing traction.",
  },
  {
    number: "21/",
    question: "What if I want to quit or my startup fails?",
    answer:
      "Cancel anytime. No long contracts. No penalties. If your startup fails despite our efforts, you can join our team and help other founders. You'll have learned skills worth more than any degree.",
  },
  {
    number: "22/",
    question: "Why should I trust you over VCs or other accelerators?",
    answer:
      "Because we only make real money when you do. We're not taking your equity upfront like VCs. We hate the corporate VC world - it kills creativity and freedom. We're betting on you with our time and energy, not trying to control your company.",
  },
  {
    number: "23/",
    question: "How many startups actually make it to $1M ARR?",
    answer:
      "Honestly? Not many in traditional accelerators. But with us, your odds are way better than going solo. We've seen what works and what doesn't across SaaS, fintech, edtech, and healthtech.",
  },
  {
    number: "24/",
    question: "Do you provide physical space or office?",
    answer:
      "We just started, so currently we're remote-first. As we grow, we'll provide a full ecosystem for our founders including physical spaces across our key markets in India, US, Europe, and Singapore.",
  },
  {
    number: "25/",
    question: "How do I apply and how fast can we start?",
    answer:
      "Book a call with us. Come ready to explain: What problem you're solving, why you're the person to solve it, how committed you are, and what you've tried already. If we vibe, we can start next week. No 6-month application process like traditional accelerators.",
  },
  {
    number: "26/",
    question: "What will you do with my equity after $1M?",
    answer:
      "We invest in other founders to help them reach $1M like you. 10% of what we make goes to feeding orphan kids. Every successful startup literally saves lives. It's about proving that bootstrapped founders can build amazing companies without selling souls to VCs.",
  },
]

function FAQ() {
  return (
    <section className="py-20 px-6" style={{ backgroundColor: "#FBF7F0" }}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-left font-normal text-black mb-4" style={{ fontSize: "32px", lineHeight: "1.2" }}>
            FREQUENTLY
            <br />
            ASKED QUESTIONS
          </h2>
        </div>

        <div className="space-y-16">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-16 border-b border-gray-200 last:border-b-0"
            >
              <div className="lg:col-span-1">
                <span className="text-gray-400 font-normal text-lg">{faq.number}</span>
              </div>
              <div className="lg:col-span-4">
                <h3 className="text-black font-normal text-2xl leading-tight">{faq.question}</h3>
              </div>
              <div className="lg:col-span-7">
                <p className="text-black font-normal text-lg leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Component() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FBF7F0" }}>
      {/* Header */}
      <header className="px-6 py-6 flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center">
          <img src="/logo.svg" alt="HundredCube" className="h-8 w-auto" />
        </div>

        <Button variant="outline" className="border-gray-300 hover:bg-gray-50 bg-transparent">
          {"Book Intro Call"}
        </Button>
      </header>

      {/* Hero Section */}
      <main className="px-6 py-32 max-w-6xl mx-auto">
        <div className="text-center">
          <motion.h1
            className="leading-tight font-normal text-black md:text-4xl mb-12 text-xl sf-pro-display leading-8"
            style={{
              fontFamily:
                "SF Pro Display, -apple-system, BlinkMacSystemFont, system-ui, Helvetica Neue, Arial, sans-serif",
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            We help 3 legendary, idea-stage founders hit{" "}
            <span className="relative inline-block">
              $1M ARR
              <motion.svg
                className="absolute -bottom-3 left-0 w-full h-6"
                viewBox="0 0 400 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  d="M8 18 C50 8, 100 22, 150 12 C200 2, 250 20, 300 10 C330 5, 360 15, 392 8"
                  stroke="#00A071"
                  strokeWidth="4"
                  strokeLinecap="round"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{
                    delay: 2,
                    duration: 2,
                    ease: "easeInOut",
                  }}
                />
              </motion.svg>
            </span>{" "}
            each year. You get a world-class execution team of Designer, Developer, GTM Hacker for a simple monthly fee
            + 5% equity, only after $1M is achieved.
          </motion.h1>

          <motion.div
            className="max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="px-8 py-4 hover:bg-gray-800 text-white bg-black font-normal text-base"
                onClick={() => window.open("https://vimalsreal.com/hundredcube", "_blank")}
              >
                Read The Founder Story
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-4 border-2 border-[#00A071] text-[#00A071] hover:bg-[#00A071] hover:text-white font-medium text-base bg-transparent"
                onClick={() => window.open("https://cal.com/vimalsreal/100cube", "_blank")}
              >
                Apply For Batch 01
              </Button>
            </div>
          </motion.div>
        </div>
      </main>

      {/* FAQ Section */}
      <FAQ />

      {/* Footer */}
      <footer className="py-16 px-6" style={{ backgroundColor: "#00A071" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <h3 className="text-white font-medium text-lg mb-6 tracking-wide">SERVICES</h3>
              <div className="space-y-4">
                <a href="#" className="block hover:text-white transition-colors text-xs font-medium text-white">
                  {"Startup Studio"}
                </a>
                <a href="#" className="block hover:text-white transition-colors text-xs font-medium text-white">
                  {"Go-To-Market"}
                </a>
                <a href="#" className="block hover:text-white transition-colors text-xs font-medium text-white">
                  Product Development
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-white font-medium text-lg mb-6 tracking-wide">CONNECT</h3>
              <div className="space-y-4">
                <a
                  href="https://cal.com/vimalsreal/100cube"
                  target="_blank"
                  className="block hover:text-white transition-colors text-xs font-medium text-white"
                  rel="noreferrer"
                >
                  Apply Now
                </a>
                <a
                  href="https://vimalsreal.com/hundredcube"
                  target="_blank"
                  className="block hover:text-white transition-colors text-xs font-medium text-white"
                  rel="noreferrer"
                >
                  Founder Story
                </a>
              </div>
            </div>

            <div className="md:text-right">
              <p className="text-sm text-white font-medium">© 2025 HundredCube</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
