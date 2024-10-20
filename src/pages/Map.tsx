import { useEffect, useRef, useState } from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
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


const Map = () => {
    const [location, setLocation] = useState<LatLngExpression | any>([25.5427769, -103.4068786]);
    const [city, setCity] = useState("Searching ");
    const isFetched = useRef(false); // Ref para controlar la petición
    let navigate = useNavigate();
    const notyf = new Notyf({ position: { x: 'left', y: 'top' } });

    useEffect(() => {
        getcities();
    }, []);

    const fetchLocation = async () => {
        // Verifica si ya se ha hecho la petición
        if (isFetched.current) {
            // console.log("La petición ya se hizo, no se repetirá.", isFetched);
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
            // console.log("mi ciudad", info);
            const apires = await updatecity(info);
            console.log("Response api",apires);
            // const [lat, lng] = data.loc.split(',');
            // setLocation([parseFloat(lat), parseFloat(lng)]);
            // console.log("Petición realizada",data);

            // Cambia la ref para indicar que la petición ya se hizo
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

                const parts = ress.split(/,(.+)/); // Divide en dos partes usando una expresión regular
                const location = parts[0].trim() + ',' + parts[1].trim().split(',')[0]; // Combina el nombre de la ciudad con 'Mx'
                const coordinates = parts[1].trim().split(',').slice(1).join(','); // Obtiene las coordenadas

                // console.log("parts:", parts);
                // console.log("Ubicación:", location);
                setCity(location);
                // console.log("Coordenadas:", coordinates);
                const coordsArray = coordinates.split(',').map(Number);
                setLocation(coordsArray);
                fetchLocation();
                // setCity(res.data);
                // console.log("mira tu ciudad", res.data);
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
                        <IoIosArrowBack className="mr-1" />Back
                    </span>
                </button>
            </div>

            {location ? (
                <MapContainer
                    center={location}
                    zoom={12}
                    className="h-[400px] sm:h-[500px] w-11/12 sm:w-10/12 lg:w-9/12"
                >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Marker position={location}>
                        <Popup>
                            Esta es tu ubicación aproximada.
                        </Popup>
                    </Marker>
                </MapContainer>
            ) : (
                <p>Obteniendo ubicación...</p>
            )}

            <div className=" bottom-8 left-12 mt-12 ">
                <h2 className='mt-2 text-lg font-medium text-white sm:text-xl'>In testing</h2>
                <h2 className="mt-3 text-lg font-medium text-slate-400 sm:text-xl">Last visited: {`${city}`}</h2>
            </div>
        </div>

    );
}

export default Map;
