import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ExperienceInterface } from "../models/experienceInterface";
import { experienceData, experienceDataEsp } from "../data/experienceData";

interface propstypes {
  language: string;
}

const Experience = ({ language }: propstypes) => {

  let navigate = useNavigate();
  const [dataex, setDataEx] = useState<ExperienceInterface[]>(experienceData);

  useEffect(() => {
    const storedData: any = localStorage.getItem('language');
    // console.log("language desde about", storedData,language);

    if (JSON.parse(storedData) === "ENG" || language === "ENG") {
      // console.log("entro en ingles");

      setDataEx(experienceData);
    }
    if (JSON.parse(storedData) === "ESP" || language === "ESP") {
      // console.log("entro en español");
      setDataEx(experienceDataEsp);
    }

  }, [language])

  const route = () => {
    navigate("/Projects");
  }
  return (
    <>
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Experience</h2>
      </div>
      <div>

        <ol className="group/list">
          {dataex.map((info, index) => (
            <li className="mb-12" key={index}>
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label={info.ariallabelDate}>{info.Sdate}</header>
                <span className="z-10 sm:col-span-6" onClick={info.Shref === "" ? route : () => { }}>
                  <h3 className="font-medium leading-snug text-slate-200">
                    <div>
                      {info.Shref === "" ?
                        <span className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base" rel="noreferrer noopener" aria-label={info.ariallabelref}>
                          <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                          <span>{info.position}{" "}
                            <span className="inline-block"> {info.companyname}
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                                <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path>
                              </svg>
                            </span>
                          </span>
                        </span>
                        :
                        <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base" href={info.Shref} target="_blank" rel="noreferrer noopener" aria-label={info.ariallabelref}>
                          <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                          <span>{info.position}{" "}
                            <span className="inline-block"> {info.companyname}
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                                <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path>
                              </svg>
                            </span>
                          </span>
                        </a>
                      }
                    </div>
                  </h3>
                  <p className="mt-2 text-sm leading-normal">{info.descriptionjob}</p>
                  {/* id="this" */}
                  <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                    {info.items.map((item, index) => (
                      <li className="mr-1.5 mt-2" key={index}>
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">{item}</div>
                      </li>
                    ))
                    }
                  </ul>
                </span>
              </div>
            </li>
          ))}

        </ol>

        {language === "ENG" ? (
          <div className="mt-12" >
            <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 font-semibold text-slate-200 group/link text-base" href="/Software_engineer_Bryan_ruiz_cv_eng.pdf" target="_blank" rel="noreferrer noopener" aria-label="View  Résumé (opens in a new tab)">
              <span>View
                <span className="inline-block">Résumé
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path>
                  </svg>
                </span>
              </span>
            </a>
          </div>
        ) : (

          <div className="mt-12" >
            <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 font-semibold text-slate-200 group/link text-base" href="/Software_engineer_Bryan_ruiz_cv_esp.pdf" target="_blank" rel="noreferrer noopener" aria-label="View  Résumé (opens in a new tab)">
              <span>Ver
                <span className="inline-block">Resumen
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path>
                  </svg>
                </span>
              </span>
            </a>
          </div>)}

      </div>
    </>
  )
}

export default Experience
