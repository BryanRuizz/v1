import { useEffect, useState } from "react";
import { FaGithub, FaInternetExplorer } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
// import '../App.css';

const Projects = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  let navigate = useNavigate();
  // const bounceAnimation = {
  //   animation: 'bounce 2s infinite',
  // };

  const NaviToProjectbyOne = () => {
    navigate("/ProjectByOne");
  }

  //#region managment position x and y
  useEffect(() => {
    const handleMouseMove = (event: { clientX: number; clientY: number; }) => {
      // Remover el cálculo del scroll
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  //#endregion



  return (
    <div className="min-h-screen bg-slate-900" >
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
              <div className="bg-slate-900 p-2 flex-shrink-0 h-1/3 text-slate-400 px-4 rounded-lg ">
                <div className="h-full overflow-auto mb-4">
                  <p className="mb-4">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
                  </p>
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
              <div className="bg-slate-900 text-white text-center p-2 flex-shrink-0 h-1/3 rounded-lg ">
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