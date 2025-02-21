"use client"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
export function MobileNav() {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[80%] max-w-sm">
          <nav className="flex flex-col gap-4">
            <Link href="#inicio" className="text-lg font-medium">Início</Link>
            <Link href="#servicos" className="text-lg font-medium">Serviços</Link>
            <Link href="#sobre" className="text-lg font-medium">Sobre</Link>
            <Link href="#contato" className="text-lg font-medium">Contato</Link>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  )
}
