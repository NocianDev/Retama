import { useEffect, useState } from "react";

export default function RetamaMaquinaria() {
  const company = {
    name: "Retama",
    slogan: "Venta y renta de maquinaria con respaldo profesional",
    description:
      "En Retama Maquinaria ofrecemos soluciones confiables para construcción, industria y trabajo pesado. Contamos con equipos seleccionados para venta y renta, atención personalizada y servicio orientado a cubrir proyectos de distinta escala.",

    email: "ricardo_retama@hotmail.com",
    whatsapp: "+5218180889636",
    phone: "+528180593032",

    logo: "/Images/Logo.png",
    heroImage: "/Images/Hero.jpeg",

    locations: [
      {
        title: "Sucursal 1",
        address: "Santa Catarina, Nuevo León",
        schedule: "Lunes a Viernes: 8:00 AM - 6:00 PM | Sábado: 8:00 AM - 2:00 PM",
        mapEmbed:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3595.6845759993744!2d-100.46540809999999!3d25.6817488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662996b90158c59%3A0x4c93c6b953d991bd!2sRetama%20Maquinaria!5e0!3m2!1ses!2smx!4v1773340678138!5m2!1ses!2smx",
      },
      {
        title: "Sucursal 2",
        address: "Montemorelos, Nuevo León",
        schedule: "Lunes a Viernes: 8:00 AM - 6:00 PM | Sábado: 8:00 AM - 2:00 PM",
        mapEmbed:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.31261958407!2d-99.8134802!3d25.1926778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x867cd7cd45372baf%3A0x9d295f27e6c017c6!2sRetama%20Maquinaria%20(Suc.%20Montemorelos)!5e0!3m2!1ses!2smx!4v1773340826731!5m2!1ses!2smx",
      },
    ],

    social: {
      facebook: "https://www.facebook.com/share/1PAUte2SDq/?mibextid=wwXIfr",
    },
  };

  const maquinariaVenta = [
    {
      name: "Retroexcavadora John Deere",
      image: "/Images/Venta1.jpeg",
      description:
        "Retroexcavadora versátil y resistente, ideal para excavación, carga, nivelación y movimiento de material en obra civil, construcción y trabajos pesados.",
    },
    {
      name: "Minicargador Bobcat S530",
      image: "/Images/Venta2.jpeg",
      description:
        "Minicargador compacto, potente y fácil de maniobrar, excelente para carga de materiales, limpieza de terrenos y trabajos en espacios reducidos.",
    },
    {
      name: "Miniexcavadora John Deere",
      image: "/Images/Venta3.jpeg",
      description:
        "Miniexcavadora práctica y eficiente para zanjas, excavaciones ligeras, instalaciones subterráneas y proyectos donde se requiere precisión y movilidad.",
    },
    {
      name: "Carretilla Whiteman",
      image: "/Images/Venta4.jpeg",
      description:
        "Carretilla para concreto de alto rendimiento, diseñada para transportar mezcla con estabilidad, rapidez y gran resistencia en obra.",
    },
    {
      name: "Generador Multiquip 45 Kva",
      image: "/Images/Venta5.jpeg",
      description:
        "Generador de energía confiable para respaldar maquinaria, herramientas y operaciones continuas en construcción, industria y eventos.",
    },
    {
      name: "Zanjeadora Ditch Witch",
      image: "/Images/Venta6.jpeg",
      description:
        "Zanjeadora especializada para apertura de zanjas limpias y uniformes, ideal para instalaciones hidráulicas, eléctricas y de telecomunicaciones.",
    },
    {
      name: "Rodillo Cat 3.5 Ton",
      image: "/Images/Venta7.jpeg",
      description:
        "Rodillo compactador de 3.5 toneladas, perfecto para compactación de suelos, bases y superficies en caminos, patios y urbanización.",
    },
    {
      name: "Compresor de aire Sullair 375 CFM",
      image: "/Images/Venta8.jpeg",
      description:
        "Compresor de aire de alto flujo, ideal para herramientas neumáticas, limpieza industrial, sandblast y trabajos de perforación ligera.",
    },
    {
      name: "Rodillo wacker neuson RD12",
      image: "/Images/Venta9.jpeg",
      description:
        "Rodillo compacto y eficiente para trabajos de compactación en áreas pequeñas, banquetas, estacionamientos y obra urbana.",
    },
    {
      name: "Compresor de aire Chicago pneumatic 185 CFM",
      image: "/Images/Venta10.jpeg",
      description:
        "Compresor neumático confiable y portátil, excelente para operar herramientas de aire en construcción, mantenimiento e industria.",
    },
    {
      name: "Torre de iluminación allmand",
      image: "/Images/Venta11.jpeg",
      description:
        "Torre de iluminación para faenas nocturnas o zonas de baja visibilidad, ideal para obras, eventos, patios y trabajos de emergencia.",
    },
    {
      name: "Revolvedoras 1 sacó",
      image: "/Images/Venta12.jpeg",
      description:
        "Revolvedora de gran capacidad para preparación uniforme de concreto, ideal para obras medianas, grandes y uso constante en construcción.",
    },
    {
      name: "Generador Wacker Neuson G25",
      image: "/Images/Venta13.jpeg",
      description:
        "Generador compacto y durable, diseñado para ofrecer energía estable en obras, mantenimiento industrial y respaldo temporal.",
    },
    {
      name: "Compactadoras Joper",
      image: "/Images/Venta14.jpeg",
      description:
        "Compactadoras robustas para suelo y relleno, ideales para lograr superficies firmes, seguras y bien asentadas en distintos proyectos.",
    },
  ];

  const maquinariaRenta = [
    { name: "Compactadora", image: "/Images/Renta1.jpg", description: "Compactadora vibratoria ideal para compactar suelos, grava y asfalto en obras pequeñas y medianas." },
    { name: "Revolvedora", image: "/Images/Renta2.jpg", description: "Revolvedora de concreto resistente para preparación rápida y uniforme de mezcla en construcción." },
    { name: "Rodillos Vibrocompactador de 1.2 ton", image: "/Images/Renta4.jpg", description: "Rodillo ligero perfecto para compactación en banquetas, áreas pequeñas y mantenimiento urbano." },
    { name: "Rodillo Vibrocompactador de 3.5 ton", image: "/Images/Renta3.jpg", description: "Rodillo pesado ideal para compactación de bases, caminos y superficies en obra civil." },
    { name: "Allanadoras de concreto", image: "/Images/Renta5.webp", description: "Allanadoras profesionales para acabado fino y nivelación de superficies de concreto." },
    { name: "Vibrador de concreto", image: "/Images/Renta6.jpg", description: "Equipo esencial para eliminar burbujas y lograr mayor resistencia en estructuras de concreto." },
    { name: "Rompedoras de concreto", image: "/Images/Renta7.jpg", description: "Martillos rompedores potentes para demolición de concreto, pavimento y estructuras." },
    { name: "Máquinas de soldar miller bobcat", image: "/Images/Renta8.jpg", description: "Equipo de soldadura industrial ideal para trabajos en campo con generador integrado." },
    { name: "Cortadora de concreto", image: "/Images/Renta9.jpg", description: "Cortadora de alto rendimiento para cortes precisos en concreto y pavimento." },
    { name: "Plantas de luz 3500, 5000 y 8000 watts", image: "/Images/Renta10.webp", description: "Plantas de luz portátiles ideales para respaldar energía en obras y eventos." },
    { name: "Generadores remolcables de 25 y 45 kva", image: "/Images/Renta11.webp", description: "Generadores industriales remolcables de alta potencia para proyectos grandes." },
    { name: "Torres de iluminación", image: "/Images/Renta12.jpg", description: "Torres de iluminación para trabajos nocturnos y zonas con poca visibilidad." },
     { name: "Placa vibatoria", image: "/Images/Renta13.jpg", description: "Placa vibratoria ideal para compactación de suelo, grava y asfalto en trabajos de construcción." },
      { name: "Bomba de agua 2x2", image: "/Images/Renta14.webp", description: "Bomba de agua 2x2 diseñada para el traslado eficiente de agua en obras, riego y drenaje." },
  ];

  const sections = ["Inicio", "Máquinas en venta", "Máquinas en renta", "Contacto"];

  const [activeSection, setActiveSection] = useState("Inicio");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [activeSection]);

  const sectionButtonClass = (name: string) =>
    `px-4 py-2 rounded-full text-sm md:text-base transition-all duration-300 border ${
      activeSection === name
        ? "bg-orange-500 text-white border-orange-500 shadow-lg"
        : "bg-orange-100 text-slate-800 border-orange-200 hover:bg-orange-200"
    }`;

  const cardClass =
    "bg-white rounded-3xl shadow-xl border border-orange-200 overflow-hidden hover:-translate-y-1 hover:shadow-2xl transition-all duration-300";

  return (
    <div className="min-h-screen bg-white text-slate-900 relative overflow-x-hidden">
      <header className="sticky top-0 z-50 bg-white border-b border-orange-200">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4 min-w-0">
              <img
                src={company.logo}
                alt="Logo Retama Maquinaria"
                className="w-28 h-20 md:w-48 md:h-40 object-contain rounded-2xl p-1 shrink-0"
              />
              <div className="min-w-0">
                <h1 className="text-3xl md:text-5xl font-black tracking-wide text-orange-500 leading-tight">
                  {company.name}
                </h1>
                <p className="text-slate-600 text-sm md:text-base max-w-2xl">
                  {company.slogan}
                </p>
              </div>
            </div>

            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center w-12 h-12 rounded-2xl border border-orange-200 bg-orange-100 text-orange-600 hover:bg-orange-200 transition shrink-0"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
            >
              ☰
            </button>

            <nav className="hidden md:flex flex-wrap gap-2 justify-end">
              {sections.map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={sectionButtonClass(section)}
                  type="button"
                >
                  {section}
                </button>
              ))}
            </nav>
          </div>

          {mobileMenuOpen && (
            <nav className="md:hidden mt-4 grid grid-cols-1 gap-3">
              {sections.map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`${sectionButtonClass(section)} w-full justify-center text-base py-3`}
                  type="button"
                >
                  {section}
                </button>
              ))}
            </nav>
          )}
        </div>
      </header>

      <main className="relative z-10">

        {activeSection === "Inicio" && (
          <section className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <span className="inline-block px-4 py-2 rounded-full bg-orange-100 text-orange-600 border border-orange-200 text-sm font-semibold mb-4">
                  Soluciones para construcción e industria
                </span>
                <h2 className="text-4xl md:text-6xl font-black leading-tight mb-5 text-orange-500">
                  Maquinaria confiable para impulsar tus proyectos
                </h2>
                <p className="text-slate-700 text-lg leading-relaxed mb-6">
                  {company.description}
                </p>

                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={() => setActiveSection("Máquinas en venta")}
                    className="px-6 py-3 rounded-2xl bg-orange-500 text-white font-bold shadow-lg hover:scale-[1.02] transition"
                    type="button"
                  >
                    Ver máquinas en venta
                  </button>
                  <button
                    onClick={() => setActiveSection("Máquinas en renta")}
                    className="px-6 py-3 rounded-2xl bg-orange-100 border border-orange-200 text-slate-800 font-semibold hover:bg-orange-200 transition"
                    type="button"
                  >
                    Ver máquinas en renta
                  </button>
                </div>
              </div>

              <div className="relative">
                <div className="relative bg-white border border-orange-200 rounded-[2rem] overflow-hidden shadow-2xl">
                  <img
                    src={company.heroImage}
                    alt="Maquinaria industrial"
                    className="w-full h-[300px] md:h-[500px] object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="mt-16">
              <h3 className="text-3xl font-black mb-8 text-orange-500">Nuestras ubicaciones</h3>

              <div className="grid md:grid-cols-2 gap-8">
                {company.locations.map((location, index) => (
                  <div
                    key={index}
                    className="bg-white border border-orange-200 rounded-3xl overflow-hidden shadow-xl"
                  >
                    <iframe
                      src={location.mapEmbed}
                      width="100%"
                      height="250"
                      style={{ border: 0 }}
                      loading="lazy"
                      title={`map-${index}`}
                    />

                    <div className="p-6">
                      <h4 className="text-2xl font-bold mb-2">{location.title}</h4>
                      <p className="text-slate-700 mb-1">{location.address}</p>
                      <p className="text-slate-500 text-sm">{location.schedule}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {activeSection === "Máquinas en venta" && (
          <section className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
            <h2 className="text-4xl font-black text-orange-500 mb-8">Máquinaria en venta</h2>

            <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
              {maquinariaVenta.map((item, index) => (
                <div key={index} className={cardClass}>
                  <img src={item.image} alt={item.name} className="w-full h-60 object-cover" />
                  <div className="p-5 text-slate-900">
                    <h3 className="text-xl font-black mb-2">{item.name}</h3>
                    <p className="text-slate-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeSection === "Máquinas en renta" && (
          <section className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
            <h2 className="text-4xl font-black text-orange-500 mb-8">Máquinaria en renta</h2>

            <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
              {maquinariaRenta.map((item, index) => (
                <div key={index} className={cardClass}>
                  <img src={item.image} alt={item.name} className="w-full h-62 object-cover" />
                  <div className="p-5 text-slate-900">
                    <h3 className="text-xl font-black mb-2">{item.name}</h3>
                    <p className="text-slate-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeSection === "Contacto" && (
          <section className="max-w-4xl mx-auto px-4 md:px-6 py-16">
            <div className="bg-white border border-orange-200 rounded-[2rem] p-10 shadow-2xl">
              <h2 className="text-4xl font-black text-orange-500 mb-6">Contacto</h2>

              <div className="space-y-6 text-lg">
                <div>
                  <p className="text-slate-500">WhatsApp</p>
                  <a
                    href={`https://wa.me/${company.whatsapp.replace(/[^\d]/g, "")}`}
                    className="font-bold text-slate-900 hover:text-orange-500"
                  >
                    {company.whatsapp}
                  </a>
                </div>

                <div>
                  <p className="text-slate-500">Correo</p>
                  <a href={`mailto:${company.email}`} className="font-bold text-slate-900 hover:text-orange-500">
                    {company.email}
                  </a>
                </div>

                <div>
                  <p className="text-slate-500">Teléfono</p>
                  <a href={`tel:${company.phone}`} className="font-bold text-slate-900 hover:text-orange-500">
                    {company.phone}
                  </a>
                </div>

                <div>
                  <p className="text-slate-400">Facebook</p>
                  <a href={company.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold hover:text-yellow-400">
                Retama Maquinaria 
                </a>
                </div>
              </div>
            </div>
          </section>
        )}

      </main>

      <footer className="border-t border-orange-200 mt-10">
        <div className="max-w-7xl mx-auto px-6 py-6 text-center text-slate-500">
          © 2026 {company.name}. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
}
