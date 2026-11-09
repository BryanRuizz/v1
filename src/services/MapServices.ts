import api from "../common/api";
import { encryptLogin } from "../utils/encryptLogin";




export const getcity = async () => {
    const response = await api.get(`/cities`)
    return response.data;
}


export const updatecity = async (info: any, tk: string) => {
    const response = await api.patch(`/1/cities`, info, {
        headers: {
            "Authorization": `Bearer ${tk}`
        }
    })
    return response.data;
}



export const getInfo = async () => {
    const devinf = import.meta.env.VITE_INFO_IO_TOKEN;
    const response = await fetch(`https://ipinfo.io/json?token=${devinf}`)
    return response.json();
}


export const Inside = async () => {
    const email = import.meta.env.VITE_US1;
    const password = import.meta.env.VITE_PS1;

    if (!email || !password) {
        throw new Error("Faltan las credenciales de prueba");
    }

    const encryptedCredentials = await encryptLogin(email, password);

    const response = await fetch(
        "https://apirest2.vercel.app/api/v1/auth/login",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(encryptedCredentials),
        }
    );

    if (!response.ok) {
        throw new Error(`Error de login: ${response.status}`);
    }

    const result = await response.json();
    return result.data.access_token;
};