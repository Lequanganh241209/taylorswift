
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Music, Calendar, Star, Play, Heart, Share2 } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-rose-500 selection:text-white">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent z-10" />
          {/* Abstract gradient background representing Eras */}
          <div className="w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-rose-500 via-purple-900 to-zinc-950 opacity-40 animate-pulse" />
        </div>
        
        <div className="relative z-20 text-center space-y-8 px-4 max-w-5xl mx-auto">
          <h1 className="text-7xl md:text-9xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-rose-200 via-purple-200 to-blue-200 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            THE ERAS TOUR
          </h1>
          <p className="text-xl md:text-2xl text-zinc-300 max-w-2xl mx-auto font-light tracking-wide">
            A journey through the musical eras of her career (past & present!)
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button size="lg" className="bg-rose-600 hover:bg-rose-700 text-white rounded-full px-8 text-lg h-12">
              <Play className="mr-2 h-5 w-5" /> Get Tickets
            </Button>
            <Button size="lg" variant="outline" className="border-zinc-700 text-white hover:bg-zinc-900 rounded-full px-8 text-lg h-12">
              <Star className="mr-2 h-5 w-5" /> View Merchandise
            </Button>
          </div>
        </div>
      </section>

      {/* Eras Grid */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center tracking-tight">Experience The Eras</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
             { title: "Lover", color: "bg-pink-300", desc: "Cruel Summer" },
             { title: "Fearless", color: "bg-yellow-500", desc: "Love Story" },
             { title: "Evermore", color: "bg-amber-700", desc: "willow" },
             { title: "Reputation", color: "bg-zinc-800", desc: "...Ready for it?" },
             { title: "Speak Now", color: "bg-purple-600", desc: "Enchanted" },
             { title: "Red", color: "bg-red-600", desc: "All Too Well (10 Minute Version)" },
             { title: "Folklore", color: "bg-gray-400", desc: "cardigan" },
             { title: "1989", color: "bg-blue-400", desc: "Welcome to New York" },
             { title: "Midnights", color: "bg-indigo-900", desc: "Anti-Hero" }
           ].map((era, i) => (
             <Card key={i} className="bg-zinc-900 border-zinc-800 hover:border-zinc-700 transition-all hover:scale-105 duration-300 overflow-hidden group">
               <div className={`h-2 w-full ${era.color}`} />
               <CardHeader>
                <CardTitle className="text-2xl tracking-tighter text-zinc-100">{era.title}</CardTitle>
                <CardDescription className="text-zinc-400">Taylor's Version</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-40 bg-zinc-950/50 rounded-md flex items-center justify-center group-hover:bg-zinc-950/30 transition-colors">
                  <Music className="h-12 w-12 text-zinc-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <p className="mt-4 text-sm text-zinc-400 italic">"{era.desc}"</p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="ghost" size="sm" className="text-zinc-300 hover:text-white hover:bg-zinc-800">
                  <Heart className="mr-2 h-4 w-4" /> Save
                </Button>
                <Button variant="ghost" size="sm" className="text-zinc-300 hover:text-white hover:bg-zinc-800">
                  <Share2 className="mr-2 h-4 w-4" /> Share
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Tour Dates */}
      <section className="py-24 bg-zinc-900/50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-bold tracking-tight">Upcoming Dates</h2>
            <Button variant="link" className="text-rose-400">View all dates &rarr;</Button>
          </div>
          <div className="space-y-4">
            {[
              { city: "Tokyo, Japan", date: "Feb 07 - 10, 2024", venue: "Tokyo Dome" },
              { city: "Melbourne, Australia", date: "Feb 16 - 18, 2024", venue: "MCG" },
              { city: "Sydney, Australia", date: "Feb 23 - 26, 2024", venue: "Accor Stadium" },
              { city: "Singapore", date: "Mar 02 - 09, 2024", venue: "National Stadium" },
            ].map((tour, i) => (
              <div key={i} className="flex flex-col md:flex-row items-center justify-between bg-zinc-950 p-6 rounded-xl border border-zinc-800 hover:border-rose-500/50 transition-colors">
                <div className="flex items-center gap-6 mb-4 md:mb-0 w-full md:w-auto">
                  <div className="h-12 w-12 rounded-full bg-zinc-900 flex items-center justify-center text-rose-500 font-bold text-lg border border-zinc-800">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{tour.city}</h3>
                    <p className="text-zinc-400 flex items-center gap-2">
                      <Calendar className="h-4 w-4" /> {tour.date}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
                  <span className="text-zinc-500 text-sm hidden md:block">{tour.venue}</span>
                  <Button className="bg-white text-zinc-950 hover:bg-zinc-200 rounded-full font-semibold">
                    Tickets
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Don't miss a beat</h2>
        <p className="text-zinc-400 mb-8">Sign up for updates on the Eras Tour and new music.</p>
        <div className="flex max-w-md mx-auto gap-2">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="flex-1 bg-zinc-900 border border-zinc-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-rose-500"
          />
          <Button className="bg-rose-600 hover:bg-rose-700 text-white">Subscribe</Button>
        </div>
      </section>

      <footer className="border-t border-zinc-900 py-12 text-center text-zinc-600 text-sm">
        <p>© 2024 Taylor Swift Productions. All rights reserved.</p>
      </footer>
    </div>
  )
}
