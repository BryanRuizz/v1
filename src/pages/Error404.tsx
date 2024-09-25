
import { useNavigate } from 'react-router-dom';

const Error404 = () => {
    let navigate = useNavigate();

    const handleGoHome = () => {
        navigate('/');
    };

    return (
        <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center text-white">
            <h1 className="text-8xl font-bold mb-8">404</h1>
            <p className="text-4xl mb-8">Oops! The page you're looking for doesn't exist.</p>
            <button
                onClick={handleGoHome}
                className="py-4 px-6 rounded  font-sans bg-slate-900 flex items-center space-x-2 p-2 rounded border border-gray-400 rounded-l transition-colors duration-300 hover:bg-[#082f49]"
            >
                <p style={{fontSize:18, font:"sans"}}>Go to Home</p>
            </button>
        </div>
    )
}

export default Error404