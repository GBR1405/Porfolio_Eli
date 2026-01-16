"use client";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">

        {/* Logo / Nombre */}
        <span className="text-lg font-semibold text-primary">
          NeoMilkShake
        </span>

        {/* Navegación */}
        <nav className="flex gap-8 text-sm font-medium">
          <a
            href="#inicio"
            className="text-muted-foreground hover:text-primary transition"
          >
            Inicio
          </a>

          <a
            href="#sobre-mi"
            className="text-muted-foreground hover:text-primary transition"
          >
            Sobre mí
          </a>

          <a
            href="#trabajos"
            className="text-muted-foreground hover:text-primary transition"
          >
            Mis trabajos
          </a>

          <a
            href="#Proyectos"
            className="text-muted-foreground hover:text-primary transition"
          >
            Otros Proyectos
          </a>

          <a
            href="#educacion"
            className="text-muted-foreground hover:text-primary transition"
          >
            Educación
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
