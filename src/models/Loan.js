import Model from "./Model";

class Loan extends Model{
    static tableName="/loans";

    static axiosInstance = axios.create({ baseURL: URL_API_ROOT+tableName })
}

export default Loan