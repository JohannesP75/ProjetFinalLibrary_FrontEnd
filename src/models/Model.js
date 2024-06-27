class Model{
    /**
     * Name of the action
     */
    static tableName="/";

    /**
     * Instance of Axios
     */
    static axiosInstance = axios.create({ baseURL: URL_API_ROOT+tableName })

    /**
     * Creates a new instance in the database
     * @param {Author} newEntity New author to create
     * @returns 
     */
    static create(newEntity){
        return this.axiosInstance.post("", newEntity)
        .then((resp)=>{
            return resp.data
        })
        .catch((error)=>{
            console.log(error)
        });
    }

    /**
     * Reads an instance from the database
     * @param {Number} id ID of the Author to read
     * @returns Instance of Author
     */
    static get(id){
        return this.axiosInstance.get(`/${id}`)
        .then((resp)=>{
            return resp.data
        }).catch((error)=>{
            console.log(error)
        })
    }

    /**
     * Reads all the instances from the database
     * @returns List of instances
     */
    static getAll(){
        return this.axiosInstance.get()
        .then((resp)=>{
            return resp.data
        }).catch((error)=>{
            console.log(error)
        })
    }

    /**
     * Updates an instance
     * @param {Number} id ID of the instance to update
     * @param {JSON} patch List of modifications in JsonPatch
     * @returns HTTPS statute
     */
    static update(id, patch){
        return this.axiosInstance.patch(`/${id}`, patch)
        .then((resp)=>{
            return resp.data
        })
        .catch((error)=>{
            console.log(error)
        });
    }

    /**
     * Deletes an instance
     * @param {Number} id ID of the instance to delete
     * @returns 
     */
    static delete(id){
        return this.axiosInstance.delete(`/${id}`)
        .then((resp)=>{
            return resp.data
        }).catch((error)=>{
            console.log(error)
        })
    }
}

export default Model