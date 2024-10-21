import { useEffect, useRef, useState } from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';
import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import L from 'leaflet';
import { getcity, updatecity } from '../services/MapServices';
import { Notyf } from 'notyf';

const defaultIcon = L.icon({
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

L.Marker.prototype.options.icon = defaultIcon;

interface SetViewOnClickProps {
    location: LatLngExpression | null; // Aquí definimos el tipo
}

const SetViewOnClick = ({ location }: SetViewOnClickProps) => {
    const map = useMap();
    useEffect(() => {
        if (location) {
            map.setView(location, map.getZoom());
        }
    }, [location, map]);

    return null;
};

const Map = () => {
    const [location, setLocation] = useState<LatLngExpression | null>([25.5427769, -103.4068786]);
    const [city, setCity] = useState("Searching ");
    const isFetched = useRef(false);
    let navigate = useNavigate();
    const notyf = new Notyf({ position: { x: 'left', y: 'top' } });
    const [localLanguage, setLocalLanguage] = useState("ENG");


    useEffect(() => {
        getcities();
        const storedData: any = localStorage.getItem('language');
        // console.log("proyectbyone", storedData);
        if (JSON.parse(storedData) === "ESP") {
            setLocalLanguage("ESP");
        } else {
            setLocalLanguage("ENG");
        }
    }, []);

    const fetchLocation = async () => {
        if (isFetched.current) {
            return;
        }

        try {
            const response = await fetch(`https://ipinfo.io/json?token=4148c242669b05`);
            const data = await response.json();
            let thiscity = data.city + " " + data.region + "," + data.country;
            let cord = data.loc;
            let info = {
                cityName: thiscity,
                cityLocation: cord
            }
            const apires = await updatecity(info);
            console.log("apirest", apires);
            isFetched.current = true;
        } catch (error) {
            console.error("Error obteniendo ubicación por IP: ", error);
        }
    };

    const getcities = async () => {
        try {
            const res: any = await getcity();
            if (res) {
                let ress = res.data;

                const parts = ress.split(/,(.+)/);
                const location = parts[0].trim() + ',' + parts[1].trim().split(',')[0];
                const coordinates = parts[1].trim().split(',').slice(1).join(',');

                setCity(location);
                const coordsArray = coordinates.split(',').map(Number);
                setLocation(coordsArray);
                fetchLocation();
            }
        } catch (error) {
            notyf.error({
                message: 'Not was possible get last city',
                duration: 1000,
            });
            console.error("f", error);
        }
    }

    return (
        <div className="bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900 min-h-screen w-full flex flex-col justify-start items-center">
            <div className='mt-16 w-11/12 sm:w-10/12 lg:w-9/12 mb-12 z-10'>
                <button
                    onClick={() => navigate("/")}
                    className="bg-slate-900 flex items-center space-x-2 p-2 rounded border border-gray-400 transition-colors duration-300 hover:bg-[#082f49]"
                >
                    <span className="flex items-center text-white">
                        <IoIosArrowBack className="mr-1" /> {localLanguage === "ENG" ? "Back" : "Atras"}
                    </span>
                </button>
            </div>

            {location ? (
                <MapContainer
                    center={location}
                    zoom={12}
                    style={{ height: '500px', width: '80%' }} // Ajusta el tamaño aquí
                >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <SetViewOnClick location={location} />
                    <Marker position={location}>
                        <Popup>
                        {localLanguage === "ENG" ? "This is your most approximate location" : " Esta es tu ubicación aproximada."}
                           
                        </Popup>
                    </Marker>
                </MapContainer>

            ) : (
                <p>{localLanguage === "ENG" ? "Getting location..." : "Obteniendo ubicación..."}</p>
            )}

            <div className=" bottom-8 left-12 mt-12 ">
                {/* <h2 className='mt-2 text-lg font-medium text-white sm:text-xl'>In testing</h2> */}
                <h2 className="mt-3 text-lg font-medium text-white sm:text-xl">{localLanguage === "ENG" ? "Last visited:" : "Última visita:"} {`${city}`}</h2>
            </div>
        </div>
    );
}

export default Map;
