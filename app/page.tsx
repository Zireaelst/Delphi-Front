import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Ticket, Zap, Shield, Clock, Users, CheckCircle2, Lock, Globe } from "lucide-react"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image src="/delphi-logo.png" alt="Delphi Logo" width={40} height={40} className="w-10 h-10" />
              <span className="text-2xl font-bold tracking-tight">DELPHI</span>
            </div>
            {/* </CHANGE> */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </a>
              <a href="#events" className="text-muted-foreground hover:text-foreground transition-colors">
                Events
              </a>
              <a href="#roadmap" className="text-muted-foreground hover:text-foreground transition-colors">
                Roadmap
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </a>
            </div>
            <Button variant="outline" size="sm">
              Launch App
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 relative overflow-hidden">
        <div className="absolute right-[5%] top-1/2 -translate-y-1/2 opacity-10 pointer-events-none hidden lg:block">
          <Image
            src="/delphi-logo.png"
            alt="Delphi Mascot"
            width={400}
            height={400}
            className="w-[400px] h-[400px] animate-float"
          />
        </div>
        {/* </CHANGE> */}
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 min-h-[80vh]">
            {/* Main Hero Content */}
            <div className="lg:col-span-8 flex flex-col justify-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <Badge variant="secondary" className="w-fit">
                    <Ticket className="w-3 h-3 mr-1" />
                    NFT Ticketing on Monad
                  </Badge>
                  <h1 className="text-6xl lg:text-8xl font-bold tracking-tight text-balance group">
                    Own Your Experience.
                    <span className="text-primary block group-hover:scale-105 transition-transform inline-block">
                      Redefine Event Access.
                    </span>
                  </h1>
                  {/* </CHANGE> */}
                  <p className="text-xl text-muted-foreground max-w-2xl text-pretty">
                    Delphi brings event ticketing into the Web3 era. Each ticket is a unique ERC-1155 NFT, giving users
                    real ownership, transparency, and instant verification.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="text-lg px-8">
                    Create Event
                  </Button>
                  <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                    Browse Events
                  </Button>
                </div>
              </div>
            </div>

            {/* Hero Image Grid */}
            <div className="lg:col-span-4 grid grid-cols-2 gap-4">
              <Card className="aspect-square bg-card overflow-hidden">
                <img
                  src="/acoustic-guitar-player-in-plant-filled-cafe.jpg"
                  alt="Live event"
                  className="w-full h-full object-cover"
                />
              </Card>
              <Card className="aspect-square bg-primary/20 overflow-hidden">
                <img
                  src="/lush-green-plants-and-hanging-gardens-in-cafe.jpg"
                  alt="Event atmosphere"
                  className="w-full h-full object-cover"
                />
              </Card>
              <Card className="aspect-square bg-accent/20 overflow-hidden">
                <img
                  src="/artisan-coffee-and-pastries-on-wooden-table.jpg"
                  alt="Event experience"
                  className="w-full h-full object-cover"
                />
              </Card>
              <Card className="aspect-square bg-card overflow-hidden">
                <img
                  src="/intimate-music-venue-with-plants-and-warm-lighting.jpg"
                  alt="Intimate venue"
                  className="w-full h-full object-cover"
                />
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Powered by Monad Section */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              <Zap className="w-3 h-3 mr-1" />
              Powered by Monad
            </Badge>
            <h2 className="text-4xl font-bold mb-4">⚡ Lightning-Fast Performance</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Built on Monad, Delphi leverages high TPS and parallel execution to enable lightning-fast minting and
              seamless on-chain check-ins.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-4 px-4 font-semibold">Action</th>
                      <th className="text-left py-4 px-4 font-semibold">Ethereum</th>
                      <th className="text-left py-4 px-4 font-semibold text-primary">Monad</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="py-4 px-4">1000 ticket mints</td>
                      <td className="py-4 px-4 text-muted-foreground">~120s</td>
                      <td className="py-4 px-4 font-bold text-primary">~2.3s</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4">Gas cost</td>
                      <td className="py-4 px-4 text-muted-foreground">30–50 gwei</td>
                      <td className="py-4 px-4 font-bold text-primary">&lt;1 gwei</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">🔒 Secure. Transparent. Ownable.</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Built with security and transparency at its core
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Fast</h3>
              <p className="text-muted-foreground text-sm">
                Parallel minting powered by Monad for instant ticket creation
              </p>
            </Card>

            <Card className="p-6">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Secure</h3>
              <p className="text-muted-foreground text-sm">Verified ownership and anti-bot protections built-in</p>
            </Card>

            <Card className="p-6">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2">Flexible</h3>
              <p className="text-muted-foreground text-sm">Works online or offline with QR check-in system</p>
            </Card>

            <Card className="p-6">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Fair</h3>
              <p className="text-muted-foreground text-sm">Transparent and tamper-proof ticket sales on-chain</p>
            </Card>
          </div>

          {/* Additional Features List */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <Lock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">On-chain NFT tickets with verified authenticity</h4>
                  <p className="text-sm text-muted-foreground">Every ticket is a unique, verifiable NFT</p>
                </div>
              </div>
            </Card>
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Online & offline QR check-in system</h4>
                  <p className="text-sm text-muted-foreground">Seamless entry regardless of connectivity</p>
                </div>
              </div>
            </Card>
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <Shield className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Built-in anti-bot and refund mechanisms</h4>
                  <p className="text-sm text-muted-foreground">Fair access for real fans</p>
                </div>
              </div>
            </Card>
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <Users className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Organizer dashboard for event management</h4>
                  <p className="text-sm text-muted-foreground">Complete control over your events</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">🌐 How It Works</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Simple, secure, and transparent event ticketing in four steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-primary-foreground">
                1
              </div>
              <h3 className="text-xl font-bold mb-2">Create</h3>
              <p className="text-muted-foreground">Organizers create and launch events on the platform</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-primary-foreground">
                2
              </div>
              <h3 className="text-xl font-bold mb-2">Mint</h3>
              <p className="text-muted-foreground">Users mint NFT tickets in seconds with low gas fees</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-primary-foreground">
                3
              </div>
              <h3 className="text-xl font-bold mb-2">Check-in</h3>
              <p className="text-muted-foreground">Secure QR scans verify tickets at the venue</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-primary-foreground">
                4
              </div>
              <h3 className="text-xl font-bold mb-2">Track</h3>
              <p className="text-muted-foreground">Every action is recorded transparently on-chain</p>
            </div>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section id="events" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-bold">UPCOMING EVENTS</h2>
            <Button variant="outline">View All Events</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="overflow-hidden group cursor-pointer hover:scale-[1.02] transition-transform">
              <div className="aspect-video bg-primary/20 relative overflow-hidden">
                <img
                  src="/indie-folk-singer-with-acoustic-guitar-in-intimate.jpg"
                  alt="Luna Rivers performance"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <Badge className="absolute top-4 left-4">Tonight</Badge>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Luna Rivers</h3>
                <p className="text-muted-foreground mb-4">Indie folk with botanical storytelling</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    8:00 PM
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    25 seats
                  </div>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden group cursor-pointer hover:scale-[1.02] transition-transform">
              <div className="aspect-video bg-accent/20 relative overflow-hidden">
                <img
                  src="/jazz-trio-performing-in-plant-filled-venue.jpg"
                  alt="The Greenhouse Trio"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <Badge className="absolute top-4 left-4" variant="secondary">
                  Tomorrow
                </Badge>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">The Greenhouse Trio</h3>
                <p className="text-muted-foreground mb-4">Jazz fusion meets nature sounds</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    7:30 PM
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    30 seats
                  </div>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden group cursor-pointer hover:scale-[1.02] transition-transform">
              <div className="aspect-video bg-primary/20 relative overflow-hidden">
                <img
                  src="/electronic-ambient-musician-with-synthesizers-and-.jpg"
                  alt="Moss & Circuits"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <Badge className="absolute top-4 left-4" variant="outline">
                  This Weekend
                </Badge>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Moss & Circuits</h3>
                <p className="text-muted-foreground mb-4">Ambient electronic with live plant sensors</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    9:00 PM
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    40 seats
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">🧭 Roadmap</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Our journey to revolutionize event ticketing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-8">
              <Badge className="mb-4">V1</Badge>
              <h3 className="text-2xl font-bold mb-4">Foundation</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>On-chain mint</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Online check-in</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Basic dashboard</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 border-primary">
              <Badge className="mb-4">V2</Badge>
              <h3 className="text-2xl font-bold mb-4">Enhanced</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Clock className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                  <span>Offline-first mode</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                  <span>Refund mechanisms</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                  <span>Advanced analytics</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8">
              <Badge variant="outline" className="mb-4">
                V3
              </Badge>
              <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Clock className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                  <span>VRF integration</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                  <span>Whitelists</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                  <span>Enterprise panel</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-balance">Why Delphi?</h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  Traditional ticketing systems are plagued by scalpers, fraud, and lack of transparency. Delphi solves
                  these problems by leveraging blockchain technology to create verifiable, secure, and fair ticket
                  distribution.
                </p>
                <p>
                  Built on Monad's high-performance blockchain, Delphi can handle thousands of ticket mints per second
                  with minimal gas fees, making NFT tickets accessible and practical for events of any size.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-8">
                <div>
                  <div className="text-3xl font-bold text-primary">~2.3s</div>
                  <div className="text-muted-foreground">1000 Ticket Mints</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent">&lt;1 gwei</div>
                  <div className="text-muted-foreground">Gas Cost</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Card className="aspect-[4/5] overflow-hidden">
                <img
                  src="/lush-indoor-garden-cafe-with-hanging-plants-and-na.jpg"
                  alt="Delphi platform"
                  className="w-full h-full object-cover"
                />
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-6 text-balance">Ready to Transform Your Events?</h2>
          <p className="text-xl text-muted-foreground mb-8 text-balance">
            Join the future of event ticketing. Secure, instant, and fair NFT ticketing built on Monad.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Launch App
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
              Read Documentation
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary/50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="text-2xl font-bold mb-4">🎟️ DELPHI</div>
              <p className="text-muted-foreground mb-6 max-w-md">
                Secure, instant, and fair NFT ticketing built on Monad. Redefining event access for the Web3 era.
              </p>
              <div className="flex gap-4">
                <Button variant="outline" size="sm">
                  Twitter
                </Button>
                <Button variant="outline" size="sm">
                  Discord
                </Button>
                <Button variant="outline" size="sm">
                  GitHub
                </Button>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>Features</p>
                <p>Roadmap</p>
                <p>Documentation</p>
                <p>API</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>About Monad</p>
                <p>Smart Contracts</p>
                <p>Security</p>
                <p>Support</p>
              </div>
            </div>
          </div>
          <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
            <p>&copy; 2025 Delphi. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
