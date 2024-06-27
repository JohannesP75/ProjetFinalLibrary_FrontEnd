import axios from "axios";
import Model from "./Model";
import { URL_API_ROOT } from "../config/Constants";

class Person extends Model{
    static getFullName(entity){
        return entity.givenName+" "+entity.surname;
    }

    static getProfile(){
        return null;
    }
}

class Reader extends Person{
    static tableName="/readers";

    static axiosInstance = axios.create({ baseURL: URL_API_ROOT+tableName })

    static getProfile(){
        return this.axiosInstance.get("/profile");
    }
}

class Worker extends Person{
    static tableName="/workers";

    static axiosInstance = axios.create({ baseURL: URL_API_ROOT+tableName })

    static getProfile(){
        return this.axiosInstance.get("/profile");
    }
}

export {Reader, Worker}