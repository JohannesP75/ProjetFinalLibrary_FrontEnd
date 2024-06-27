import Model from "./Model";

/**
 * Audio document
 */
class Audio extends Model {
    static tableName="/books";

    static axiosInstance = axios.create({ baseURL: URL_API_ROOT+tableName })
}

/**
 * Written document
 */
class Book extends Model {
    static tableName="/books";

    static axiosInstance = axios.create({ baseURL: URL_API_ROOT+tableName })
}

/**
 * Video document
 */
class Video extends Model {
    static tableName="/books";

    static axiosInstance = axios.create({ baseURL: URL_API_ROOT+tableName })
}

export {Audio, Book, Video}