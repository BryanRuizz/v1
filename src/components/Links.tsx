import React, { useState } from 'react'
import { datalinks } from '../data/links';
import { UrlsInteface } from '../models/linksInterfcae';


const Links = () => {
    const [data, setData] = useState<UrlsInteface[]>(datalinks);
    // console.log("data", datalinks);

    return (
        <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">

            {
                data.map((info, index) => (
                    <li className="mr-5 text-xs shrink-0" key={index}>
                        <a className="block hover:text-slate-200" href={info.link} target="_blank" rel="noreferrer noopener" aria-label={info.name+" "+ "(opens in a new tab)"} title={info.name}>
                            <span className="sr-only">{info.name}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox={info.name === "GitHub"? "0 0 16 16":"0 0 24 24"} fill="currentColor" className="h-7 w-7" aria-hidden="true">
                                <path d={info.svg}></path>
                            </svg>
                        </a>
                    </li>
                ))
            }
        </ul>
    )
}

export default Links