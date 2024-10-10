import { useEffect, useRef, useState } from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';
import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import L from 'leaflet'; 

const defaultIcon = L.icon({
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png', 
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png', 
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});


L.Marker.prototype.options.icon = defaultIcon;


const Map = () => {
    const [location] = useState<LatLngExpression | null>([19.420083, -99.144867]);
    const [city] = useState("Ciudad de México, MX ");
    const isFetched = useRef(false); // Ref para controlar la petición
    let navigate = useNavigate();

    useEffect(() => {
        fetchLocation();
    }, []);

    const fetchLocation = async () => {
        // Verifica si ya se ha hecho la petición
        if (isFetched.current) {
            console.log("La petición ya se hizo, no se repetirá.", isFetched);
            return;
        }

        try {
            // const response = await fetch(`https://ipinfo.io/json?token=4148c242669b05`);
            // const data = await response.json();
            // const [lat, lng] = data.loc.split(',');
            // setLocation([parseFloat(lat), parseFloat(lng)]);
            // console.log("Petición realizada",data);

            // Cambia la ref para indicar que la petición ya se hizo
            isFetched.current = true;
        } catch (error) {
            console.error("Error obteniendo ubicación por IP: ", error);
        }
    };


    return (
        <div className="bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900 min-h-screen w-full flex flex-col justify-start items-center">

            <div className='mt-16' style={{ height: "auto", width: "90%", background: "", marginBottom: "50px", zIndex: "1000" }}>
                <button
                    onClick={() => navigate("/")}
                    className="bg-slate-900 flex items-center space-x-2 p-2 rounded border border-gray-400 transition-colors duration-300 hover:bg-[#082f49]"
                    style={{ right: "50px" }}
                >
                    <span className="flex items-center text-white leading-normal">
                        <IoIosArrowBack className="mr-1" />Back
                    </span>
                </button>
            </div>


            {location ? (
                <MapContainer
                    center={location}
                    zoom={12}
                    style={{ height: "600px", width: "90%" }}
                >
                    {/* Mapa base */}
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    {/* Marcador en la posición obtenida */}
                    <Marker position={location}>
                        <Popup>
                            Esta es tu ubicación aproximada.
                        </Popup>
                    </Marker>
                </MapContainer>
            ) : (
                <p>Obteniendo ubicación...</p>
            )}



            <div className="absolute bottom-8 left-12">
                <h2 className='mt-2 text-lg font-medium leading-normal text-white sm:text-xl'>In testing</h2>
                <h2 className="mt-3 text-lg font-medium leading-normal text-slate-400 sm:text-xl">Last visited: {`${city}`}</h2>
            </div>


        </div>
    );
}

export default Map;
