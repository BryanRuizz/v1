import React, { useEffect, useState } from 'react'
import Links from '../components/Links';
import About from '../common/About';
import Experience from '../common/Experience';
import Footer from '../common/Footer';
import ProjectsSection from '../common/ProjectsSection';

const Portafolio = () => {
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

    // console.log("still working...");
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