import React from 'react'
import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

const Projectbyone = () => {
    let navigate = useNavigate();
    return (
        <div className="min-h-screen bg-slate-900" >

            <div style={{ backgroundColor: "red", width: "100%", height: "15vh", bottom: 0 }}>
                <div
                    style={{
                        backgroundColor: "blue",
                        width: 150,
                        height: "100%",
                        display: "flex",          // Agregado: Flexbox para centrar el contenido
                        justifyContent: "center", // Centra horizontalmente
                        alignItems: "center",     // Centra verticalmente
                    }}
                >
                    <button
                        onClick={() => navigate("/Projects")}
                        className="bg-slate-900 flex items-center space-x-2 p-2 rounded border border-gray-400 transition-colors duration-300 hover:bg-[#082f49] "
                    >
                        <span className="flex items-center text-white leading-normal">
                            <IoIosArrowBack className="mr-1" /> Back
                        </span>
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Projectbyone