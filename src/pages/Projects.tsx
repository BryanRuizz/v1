import { useEffect, useState } from "react";
import { FaGithub, FaInternetExplorer } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { experienceDataDetail } from "../data/allprojects";
import { setInf } from "../redux/PortafolioSlice";
import { useDispatch } from "react-redux";
import { allprojects } from "../models/projectsInterface";
import useMousePosition from "../hooks/useMousePosition";

// import '../App.css';

const Projects = () => {
  const position = useMousePosition(false); 
  let navigate = useNavigate();
  const [data, setData] = useState<allprojects[]>(experienceDataDetail);
  const dispatch = useDispatch();

  const NaviToProjectbyOne = (label: string) => {
    const info: any = data.find(item => item.Title === label);
    dispatch(setInf(info));
    console.log(info);
    navigate("/ProjectByOne");
  }





  return (
    <div className="bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900">

      <div
        className="pointer-events-none fixed inset-0 z-30 transition duration-300"
        style={{
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(28, 211, 217, 0.1), transparent 40%)`
        }}
      ></div>
      <div style={{ backgroundColor: "", width: "100%", height: "10vh", bottom: 0 }}></div>

      <div style={{ width: "20%", backgroundColor: "", position: "absolute", top: "10vh" }}>
        <div style={{ height: "auto", width: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "", marginBottom: "50px" }}>
          <button
            onClick={() => navigate("/")}
            className="bg-slate-900 flex items-center space-x-2 p-2 rounded border border-gray-400 transition-colors duration-300 hover:bg-[#082f49]"
          >
            <span className="flex items-center text-white leading-normal">
              <IoIosArrowBack className="mr-1" /> Back
            </span>
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center h-full mb-12 responsivephone" style={{ justifySelf: "center", background: "" }}>
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">Public and personal projects</h1>
        <h2 className=" mt-3 text-lg font-medium leading-normal text-slate-400 sm:text-xl">Redirection to pages or github repositories </h2>
      </div>

      <div className="min-h-screen bg-slate-900 relative">


        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 gap-y-12 p-4">

          {data.map((item, index) => (

            < div key={`${"projectId" + index}`} className="relative group bg-white border border-gray-400 shadow-md rounded-lg overflow-hidden flex flex-col transform transition-transform duration-300 hover:translate-y-[-10px] hover:border-[#7F9B8F]" >
              <img src={`${item.Img}`} className="object-cover w-full h-64 flex-grow-0" alt={`${item.ImgDesc}`} />
              < div className="absolute inset-0 bg-gray-800 bg-opacity-50 flex flex-col opacity-0 group-hover:opacity-100 transition-opacity duration-300" >
                < div className="flex-grow flex items-center justify-center space-x-16 p-4" >

                  <div className="bg-slate-900 text-slate-400 p-1 rounded-lg absolute top-2 left-2">
                   <p className="mb-1">{item.date}</p>
                  </div>

                  {
                    item.Uri !== "" && (
                      <a href={item.Uri} target="_blank" rel="noopener noreferrer">
                        <FaInternetExplorer className="text-white text-3xl hover:text-gray-400 transition-colors duration-300" />
                      </a>
                    )
                  }
                  {item.Github !== "" && (
                    <a href={item.Github} target="_blank" rel="noopener noreferrer">
                      <FaGithub className="text-white text-3xl hover:text-gray-400 transition-colors duration-300" />
                    </a>
                  )}
                </div>
                {item.GeneralDescription !== "" ? (
                  <div className="bg-slate-900 p-2 flex-shrink-0 h-1/3 text-slate-400 px-4 rounded-lg ">
                    <div className="h-full overflow-auto mb-4">
                      <p className="mb-4">
                        {item.GeneralDescription}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="bg-slate-900 text-white text-center p-2 flex-shrink-0 h-1/3 rounded-lg ">
                    <button
                      onClick={() => NaviToProjectbyOne(item.Title)}
                      className="px-3 py-2 bg-slate-900 text-slate-400 border border-gray-400 w-[98%] h-full mx-auto rounded-lg transition-colors duration-300 hover:bg-[#082f49]"
                    >
                      {item.Button}
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                        <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path>
                      </svg>
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div >
      </div >
    </div >
  )
}

export default Projects