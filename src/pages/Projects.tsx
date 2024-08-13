import { IoIosArrowBack } from "react-icons/io";
// import '../App.css';

const Projects = () => {
  // const bounceAnimation = {
  //   animation: 'bounce 2s infinite',
  // };
  return (
    <div className="min-h-screen bg-slate-900" >

      <div style={{ backgroundColor: "", width: "100%", height: "15vh", bottom: 0 }}>
        <div className="absolute top-8 left-8 bg-teal-900 flex items-center space-x-2 p-2 rounded" >
          <a href="/" className="flex items-center text-white">
            <IoIosArrowBack className="mr-1" /> Back
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">

        <div className="relative bg-slate-600 border border-bg-slate-900 shadow-md rounded-lg overflow-hidden">
          <img src="https://res.cloudinary.com/dl86hv6ta/image/upload/v1721435707/c_cu5l1g.png" className="object-cover w-full" alt="Descripción de la imagen 1" />
          <div className=" bottom-0 left-0 right-0 bg-slate-900  text-whie text-center p-2">
            <h2>Descripción de la imagen 1</h2>
          </div>
        </div>
        <div className="relative bg-white border border-gray-400 shadow-md rounded-lg overflow-hidden">
          <img src="https://res.cloudinary.com/dl86hv6ta/image/upload/v1721414801/a_sjtlua.png" className="object-cover w-full" alt="Descripción de la imagen 2" />
        </div>
        <div className="relative bg-white border border-gray-400 shadow-md rounded-lg overflow-hidden">
          <img src="https://res.cloudinary.com/dl86hv6ta/image/upload/v1721418599/b_mcmflx.png" className="object-cover w-full" alt="Descripción de la imagen 3" />
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