import api from "../common/api";



export const getcity = async () => {
    const response = await api.get(`/cities`)
    return response.data;
}


export const updatecity = async (info:any) => {
    const response = await api.patch(`/1/cities`,info)
    return response.data;
}




