import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// Dynamic imports for MDX content
const contentMap = {
  abstract: dynamic(() => import("../content/resumo.mdx")),
  presentation: dynamic(() => import("../content/apresentacao.mdx")),
  biography: dynamic(() => import("../content/autobiografia.mdx")),
  journey: dynamic(() => import("../content/jornada.mdx")),
  structure: dynamic(() => import("../content/estrutura.mdx")),
  zune: dynamic(() => import("../content/zune.mdx")),
  zine: dynamic(() => import("../content/zine.mdx")),
  firstWindow: dynamic(() => import("../content/primeiraJanela.mdx")),
  secondWindow: dynamic(() => import("../content/segundaJanela.mdx")),
  thirdWindow: dynamic(() => import("../content/terceiraJanela.mdx")),
  quimes: dynamic(() => import("../content/quimes.mdx")),
  chair: dynamic(() => import("../content/cadeira.mdx")),
  eye: dynamic(() => import("../content/olho.mdx")),
  banca: dynamic(() => import("../content/banca.mdx")),
  body: dynamic(() => import("../content/corpo.mdx")),
  page: dynamic(() => import("../content/pagina.mdx")),
  refem: dynamic(() => import("../content/refem.mdx")),
  digital: dynamic(() => import("../content/digital.mdx")),
  zone: dynamic(() => import("../content/zone.mdx")),
  oficina: dynamic(() => import("../content/oficina.mdx")),
  performance: dynamic(() => import("../content/performance.mdx")),
  exposition: dynamic(() => import("../content/exposicao.mdx")),
  site: dynamic(() => import("../content/site.mdx")),
  inconclusoes: dynamic(() => import("../content/inconclusoes.mdx")),
  agradecimentos: dynamic(() => import("../content/agradecimentos.mdx")),
  referencias: dynamic(() => import("../content/referencias.mdx")),
};

// Content metadata (you could also export this from each MDX file)
const contentMeta = {
  abstract: {
    title: "resumo",
    date: "2025-07-04",
  },
  presentation: {
    title: "apresentação",
    date: "2025-07-04",
  },
  biography: {
    title: "autobiografia",
    date: "2025-07-04",
  },
  journey: {
    title: "jornada",
    date: "2025-07-04",
  },
  structure: {
    title: "estrutura",
    date: "2025-07-04",
  },
  zune: {
    title: "zune",
    date: "2025-07-04",
  },
  zine: {
    title: "zine",
    date: "2025-07-04",
  },
  firstWindow: {
    title: "janela 01",
    date: "2025-07-04",
  },
  secondWindow: {
    title: "janela 02",
    date: "2025-07-04",
  },
  thirdWindow: {
    title: "janela 03",
    date: "2025-07-04",
  },
  quimes: {
    title: "quimes",
    date: "2025-07-04",
  },
  chair: {
    title: "cadeira",
    date: "2025-07-04",
  },
  eye: {
    title: "olho",
    date: "2025-07-04",
  },
  banca: {
    title: "banca",
    date: "2025-07-04",
  },
  body: {
    title: "corpo",
    date: "2025-07-04",
  },
  page: {
    title: "página",
    date: "2025-07-04",
  },
  refem: {
    title: "refém",
    date: "2025-07-04",
  },
  digital: {
    title: "digital",
    date: "2025-07-04",
  },
  zone: {
    title: "zone",
    date: "2025-07-04",
  },
  oficina: {
    title: "oficina",
    date: "2025-07-04",
  },
  performance: {
    title: "performance",
    date: "2025-07-04",
  },
  exposition: {
    title: "exposição",
    date: "2025-07-04",
  },
  site: {
    title: "site",
    date: "2025-07-04",
  },
  inconclusoes: {
    title: "inconclusões",
    date: "2025-07-04",
  },
  agradecimentos: {
    title: "agradecimentos",
    date: "2025-07-04",
  },
  referencias: {
    title: "referências",
    date: "2025-07-04",
  },
};

const LandingPage = () => {
  const [activeSection, setActiveSection] =
    useState<keyof typeof contentMap>("abstract");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const menuItems = [
    { id: "abstract" as const, label: "resumo" },
    { id: "presentation" as const, label: "apresentação" },
    { id: "biography" as const, label: "autobiografia" },
    { id: "journey" as const, label: "jornada" },
    { id: "structure" as const, label: "estrutura" },
    { id: "zune" as const, label: "zune" },
    { id: "zine" as const, label: "zine" },
    { id: "firstWindow" as const, label: "janela 01" },
    { id: "secondWindow" as const, label: "janela 02" },
    { id: "thirdWindow" as const, label: "janela 03" },
    { id: "quimes" as const, label: "quimes" },
    { id: "chair" as const, label: "cadeira" },
    { id: "eye" as const, label: "olho" },
    { id: "banca" as const, label: "banca" },
    { id: "body" as const, label: "corpo" },
    { id: "page" as const, label: "página" },
    { id: "refem" as const, label: "refém" },
    { id: "digital" as const, label: "digital" },
    { id: "zone" as const, label: "zone" },
    { id: "oficina" as const, label: "oficina" },
    { id: "performance" as const, label: "performance" },
    { id: "exposition" as const, label: "exposição" },
    { id: "site" as const, label: "site" },
    { id: "inconclusoes" as const, label: "inconclusões" },
    { id: "agradecimentos" as const, label: "agradecimentos" },
    { id: "referencias", label: "referências" },
  ];

  const ContentComponent = contentMap[activeSection];
  const currentMeta = contentMeta[activeSection];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-serif">
      {/* Header */}
      <header className="border-b border-gray-300">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex items-baseline justify-between">
            <div
              className={`transform transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
            >
              <h1 className="text-5xl md:text-7xl font-light tracking-tight text-gray-900 leading-none">
                zune zine zone
              </h1>
            </div>

            <div
              className={`transform transition-all duration-1000 delay-300 ${
                isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
              }`}
            >
              <div className="w-12 h-12 md:w-20 md:h-20 border border-gray-400 rounded-full bg-white hover:bg-gray-100 transition-colors duration-500">
                <img
                  src="/zine/zine-logo.png"
                  width={80}
                  height={80}
                  alt="Logotipo do Website, composto por formas retas pretas."
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Sidebar Menu */}
          <aside
            className={`lg:col-span-1 transform transition-all duration-1000 delay-500 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
          >
            <nav className="lg:sticky lg:top-8 space-y-1">
              <h2 className="text-xs uppercase tracking-widest text-gray-500 mb-6 font-sans">
                contents
              </h2>
              <ul className="space-y-3">
                {menuItems.map((item, index) => (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() => setActiveSection(item.id)}
                      className={`block text-left leading-tight transition-all duration-300 hover:text-gray-600 text-sm ${
                        activeSection === item.id
                          ? "text-gray-900 border-l-2 border-gray-900 pl-3"
                          : "text-gray-500"
                      }`}
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* Content Area */}
          <section className="lg:col-span-4">
            <article className="max-w-none">
              <div
                className={`transform transition-all duration-700 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
              >
                <header className="mb-8 border-b border-gray-200 pb-6">
                  <h2 className="text-3xl md:text-5xl font-light text-gray-900 mb-3 leading-tight">
                    {currentMeta.title}
                  </h2>
                  <div className="text-xs uppercase tracking-widest text-gray-400 font-sans">
                    {new Date(currentMeta.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                </header>

                <div className="content-area prose prose-lg max-w-none">
                  <ContentComponent />
                </div>
              </div>
            </article>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer
        className={`border-t border-gray-300 mt-20 transform transition-all duration-1000 delay-700 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex justify-between items-center text-xs text-gray-500 font-sans">
            <span>© 2025 minimal</span>
            <span className="uppercase tracking-widest">issue 01</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
