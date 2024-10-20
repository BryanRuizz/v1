import axios from "axios";
// import { useAppSelector } from "../app/hooks";

export default axios.create({
  baseURL: "https://apirest2.vercel.app/api/v1/workouts",  //API de produccion
 
  headers: {
    "Content-type": "application/json",
  }
}); 