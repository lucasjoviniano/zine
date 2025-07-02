import Image from "next/image";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Dynamic imports for MDX content
const contentMap = {
  introduction: dynamic(() => import("../content/introduction.mdx")),
  features: dynamic(() => import("../content/introduction.mdx")),
  design: dynamic(() => import("../content/introduction.mdx")),
  "case-study": dynamic(() => import("../content/introduction.mdx")),
  contact: dynamic(() => import("../content/introduction.mdx")),
};

// Content metadata (you could also export this from each MDX file)
const contentMeta = {
  introduction: {
    title: "welcome to our studio",
    date: "2025-01-15",
  },
  features: {
    title: "what we offer",
    date: "2025-01-10",
  },
  design: {
    title: "our approach",
    date: "2025-01-05",
  },
  "case-study": {
    title: "recent work",
    date: "2024-12-20",
  },
  contact: {
    title: "start a conversation",
    date: "2025-01-01",
  },
};

const LandingPage = () => {
  const [activeSection, setActiveSection] =
    useState<keyof typeof contentMap>("introduction");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const menuItems = [
    { id: "introduction" as const, label: "introduction" },
    { id: "features" as const, label: "features" },
    { id: "design" as const, label: "design philosophy" },
    { id: "case-study" as const, label: "case study" },
    { id: "contact" as const, label: "contact" },
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
                <Image
                  src="/zine-logo.png"
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
