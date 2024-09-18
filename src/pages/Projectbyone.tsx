
import { useEffect, useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

const Projectbyone = () => {
    let navigate = useNavigate();

    const [position, setPosition] = useState({ x: 0, y: 0 });
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
    return (
        <div className="min-h-screen bg-slate-900 relative">
            <div className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
                style={{ background: `radial-gradient(600px circle at ${position.x}px ${position.y}px,rgba(28, 211, 217, 0.1),transparent 40%)` }}>
            </div>
            {/* Header con el botón de regreso */}

            <div className='flex felx-nowrap' style={{ position: "fixed", width: "100%", height: "10vh", top: 0 }}>

                <div style={{ background: "", width: "100%", height: "100%", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", zIndex: 1000 }}></div>
            </div>

            {/* Contenedor principal con columnas laterales y contenido central */}
            <div style={{ display: "flex", width: "100%", height: "90vh" }}>


                {/* Columna lateral fija */}
                <div style={{ width: "20%", backgroundColor: "", position: "fixed", top: "10vh" }} className='floatbutton'>

                    <div style={{ height: "auto", width: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "", marginBottom: "50px" }}>
                        <button
                            onClick={() => navigate("/Projects")}
                            className="bg-slate-900 flex items-center space-x-2 p-2 rounded border border-gray-400 transition-colors duration-300 hover:bg-[#082f49]"
                        >
                            <span className="flex items-center text-white leading-normal">
                                <IoIosArrowBack className="mr-1" /> Back
                            </span>
                        </button>
                    </div>


                    <ul className="flex flex-col items-center justify-center space-y-4 p-0 m-0 h-full noneed">
                        <li>
                            <a className="text-slate-400 font-sans text-base flex items-center" href="#about">
                                {/* <span className="nav-indicator mr-2 h-px w-4 bg-slate-400 transition-all"></span> */}
                                <span className="nav-text hover:text-slate-200 focus-visible:text-slate-200">About</span>
                            </a>
                        </li>
                        <li>
                            <a className="text-slate-400 font-sans text-base flex items-center" href="#experience">
                                {/* <span className="nav-indicator mr-2 h-px w-4 bg-slate-400 transition-all"></span> */}
                                <span className="nav-text hover:text-slate-200 focus-visible:text-slate-200">Experience</span>
                            </a>
                        </li>
                        <li>
                            <a className="text-slate-400 font-sans text-base flex items-center" href="#projects">
                                {/* <span className="nav-indicator mr-2 h-px w-4 bg-slate-400 transition-all"></span> */}
                                <span className="nav-text hover:text-slate-200 focus-visible:text-slate-200">Projects</span>
                            </a>
                        </li>
                    </ul>

                </div>




                {/* Contenedor principal que ocupa el 80% del ancho total */}
                < div style={{ width: "80%", marginLeft: "20%", display: "flex", height: "100%" }}>
                    {/* Contenido central con scroll */}
                    < div
                        className="text-slate-400 px-4"
                        style={{
                            flex: "1",
                            height: "calc(110vh - 10vh)", // Ajusta la altura para que ocupe el espacio restante
                            overflowY: "auto", // Habilita el scroll vertical
                            backgroundColor: "", // Aquí puedes añadir el color de fondo si es necesario
                            display: "flex",
                        }}
                    >
                        {/* Contenido dentro del contenedor con scroll */}
                        < div style={{ flex: "1", paddingRight: "15%" }}>
                            {/* Aquí va el contenido */}
                            < div style={{ width: "100%", height: "10vh" }}></div >
                            {/* Agrega aquí el contenido con múltiples párrafos */}
                            < p className="mb-4" >
                                A software development professional with more than two years of experience in back - end and front - end technologies.Specializes in developing scalable and maintainable solutions.Passionate about continually learning and improving, which has allowed to enhance performance and safety in the projects I have worked on.Experienced in
                            </p >
                            {/* Agrega más contenido aquí */}
                            < p className="mb-4" >
                                A software development professional with more than two years of experience in back - end and front - end technologies.Specializes in developing scalable and maintainable solutions.Passionate about continually learning and improving, which has allowed to enhance performance and safety in the projects I have worked on.Experienced in
                            </p >
                            {/* Agrega más contenido aquí */}
                            < p className="mb-4" >
                                A software development professional with more than two years of experience in back - end and front - end technologies.Specializes in developing scalable and maintainable solutions.Passionate about continually learning and improving, which has allowed to enhance performance and safety in the projects I have worked on.Experienced in
                            </p >
                            {/* Agrega más contenido aquí */}
                            < p className="mb-4" >
                                A software development professional with more than two years of experience in back - end and front - end technologies.Specializes in developing scalable and maintainable solutions.Passionate about continually learning and improving, which has allowed to enhance performance and safety in the projects I have worked on.Experienced in
                            </p >
                            {/* Agrega más contenido aquí */}
                            < p className="mb-4" >
                                A software development professional with more than two years of experience in back - end and front - end technologies.Specializes in developing scalable and maintainable solutions.Passionate about continually learning and improving, which has allowed to enhance performance and safety in the projects I have worked on.Experienced in
                            </p >
                            {/* Agrega más contenido aquí */}
                            < p className="mb-4" >
                                A software development professional with more than two years of experience in back - end and front - end technologies.Specializes in developing scalable and maintainable solutions.Passionate about continually learning and improving, which has allowed to enhance performance and safety in the projects I have worked on.Experienced in
                            </p >
                            {/* Agrega más contenido aquí */}
                            < p className="mb-4" >
                                A software development professional with more than two years of experience in back - end and front - end technologies.Specializes in developing scalable and maintainable solutions.Passionate about continually learning and improving, which has allowed to enhance performance and safety in the projects I have worked on.Experienced in
                            </p >
                            {/* Agrega más contenido aquí */}
                            < p className="mb-4" >
                                A software development professional with more than two years of experience in back - end and front - end technologies.Specializes in developing scalable and maintainable solutions.Passionate about continually learning and improving, which has allowed to enhance performance and safety in the projects I have worked on.Experienced in
                            </p >
                            {/* Agrega más contenido aquí */}
                            < p className="mb-4" >
                                A software development professional with more than two years of experience in back - end and front - end technologies.Specializes in developing scalable and maintainable solutions.Passionate about continually learning and improving, which has allowed to enhance performance and safety in the projects I have worked on.Experienced in
                            </p >
                            {/* Agrega más contenido aquí */}
                            < p className="mb-4" >
                                A software development professional with more than two years of experience in back - end and front - end technologies.Specializes in developing scalable and maintainable solutions.Passionate about continually learning and improving, which has allowed to enhance performance and safety in the projects I have worked on.Experienced in
                            </p >
                            {/* Agrega más contenido aquí */}
                            < p className="mb-4" >
                                A software development professional with more than two years of experience in back - end and front - end technologies.Specializes in developing scalable and maintainable solutions.Passionate about continually learning and improving, which has allowed to enhance performance and safety in the projects I have worked on.Experienced in
                            </p >
                            {/* Agrega más contenido aquí */}

                        </div >

                        {/* Columna lateral derecha fija dentro del contenedor principal */}
                        < div style={{ width: "10%", backgroundColor: "", height: "calc(90vh - 10vh)", position: "sticky", right: 0 }}>
                            {/* Aquí puedes añadir contenido para la columna derecha */}
                        </div >


                    </div >
                </div >
            </div >

        </div >
    );
}

export default Projectbyone;
