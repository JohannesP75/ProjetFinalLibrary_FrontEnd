import Model from "./Model";

class ItemAudio extends Model{
    static tableName="/audio-items";

    static axiosInstance = axios.create({ baseURL: URL_API_ROOT+tableName })
}

class ItemBook extends Model{
    static tableName="/book-items";

    static axiosInstance = axios.create({ baseURL: URL_API_ROOT+tableName })
}

class ItemVideo extends Model{
    static tableName="/video-items";

    static axiosInstance = axios.create({ baseURL: URL_API_ROOT+tableName })
}

export {ItemAudio, ItemBook, ItemVideo}