import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Laptop, Wrench, MonitorSmartphone, Users, Phone, Mail, MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { MobileNav } from "@/components/mobile-nav"
import ContactForm from "@/components/ui/contact"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Sticky Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary">TecnoNeto</span>
          </Link>
          <MobileNav />
          <nav className="hidden md:flex gap-6">
            <Link href="#inicio" className="text-sm font-medium hover:text-primary">
              Início
            </Link>
            <Link href="#servicos" className="text-sm font-medium hover:text-primary">
              Serviços
            </Link>
            <Link href="#sobre" className="text-sm font-medium hover:text-primary">
              Sobre
            </Link>
            <Link href="#contato" className="text-sm font-medium hover:text-primary">
              Contato
            </Link>
          </nav>
          <Button className="hidden md:inline-flex">
            <Link href="#contato">Contato</Link>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section id="inicio" className="w-full py-4 sm:py-8 md:py-12 lg:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
                <div className="space-y-2">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[3.4rem] leading-tight font-bold tracking-tighter">
                    Suporte Técnico Profissional em Informática
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl mx-auto lg:mx-0">
                    Soluções completas em manutenção de computadores, instalação de Windows e montagem de PCs
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 justify-center lg:justify-start">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="#contato">
                    Entre em Contato
                  </Link>
                  </Button>
                  <Button size="lg" variant="outline">
                    <Link href="#servicos">
                    Nossos Serviços
                    </Link>
                  </Button>
                </div>
              </div>
              <Image
                src="tecnoneto-logo.svg"
                alt="Suporte Técnico"
                width={600}
                height={400}
                className="mx-auto w-full max-w-[600px] aspect-video rounded-xl object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="servicos" className="w-full py-4 sm:py-8 md:py-12 lg:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Nossos Serviços</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Oferecemos uma variedade de serviços para atender todas as suas necessidades em informática
                </p>
              </div>
            </div>
            <div className="mx-auto grid gap-4 grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 max-w-5xl mt-8 px-4">
              <div className="flex flex-col items-center space-y-2 border rounded-lg p-4 hover:shadow-lg transition-shadow">
                <Wrench className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Manutenção</h3>
                <p className="text-sm text-muted-foreground text-center">
                  Reparo e manutenção de computadores e notebooks
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border rounded-lg p-4 hover:shadow-lg transition-shadow">
                <Laptop className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Windows</h3>
                <p className="text-sm text-muted-foreground text-center">Instalação e configuração do Windows</p>
              </div>
              <div className="flex flex-col items-center space-y-2 border rounded-lg p-4 hover:shadow-lg transition-shadow">
                <MonitorSmartphone className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Montagem</h3>
                <p className="text-sm text-muted-foreground text-center">Montagem de computadores sob medida</p>
              </div>
              <div className="flex flex-col items-center space-y-2 border rounded-lg p-4 hover:shadow-lg transition-shadow">
                <Users className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Suporte Acessível</h3>
                <p className="text-sm text-muted-foreground text-center">Suporte técnico para todos os públicos, incluindo atendimento especializado para a terceira idade</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="sobre" className="w-full py-4 sm:py-8 md:py-12 lg:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Sobre a TecnoNeto</h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Com anos de experiência, a TecnoNeto é especializada em fornecer soluções completas em
                    informática. Nossa equipe altamente qualificada está pronta para atender todas as suas necessidades
                    tecnológicas.
                  </p>
                </div>
                <ul className="grid gap-2 py-4">
                  <li className="flex items-center gap-2">
                    <div className="rounded-full bg-primary/10 p-1">
                      <svg
                        className=" text-primary h-5 w-5"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span className="text-muted-foreground">Atendimento rápido e eficiente</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="rounded-full bg-primary/10 p-1">
                      <svg
                        className=" text-primary h-5 w-5"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span className="text-muted-foreground">Profissionais certificados</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="rounded-full bg-primary/10 p-1">
                      <svg
                        className=" text-primary h-5 w-5"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span className="text-muted-foreground">Garantia nos serviços</span>
                  </li>
                </ul>
              </div>
              <Image
                src="/guy.jpeg"
                alt="Sobre TecnoNeto"
                width={800}
                height={600}
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover order-first lg:order-last"
              />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contato" className="w-full py-4 sm:py-8 md:py-12 lg:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Entre em Contato</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Estamos prontos para ajudar. Entre em contato conosco!
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-8 lg:grid-cols-2">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-bold">Telefone</h3>
                    <p className="text-muted-foreground">(51) 99301-5031</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-bold">Email</h3>
                    <p className="text-muted-foreground">tecnonetoassist@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-bold">Endereço</h3>
                    <p className="text-muted-foreground">Rua Carazinho 145, Petrópolis <br></br> Porto Alegre, RS</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4 w-full px-4 sm:px-0">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 px-4 text-center md:flex-row md:text-left">
          <p className="text-sm leading-loose">© 2025 TecnoNeto. Todos os direitos reservados.</p>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <Link
        href="https://wa.me/5551993015031"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 z-50 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-green-500"
      >
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </Link>
    </div>
  )
}

