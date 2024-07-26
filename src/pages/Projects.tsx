import { IoIosArrowBack } from "react-icons/io";

const Projects = () => {
  const bounceAnimation = {
    animation: 'bounce 2s infinite',
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-900">
      <div className="absolute top-8 left-8 bg-teal-900 flex items-center space-x-2 p-2 rounded">
        <a href="/" className="flex items-center text-white">
          <IoIosArrowBack className="mr-1" /> Back
        </a>
      </div>
      <h1
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
      </style>
    </div>
  )
}

export default Projects