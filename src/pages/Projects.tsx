import {  FaGithub, FaInternetExplorer } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
// import '../App.css';

const Projects = () => {
  let navigate = useNavigate();
  // const bounceAnimation = {
  //   animation: 'bounce 2s infinite',
  // };

  const NaviToProjectbyOne =()=>{
    navigate("/ProjectByOne");
  }
  return (
    <div className="min-h-screen bg-slate-900" >

      <div style={{ backgroundColor: "", width: "100%", height: "18vh", bottom: 0 }}>
        <button onClick={()=>  navigate("/")} className="absolute top-8 left-8 bg-slate-900 flex items-center space-x-2 p-2 rounded border border-gray-400 rounded-l transition-colors duration-300 hover:bg-[#082f49]" >
          <a className="flex items-center text-white leading-normal">
            <IoIosArrowBack className="mr-1" /> Back
          </a>
        </button>

        <div className="flex flex-col items-center justify-center h-full ">
          <h1 className="text-white text-3xl font-bold">Public and personal projects</h1>
          <h2 className=" text-2xl text-slate-200">Redirection to pages or github repositories </h2>
        </div>
      </div>

      <div className="min-h-screen bg-slate-900 relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">

          {/* Tarjeta con descripción */}
          <div className="relative group bg-white border border-gray-400 shadow-md rounded-lg overflow-hidden flex flex-col transform transition-transform duration-300 hover:translate-y-[-10px] hover:border-[#7F9B8F]">
            <img
              src="https://res.cloudinary.com/dl86hv6ta/image/upload/v1721435707/c_cu5l1g.png"
              className="object-cover w-full h-64 flex-grow-0" // Añade flex-grow: 0
              alt="Descripción de la imagen 1"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gray-800 bg-opacity-50 flex flex-col opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {/* Íconos */}
              <div className="flex-grow flex items-center justify-center space-x-16 p-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <FaInternetExplorer className="text-white text-3xl hover:text-gray-400 transition-colors duration-300" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="text-white text-3xl hover:text-gray-400 transition-colors duration-300" />
                </a>
                {/* <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="text-white text-3xl hover:text-gray-400 transition-colors duration-300" />
                </a> */}
              </div>
              {/* Descripción */}
              <div className="bg-slate-900 text-white text-center p-2 flex-shrink-0 h-1/3">
                <div className="h-full overflow-auto">
                  <h2>
                    Descripción de la imagen 1Descripción de la imagen 1Descripción de la imagen 1
                  </h2>
                </div>
              </div>
            </div>


          </div>


          {/* Tarjeta sin descripción */}
          <div className="relative group bg-white border border-gray-400 shadow-md rounded-lg overflow-hidden flex flex-col transform transition-transform duration-300 hover:translate-y-[-10px] hover:border-[#7F9B8F]">
            <img
              src="https://res.cloudinary.com/dl86hv6ta/image/upload/v1721414801/a_sjtlua.png"
              className="object-cover w-full h-64"
              alt="Descripción de la imagen 2"
            />

            <div className="absolute inset-0 bg-gray-800 bg-opacity-50 flex flex-col opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {/* Íconos */}
              <div className="flex-grow flex items-center justify-center space-x-16 p-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <FaInternetExplorer className="text-white text-3xl hover:text-gray-400 transition-colors duration-300" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="text-white text-3xl hover:text-gray-400 transition-colors duration-300" />
                </a>
                {/* <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="text-white text-3xl hover:text-gray-400 transition-colors duration-300" />
                </a> */}
              </div>
              {/* Descripción */}
              <div className="bg-slate-900 text-white text-center p-2 flex-shrink-0 h-1/3">
                <button
                  onClick={NaviToProjectbyOne}
                  className="px-3 py-2 bg-slate-900 text-white border border-gray-400 w-[98%] h-full mx-auto rounded-lg transition-colors duration-300 hover:bg-[#082f49]"
                >
                  Read post
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Otra tarjeta sin descripción */}
          <div className="relative group bg-white border border-gray-400 shadow-md rounded-lg overflow-hidden flex flex-col transform transition-transform duration-300 hover:translate-y-[-10px] hover:border-[#7F9B8F]">
            <img
              src="https://res.cloudinary.com/dl86hv6ta/image/upload/v1721418599/b_mcmflx.png"
              className="object-cover w-full h-64"
              alt="Descripción de la imagen 3"
            />
          </div>

        </div>
      </div>


      {/* <h1
        className="text-8xl font-bold text-slate-400"
        style={bounceAnimation}
      >
        Working...
      </h1>

      <style>
        {`
          @keyframes bounce {
            0%, 100% {
              transform: translateY(-25%);
              animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
            }
            50% {
              transform: translateY(0);
              animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
            }
          }
        `}
      </style> */}
    </div>
  )
}

export default Projects