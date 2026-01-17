"use client";

import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Inicio", href: "#inicio" },
    { name: "Sobre mí", href: "#sobre-mi" },
    { name: "Mis trabajos", href: "#trabajos" },
    { name: "Otros Proyectos", href: "#Proyectos" },
    { name: "Educación", href: "#educacion" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        {/* Logo / Nombre */}
        <span className="text-lg font-semibold text-primary">NeoMilkShake</span>

        {/* Botón hamburguesa para móvil */}
        <button
          className="md:hidden flex flex-col justify-between w-6 h-5"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="block h-0.5 bg-primary w-full"></span>
          <span className="block h-0.5 bg-primary w-full"></span>
          <span className="block h-0.5 bg-primary w-full"></span>
        </button>

        {/* Navegación para desktop */}
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted-foreground hover:text-primary transition"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>

      {/* Menú móvil */}
      {menuOpen && (
        <nav className="md:hidden bg-background border-t border-border flex flex-col gap-4 px-4 py-4 animate-slideDown">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-primary font-medium hover:text-muted-foreground transition"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </nav>
      )}

      <style jsx>{`
        @keyframes slideDown {
          0% { opacity: 0; transform: translateY(-10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out forwards;
        }
      `}</style>
    </header>
  );
};

export default Header;
