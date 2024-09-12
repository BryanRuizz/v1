import { useEffect, useState } from 'react'
import About from '../common/About';
import Experience from '../common/Experience';
import ProjectsSection from '../common/ProjectsSection';
import Footer from '../common/Footer';
import Links from '../components/Links';


const Portafolio = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [activeSection, setActiveSection] = useState<string>('about');


    //#region managemet of scrolling 
    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll<HTMLElement>('section');
            let currentSection: string | null = 'about'; // Sección por defecto
            let isAtBottom = false;

            sections.forEach((section) => {
                const rect = section.getBoundingClientRect();
                if (rect.top <= 100 && rect.bottom >= 100) {
                    currentSection = section.getAttribute('id');
                }
            });

            // Verificar si el usuario está cerca del final de la página
            if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
                isAtBottom = true;
            }

            setActiveSection(isAtBottom ? 'projects' : currentSection!);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const smoothScroll = (targetPosition: number, duration: number) => {
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        let startTime: number | null = null;

        const animation = (currentTime: number) => {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };

        const ease = (t: number, b: number, c: number, d: number) => {
            t /= d / 2;
            if (t < 1) return (c / 2) * t * t + b;
            t--;
            return (-c / 2) * (t * (t - 2) - 1) + b;
        };

        requestAnimationFrame(animation);
    };

    const handleNavClick = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            const targetPosition = section.offsetTop;
            const duration = 600; // here change velocity 
            smoothScroll(targetPosition, duration);
        }
    };



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



    // console.log("still working...");
    return (
        <div className="bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900">

            <div className="__variable_20b187 group/spotlight relative">

                <div
                    className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
                    style={{
                        background: `radial-gradient(
                            600px circle at ${position.x}px ${position.y}px,
                            rgba(28, 211, 217, 0.1),
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

                                {/* Wrap elements last visited and translate  */}

                                <ul className="mt-1 w-max">
                                    <div className="flex flex-wrap">
                                        <li className="mr-6 text-xs shrink-0 mt-4">
                                            <button onClick={() => { }} className="block hover:text-slate-200" rel="noreferrer noopener" aria-label={"(opens in a new tab)"} title={"Last visited"}>
                                                <span className="sr-only">{"mira"}</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17" fill="currentColor" className="h-7 w-7" aria-hidden="true">
                                                    <path d="M8.516 0c-4.687 0-8.5 3.813-8.5 8.5s3.813 8.5 8.5 8.5 8.5-3.813 8.5-8.5-3.814-8.5-8.5-8.5zM1.041 9h2.937c0.044 1.024 0.211 2.031 0.513 3h-2.603c-0.481-0.906-0.776-1.923-0.847-3zM3.978 8h-2.937c0.071-1.077 0.366-2.094 0.847-3h2.6c-0.301 0.969-0.467 1.976-0.51 3zM5.547 5h5.896c0.33 0.965 0.522 1.972 0.569 3h-7.034c0.046-1.028 0.239-2.035 0.569-3zM4.978 9h7.035c-0.049 1.028-0.241 2.035-0.572 3h-5.891c-0.331-0.965-0.524-1.972-0.572-3zM13.013 9h2.978c-0.071 1.077-0.366 2.094-0.847 3h-2.644c0.302-0.969 0.469-1.976 0.513-3zM13.013 8c-0.043-1.024-0.209-2.031-0.51-3h2.641c0.48 0.906 0.775 1.923 0.847 3h-2.978zM14.502 4h-2.354c-0.392-0.955-0.916-1.858-1.55-2.7 1.578 0.457 2.938 1.42 3.904 2.7zM9.074 1.028c0.824 0.897 1.484 1.9 1.972 2.972h-5.102c0.487-1.071 1.146-2.073 1.97-2.97 0.199-0.015 0.398-0.030 0.602-0.030 0.188 0 0.373 0.015 0.558 0.028zM6.383 1.313c-0.629 0.838-1.151 1.737-1.54 2.687h-2.314c0.955-1.267 2.297-2.224 3.854-2.687zM2.529 13h2.317c0.391 0.951 0.915 1.851 1.547 2.689-1.561-0.461-2.907-1.419-3.864-2.689zM7.926 15.97c-0.826-0.897-1.488-1.899-1.978-2.97h5.094c-0.49 1.072-1.152 2.075-1.979 2.972-0.181 0.013-0.363 0.028-0.547 0.028-0.2 0-0.395-0.015-0.59-0.030zM10.587 15.703c0.636-0.842 1.164-1.747 1.557-2.703h2.358c-0.968 1.283-2.332 2.247-3.915 2.703z"></path>
                                                </svg>
                                            </button>
                                        </li>
                                        <li className="mr-5 text-xs shrink-0 mt-4">
                                            <button onClick={() => { }} className="block hover:text-slate-200" rel="noreferrer noopener" aria-label={"(opens in a new tab)"} title={"Spanish Language"}>
                                                <span className="sr-only">{"Spanish or English"}</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 23" fill="currentColor" className="h-7 w-7" aria-hidden="true">
                                                    <path d="M8 15H3.5A2.502 2.502 0 0 1 1 12.5v-9A2.502 2.502 0 0 1 3.5 1h9A2.502 2.502 0 0 1 15 3.5V8h-1V3.5A1.502 1.502 0 0 0 12.5 2h-9A1.502 1.502 0 0 0 2 3.5v9A1.502 1.502 0 0 0 3.5 14H8zm-.038-4.811a9.77 9.77 0 0 1-3.766 1.796l-.242-.97a8.816 8.816 0 0 0 3.282-1.532A9.264 9.264 0 0 1 4.888 5H4V4h3.279l-.544-.544.707-.707L8.692 4H12v1h-.914A9.836 9.836 0 0 1 9.78 8.152a3.853 3.853 0 0 0-1.82 2.037zm.032-1.383A8.167 8.167 0 0 0 10.058 5H5.922a8.18 8.18 0 0 0 2.072 3.806zM23 20.447v-8.894A2.525 2.525 0 0 0 20.484 9h-8.931A2.556 2.556 0 0 0 9 11.553v8.894A2.556 2.556 0 0 0 11.553 23h8.894A2.556 2.556 0 0 0 23 20.447zM20.484 10A1.517 1.517 0 0 1 22 11.516v8.968A1.517 1.517 0 0 1 20.484 22h-8.968A1.517 1.517 0 0 1 10 20.484v-8.968A1.517 1.517 0 0 1 11.516 10zm-2.086 8h-4.796l-1.159 2.23-.886-.46L16 11.215l4.443 8.555-.886.46zm-.52-1L16 13.385 14.122 17zM6 22.01a2.003 2.003 0 0 1-2-2v-2.303l1.646 1.646.707-.707L3.506 15.8.659 18.646l.707.707L3 17.72v2.292a3.003 3.003 0 0 0 3 3h2.058v-1zM22.646 4.647L21 6.293V4a3.003 3.003 0 0 0-3-3h-2v1h2a2.003 2.003 0 0 1 2 2v2.281l-1.634-1.635-.707.707 2.847 2.848 2.848-2.848z"></path>
                                                </svg>
                                            </button>
                                        </li>
                                    </div>
                                </ul>


                                <nav className="nav hidden lg:block" aria-label="In-page jump links">
                                    <ul className="mt-14 w-max">
                                        <li onClick={() => handleNavClick('about')} >
                                            <a className="group flex items-center py-3 " href="#about">
                                                <span className={activeSection === "about" ? "nav-indicator mr-4 h-px w-16 bg-slate-200 transition-all" : "nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"}></span>
                                                <span className={activeSection === "about" ? "nav-text text-xs font-bold uppercase tracking-widest text-slate-200" : "nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200"}>About</span>
                                            </a>
                                        </li>
                                        <li onClick={() => handleNavClick('experience')}>
                                            <a className="group flex items-center py-3" href="#experience">
                                                <span className={activeSection === "experience" ? "nav-indicator mr-4 h-px w-16 bg-slate-600 transition-all" : "nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"}></span>
                                                <span className={activeSection === "experience" ? "nav-text text-xs font-bold uppercase tracking-widest text-slate-200" : "nav-text text-xs font-bold uppercase tracking-widest text-slate-500 nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200"}>Experience</span>
                                            </a>
                                        </li>
                                        <li onClick={() => handleNavClick('projects')}>
                                            <a className="group flex items-center py-3" href="#projects">
                                                <span className={activeSection === "projects" ? "nav-indicator mr-4 h-px w-16 bg-slate-600 transition-all" : "nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"}></span>
                                                <span className={activeSection === "projects" ? "nav-text text-xs font-bold uppercase tracking-widest text-slate-200" : "nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200"}>Projects</span>
                                            </a>
                                        </li>
                                        {/* icons possible buttons and components */}




                                    </ul>
                                </nav>
                                {/* end navigation */}




                            </div>
                            {/* start networks as github, linkein, what or gmail */}
                            <Links />
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
                                <ProjectsSection />
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

export default Portafolio