import React, { useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, ExternalLink, Github } from 'lucide-react';

type ProjectAction = {
  href: string;
  label: string;
  kind: 'code' | 'live';
};

type Project = {
  title: string;
  description: string;
  image: string;
  status: string;
  technologies: string[];
  highlights: string[];
  actions: ProjectAction[];
};

const projects: Project[] = [
  {
    title: 'CV Builder',
    description:
      'A privacy-first resume builder with live preview, structured editing, template browsing, and gated export flows designed for real job-seeker workflows.',
    image: '/images/cv-builder-home.png',
    status: 'Live product',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'PDF generation'],
    highlights: [
      'Structured resume editing with live preview',
      'Template-driven rendering and export workflows',
      'Production-minded auth, ownership, and plan gating',
    ],
    actions: [
      { href: 'https://resume-builder-nifi.onrender.com/', label: 'View Product', kind: 'live' },
      { href: 'https://github.com/77nimesh/cv-builder', label: 'View Code', kind: 'code' },
    ],
  },
  {
    title: 'Bid Base',
    description:
      'A vehicle auction product direction built around searchable inventory intelligence, historical sale data, and a cleaner user-facing platform for auction research.',
    image: '/images/bid-base-home.png',
    status: 'Live product direction',
    technologies: ['FastAPI', 'PostgreSQL', 'Python', 'Auction data', 'Frontend delivery'],
    highlights: [
      'Search-focused auction platform positioning',
      'Built on structured vehicle data workflows',
      'Connects scraping, parsing, and product presentation',
    ],
    actions: [
      { href: 'https://bidbase.netlify.app/', label: 'Visit Site', kind: 'live' },
    ],
  },
  {
    title: 'IMEI Password Generator',
    description:
      'A mobile-first utility that validates user input, calls an external service, and presents the result in a clean, low-friction workflow.',
    image: '/images/imei-pass-home.png',
    status: 'Live utility',
    technologies: ['JavaScript', 'API integration', 'Responsive UI', 'Input validation'],
    highlights: [
      'Fast single-purpose workflow for technical users',
      'Client-side validation and clear error handling',
      'Designed to work well on phones and quick support scenarios',
    ],
    actions: [
      { href: 'https://imeipass.netlify.app/', label: 'Open Tool', kind: 'live' },
    ],
  },
  {
    title: 'Grays Vehicle Data Scraper',
    description:
      'An automated scraping workflow for collecting sold vehicle auction data, preserving source records, and turning them into structured datasets for analysis.',
    image: '/images/grays-scraper-home.png',
    status: 'Working system',
    technologies: ['Python', 'Playwright', 'JSON', 'CSV', 'Data parsing'],
    highlights: [
      'Automated collection from auction listings',
      'Structured raw-data handling and export paths',
      'Foundation for broader vehicle auction platform work',
    ],
    actions: [
      { href: 'https://soldcartracker.github.io/', label: 'View Data Site', kind: 'live' },
      { href: 'https://github.com/77nimesh/GraysWebScraping_v2', label: 'View Code', kind: 'code' },
    ],
  },
  {
    title: 'EV PreDiag',
    description:
      'A customer-facing intake tool that helps EV and hybrid owners describe faults clearly before diagnostic work begins, improving workshop communication and triage.',
    image: '/images/EVPreDiag.png',
    status: 'Live app',
    technologies: ['React', 'TypeScript', 'Supabase', 'Tailwind CSS', 'PostgreSQL'],
    highlights: [
      'Role-aware form flow for diagnostic intake',
      'Secure data capture with a practical support focus',
      'Built to reduce ambiguity before technical work starts',
    ],
    actions: [
      { href: 'https://evprediag.github.io/', label: 'Open App', kind: 'live' },
      { href: 'https://github.com/EVpreDiag/evprediag.github.io', label: 'View Code', kind: 'code' },
    ],
  },
];

const actionClasses: Record<ProjectAction['kind'], string> = {
  code: 'flex items-center px-5 py-3 bg-slate-700 text-white font-medium rounded-xl hover:bg-slate-600 transition-colors duration-300 border border-slate-600 hover:border-slate-500 group',
  live: 'flex items-center px-5 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/20 group',
};

const actionIcons: Record<ProjectAction['kind'], React.ReactNode> = {
  code: <Github className="w-4 h-4 mr-2 group-hover:rotate-6 transition-transform duration-300" />,
  live: <ExternalLink className="w-4 h-4 mr-2 group-hover:rotate-6 transition-transform duration-300" />,
};

const Portfolio = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'center',
    containScroll: 'trimSnaps',
    loop: false,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  useEffect(() => {
    if (!emblaApi) {
      return;
    }

    const syncState = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    };

    syncState();
    emblaApi.on('select', syncState);
    emblaApi.on('reInit', syncState);

    return () => {
      emblaApi.off('select', syncState);
      emblaApi.off('reInit', syncState);
    };
  }, [emblaApi]);

  const selectedProject = projects[selectedIndex] ?? projects[0];

  const getSlideStyle = (index: number) => {
    const offset = index - selectedIndex;
    const distance = Math.abs(offset);
    const depth = Math.min(distance, 2);

    const opacity = distance === 0 ? 1 : distance === 1 ? 0.7 : 0.38;
    const scale = distance === 0 ? 1 : 1 - depth * 0.12;
    const rotateY = offset * -16;
    const translateX = offset * -28;
    const translateY = distance === 0 ? 0 : depth * 18;

    return {
      opacity,
      transform: `perspective(1600px) translateX(${translateX}px) translateY(${translateY}px) rotateY(${rotateY}deg) scale(${scale})`,
      zIndex: projects.length - depth,
    };
  };

  return (
    <section id="portfolio" className="py-24 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(59,130,246,0.05),transparent_60%)]"></div>
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <p className="text-blue-400 font-semibold mb-4">SELECTED WORK</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mt-8">
            Product, data, and workflow projects built from real technical problems and practical delivery goals
          </p>
        </div>

        <div className="space-y-10">
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-20 hidden w-24 bg-gradient-to-r from-slate-900 to-transparent lg:block"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 z-20 hidden w-24 bg-gradient-to-l from-slate-900 to-transparent lg:block"></div>

            <div className="mb-6 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => emblaApi?.scrollPrev()}
                disabled={!canScrollPrev}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-600 bg-slate-800/70 text-white transition-colors duration-300 hover:border-blue-400 hover:text-blue-300 disabled:cursor-not-allowed disabled:opacity-40"
                aria-label="Previous project"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => emblaApi?.scrollNext()}
                disabled={!canScrollNext}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-600 bg-slate-800/70 text-white transition-colors duration-300 hover:border-blue-400 hover:text-blue-300 disabled:cursor-not-allowed disabled:opacity-40"
                aria-label="Next project"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            <div ref={emblaRef} className="overflow-hidden">
              <div className="-ml-4 flex items-stretch sm:-ml-6">
                {projects.map((project, index) => (
                  <div
                    key={project.title}
                    className="min-w-0 flex-[0_0_84%] pl-4 sm:flex-[0_0_68%] sm:pl-6 lg:flex-[0_0_52%] xl:flex-[0_0_44%]"
                  >
                    <button
                      type="button"
                      onClick={() => emblaApi?.scrollTo(index)}
                      className="block w-full text-left"
                      aria-label={`Focus ${project.title}`}
                    >
                      <div
                        className="relative overflow-hidden rounded-[2rem] border border-slate-700 bg-slate-900/90 shadow-2xl transition-all duration-500 ease-out"
                        style={getSlideStyle(index)}
                      >
                        <div className="aspect-[4/3] overflow-hidden">
                          <img
                            src={project.image}
                            alt={`${project.title} screenshot`}
                            className="h-full w-full object-cover object-top"
                          />
                        </div>
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-transparent px-6 pb-6 pt-16">
                          <div className="inline-flex items-center rounded-full border border-blue-400/25 bg-blue-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-200">
                            {project.status}
                          </div>
                          <h3 className="mt-4 text-2xl font-bold text-white">{project.title}</h3>
                        </div>
                      </div>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <article className="overflow-hidden rounded-3xl border border-slate-700 bg-gradient-to-br from-slate-800 to-slate-900/95 shadow-xl shadow-slate-950/30">
            <div className="grid gap-8 p-8 lg:grid-cols-[1.05fr_0.95fr] lg:p-10">
              <div>
                <div className="mb-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-300">
                    Selected project
                  </p>
                  <div className="mt-4 inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-300">
                    {selectedProject.status}
                  </div>
                  <h3 className="mt-4 text-3xl font-bold text-white">{selectedProject.title}</h3>
                </div>

                <p className="text-lg leading-relaxed text-gray-300">
                  {selectedProject.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-blue-600/30 bg-blue-600/15 px-3 py-2 text-sm font-medium text-blue-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-300">
                    What stands out
                  </h4>
                  <ul className="grid gap-3">
                    {selectedProject.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start text-gray-300">
                        <span className="mt-2 mr-3 h-2 w-2 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400"></span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-4">
                  {selectedProject.actions.map((action) => (
                    <a
                      key={`${selectedProject.title}-${action.label}`}
                      href={action.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={actionClasses[action.kind]}
                    >
                      {actionIcons[action.kind]}
                      {action.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
