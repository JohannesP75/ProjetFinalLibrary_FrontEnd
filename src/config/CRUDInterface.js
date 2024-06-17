import { URL_API_ROOT } from "./Constants";

class CRUDInterface{

    /**
     * Constructor
     * @param {String} tableName Name of the table to which send the requestd
     * @param {function} JSONtoModel Function turning a JSON into an instance of Model
     */
    constructor(tableName, JSONtoModel){
        this.tableName=tableName;
        this.JSONtoModel=JSONtoModel;
    }

    /**
     * Creates a new instance of Model
     * @param {Model} newInstance Instance of model to create
     * @returns HTTPS status
     */
    async create(newInstance){
        return await fetch(URL_API_ROOT+this.tableName, {
            method: "POST",
            body: JSON.stringify(newInstance)
        })
        .then((resp) => {
            return resp.status;
        })
        .catch(function(error){
            console.log(error);
        });
    }

    /**
     * Reads an instance of Model
     * @param {Number} id Identifiant of the Model instance to fetch
     * @returns Author Instance to retrieve
     */
    async get(id){
        return await fetch(URL_API_ROOT+this.tableName+"/"+id)
        .then((resp) => {
            return resp.json();
        })
        .then(function(data){
            return this.JSONtoModel(data);
        })
        .catch(function(error){
            console.log(error);
        });
    }

    /**
     * Reads all the instances of Model from the database
     * @returns List of all the instances
     */
    async getAll(){
        return await fetch(URL_API_ROOT+this.tableName)
        .then((resp) => resp.json())
        .then((data) => {
            return data.array.map(element => this.JSONtoModel(element));
        })
        .catch(function(error){
            console.log(error);
        });
    }

    /**
     * Updates the instance of Model
     * @param {Number} id ID of the instance of Model to update
     * @param {JSON} patch Modifications of the instance
     * @returns HTTPS status
     */
    async update(id, patch){
        return await fetch(URL_API_ROOT+this.tableName+"/"+id, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: patch
        })
        .then((resp) =>{
            return resp.status;
        })
        .catch(function(error){
            console.log(error);
        });
    }

    /**
     * Deletes an author on the database
     * @param {Number} id ID of the author to delete
     */
    static async delete(id){
        await fetch(URL_API_ROOT+this.tableName+"/"+id, {
            method: "DELETE"
        }).catch(function(error){
            console.log(error);
        });
    }
}

export default CRUDInterface