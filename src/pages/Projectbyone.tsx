
import { useEffect, useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../app/store';
import useMousePosition from '../hooks/useMousePosition';

const Projectbyone = () => {
    let navigate = useNavigate();
    const position = useMousePosition(false);

    const tempinfo = useSelector((state: RootState) => state.Portafolio.tempinfo);
    const [data, setData] = useState<any>(tempinfo);//add interface


    useEffect(() => {
        if (!data || data.length <= 0) {
            const storedData = localStorage.getItem('projectbyone');
            // console.log("data empty",data,storedData);
            if (storedData) {
                setData(JSON.parse(storedData));
            }
        }
    }, [data])

    const goback = () => {
        localStorage.removeItem('projectbyone');
        navigate("/Projects")
    }

    return (
        <div className="min-h-screen bg-slate-900 relative selection:bg-teal-300 selection:text-teal-900">
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

                    <div style={{ height: "auto", width: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "", marginBottom: "50px", zIndex: "1000" }}>
                        <button
                            onClick={() => goback()}
                            className="bg-slate-900 flex items-center space-x-2 p-2 rounded border border-gray-400 transition-colors duration-300 hover:bg-[#082f49]"
                        >
                            <span className="flex items-center text-white leading-normal">
                                <IoIosArrowBack className="mr-1" /> Back
                            </span>
                        </button>
                    </div>


                    <ul className="flex flex-col items-center justify-center space-y-4 p-0 m-0 h-full noneed">
                        {data.length !== 0 && data.index.map((item: any, key: any) => (
                            <li key={key}>
                                <a href={`#${item}`} className="text-slate-400 hover:text-slate-200 noneed">
                                    {item}
                                </a>
                            </li>
                        ))}

                    </ul>

                </div>




                {/* Contenedor principal que ocupa el 80% del ancho total */}
                < div style={{ width: "80%", marginLeft: "20%", display: "flex", height: "100%", background: "" }}>
                    {/* Contenido central con scroll */}
                    < div className="text-slate-400 px-4" style={{ flex: "1", height: "calc(110vh - 10vh)", overflowY: "auto", backgroundColor: "", display: "flex" }} >
                        < div style={{ flex: "1", paddingRight: "15%", background: "" }}>
                            < div style={{ width: "100%", height: "10vh" }}></div >

                            {data && data.info ? (
                                <>
                                    <p id={`${data.info.ref}`} className="mb-4">
                                        {data.info.P}
                                    </p>

                                    <div style={{ marginTop: "80px" }}>
                                        <div className="relative group bg-white border border-gray-400 shadow-md rounded-lg overflow-hidden">
                                            <img src={data.info.img} className="object-contain w-full h-auto" alt="aa"loading="lazy" />
                                        </div>
                                    </div>

                                    <p id={`${data.info.ref2}`} className="mt-12">
                                        {data.info.p2}
                                    </p>

                                    {
                                        data.info.images.map((item: any, key: any) => (
                                            <div key={`img-${key}`} style={{ width: "100%", marginTop: "80px" }}>
                                                <div className="relative group bg-white border border-gray-400 shadow-md rounded-lg overflow-hidden">
                                                    <img
                                                        src={`${item}`}
                                                        className="object-contain w-full h-auto"
                                                        alt="aa"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            </div>
                                        ))
                                    }


                                </>
                            ) : (<></>)}

                            <div style={{ height: "110px" }}></div>
                            {/* diseño no mover */}
                        </div >

                        {/* Columna lateral derecha fija dentro del contenedor principal */}
                        < div style={{ width: "10%", backgroundColor: "", height: "calc(90vh - 10vh)", position: "sticky", right: 0 }}></div >


                    </div >
                </div >
            </div >

        </div >
    );
}

export default Projectbyone;
