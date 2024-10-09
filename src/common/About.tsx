

import { useEffect, useState } from "react"
import { abouteng, aboutesp } from "../data/components/aboutinfo";

interface propstypes {
    language: string;
}

const About = ({ language }: propstypes) => {
    const [data, setData] = useState<any>(abouteng);
    // setData(abouteng);
    useEffect(() => {

        const storedData: any = localStorage.getItem('language');
        // console.log("language desde about", storedData,language);

        if (JSON.parse(storedData) === "ENG" || language === "ENG") {
            // console.log("entro en ingles");

            setData(abouteng);
        }
        if (JSON.parse(storedData) === "ESP" || language === "ESP") {
            // console.log("entro en español");
            setData(aboutesp);
        }

    }, [language])

    return (
        <>

            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">About</h2>
            </div>
            <div>
                {
                    data.map((info: any, index: any) => (
                        <p className="mb-4 " key={`p-${index}`}>
                            {info.p1} {' '}  {info.p2} {' '}
                            <span className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300" rel="noreferrer noopener" aria-label="">{info.p3}</span>
                            {' '}
                            <span className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300" aria-label="advertising agency">{info.w1}, {info.w2}</span>
                            {' '}{info.w3} {' '}
                            <span className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300" aria-label="">{info.w4}</span>
                            {' '} {info.w5}{' '}
                            <span className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300" aria-label="digital product studio (opens in a new tab)">{info.w6}</span>
                            .
                        </p>
                    ))
                }
                <p className="mb-4 text-base text-slate-200">
                    {' '}
                    <a className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300" href="aasassas/" target="_blank" rel="noreferrer noopener" aria-label="Klaviyo (opens in a new tab)"> </a>

                    <a className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300" href="https://app" target="_blank" rel="noreferrer noopener" aria-label="online video course (opens in a new tab)"> </a>
                    {' '}
                </p>

            </div>

        </>
    )
}

export default About