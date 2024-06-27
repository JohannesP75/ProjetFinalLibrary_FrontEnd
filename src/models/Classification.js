import Model from "./Model";

class Dewey extends Model{
    static tableName="/dewey";

    static axiosInstance = axios.create({ baseURL: URL_API_ROOT+tableName })
}

class ANSCR extends Model{
    static tableName="/anscr";

    static axiosInstance = axios.create({ baseURL: URL_API_ROOT+tableName })
}

export {ANSCR, Dewey}