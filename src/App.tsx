import React, { useEffect, useState } from 'react';
import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Experience from './components/Experience';
import Projects from './components/Projects';

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [activeSection, setActiveSection] = useState<string>('about');

  //#region managemet of scrolling 
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let currentSection: string | null = 'about';
      let isAtBottom = false;

      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          currentSection = section.getAttribute('id');
        }
      });

      // Check if user is near the bottom of the page
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        isAtBottom = true;
      }

      setActiveSection(isAtBottom ? 'projects' : currentSection);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  //#endregion

  //#region managment position x and y
  useEffect(() => {
    const handleMouseMove = (event: { clientX: number; clientY: number; }) => {
      const scrollX = window.scrollX || window.scrollX;
      const scrollY = window.scrollY || window.scrollY;
      setPosition({ x: event.clientX + scrollX, y: event.clientY + scrollY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  //#endregion


  return (
    <div className="bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900">

      <div className="__variable_20b187 group/spotlight relative">

        <div
          className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
          style={{
            background: `radial-gradient(
          600px circle at ${position.x}px ${position.y}px,
          rgba(28, 211, 217, 0.15),
          transparent 40%
        )`,
          }}
        ></div>

        <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
          <a href="#content" className="absolute left-0 top-0 block -translate-x-full rounded bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600 px-4 py-3 text-sm font-bold uppercase tracking-widest text-white focus-visible:translate-x-0">Skip to Content</a>

          <div className="lg:flex lg:justify-between lg:gap-4">

            <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
              <div>
                <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl"><a href="/">Bryan Ruiz</a></h1>
                <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">Software Engineer</h2>
                <p className="mt-4 max-w-xs leading-normal">I build maintainable and scalable
                  <br></br>
                  solutions with the best quality</p>
                {/* navegation about, experience, projects */}
                <nav className="nav hidden lg:block" aria-label="In-page jump links">
                  <ul className="mt-16 w-max">
                    <li>
                      <a className="group flex items-center py-3 " href="#about">
                        <span className={activeSection === "about" ? "nav-indicator mr-4 h-px w-16 bg-slate-200 transition-all" : "nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"}></span>
                        <span className={activeSection === "about" ? "nav-text text-xs font-bold uppercase tracking-widest text-slate-200" : "nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200"}>About</span>
                      </a>
                    </li>
                    <li>
                      <a className="group flex items-center py-3" href="#experience">
                        <span className={activeSection === "experience" ? "nav-indicator mr-4 h-px w-16 bg-slate-600 transition-all" : "nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"}></span>
                        <span className={activeSection === "experience" ? "nav-text text-xs font-bold uppercase tracking-widest text-slate-200" : "nav-text text-xs font-bold uppercase tracking-widest text-slate-500 nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200"}>Experience</span>
                      </a>
                    </li>
                    <li>
                      <a className="group flex items-center py-3" href="#projects">
                        <span className={activeSection === "projects" ? "nav-indicator mr-4 h-px w-16 bg-slate-600 transition-all" : "nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"}></span>
                        <span className={activeSection === "projects" ? "nav-text text-xs font-bold uppercase tracking-widest text-slate-200" : "nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200"}>Projects</span>
                      </a>
                    </li>
                  </ul>
                </nav>
                {/* end navigation */}
              </div>
              {/* start networks as github, linkein, what or gmail */}
              <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
                <li className="mr-5 text-xs shrink-0">
                  <a className="block hover:text-slate-200" href="https://github.com/BryanRuizz" target="_blank" rel="noreferrer noopener" aria-label="GitHub (opens in a new tab)" title="GitHub">
                    <span className="sr-only">GitHub</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-7 w-7" aria-hidden="true">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                    </svg>
                  </a>
                </li>
                <li className="mr-5 text-xs shrink-0">
                  <a className="block hover:text-slate-200" href="https://www.linkedin.com/in/bryan-ruiz-b992b71b9/" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn (opens in a new tab)" title="LinkedIn">
                    <span className="sr-only">LinkedIn</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7" aria-hidden="true">
                      <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                    </svg>
                  </a>
                </li>
                <li className="mr-5 text-xs shrink-0"><a className="block hover:text-slate-200" href="mailto:bryanruiz2468@gmail.com" target="_blank" rel="noreferrer noopener" aria-label="CodePen (opens in a new tab)" title="CodePen">
                  <span className="sr-only">CodePen</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7" aria-hidden="true">
                    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"></path>
                  </svg>
                </a>
                </li>
              </ul>
              {/* end networks */}
            </header>




            <main id="content" className="pt-24 lg:w-1/2 lg:py-24" >
              {/* ABOUT seccion */}
              <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="About me">
                <About />
              </section>
              {/* END ABOUT SECCION */}

              {/* ************************* */}

              {/*START EX SECCTION */}
              <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Work experience">
                <Experience />
              </section>
              {/* END EXperience seccion */}

              {/* Project secction */}
              <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Selected projects">
                <Projects />
              </section>
              {/* end project seccion */}

              {/* Footer seccion  */}
              <Footer />
              {/* end Powered by */}
            </main>

            <div></div>

          </div >
        </div >
      </div>
    </div >
  );
}

export default App;
