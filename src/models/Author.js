import axios from "axios";
import CRUDInterface from "../config/CRUDInterface";
import { AuthorType } from "../config/Constants";

/**
 * Abstract class representing the authors of the documents present in the library
 */
class Author{
    /**
     * Name of the action
     */
    static tableName="/authors";

    static axiosInstance = axios.create({ baseURL: URL_API_ROOT+tableName })

    /**
     * Creates a new instance of Author in the database
     * @param {Author} newAuthor New author to create
     * @returns 
     */
    static create(newAuthor){
        return this.axiosInstance.post("", newAuthor)
        .then((resp)=>{
            return resp.data
        })
        .catch((error)=>{
            console.log(error)
        });
    }

    /**
     * Reads an instance of Author from the database
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
     * Reads all the instances of Author from the database
     * @returns List of instances of Author
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
     * Updates an instance of Author
     * @param {Number} id ID of the instance of Author to update
     * @param {JSON} patch List of modifications for the instance of Author
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
     * Deletes an instance of Author
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

    /**
     * Turns a JSON into an Author
     * @param {*} json 
     * @returns Author Value of the author. Returns null for irregular Author type
     */
    static JSONtoAuthor(json){
        let author=null;
        let id=json.id, name=json.name, sortedName=json.sortedName, description=json.description, yearBirth=json.yearBirth, documents=json.documents, audios=json.audios;

        if(json.author_type==AuthorType.AUTHOR_COLLECTIVE)
            author = new CollectiveAuthor(id, name, sortedName, description, yearBirth, documents, audios)
        else if(json.author_type==AuthorType.AUTHOR_INDIVIDUAL){
            let yearDeath=json.yearDeath;

            author = new IndividualAuthor(id, name, sortedName, description, yearBirth, documents, audios, yearDeath)
        }

        return author;
    }

    /**
     * Sends the full name of the author
     * @returns The full name of the author
     */
    getFullName() {
        return this.name;
    }

    constructor(id, name, sortedName, description, yearBirth, documents, audios){
        this.CRUDInterfaceAuthor=new CRUDInterface(Author.tableName, Author.JSONtoAuthor);
        this.id=id;
        this.name=name;
        this.sortedName=sortedName;
        this.description=description;
        this.yearBirth=yearBirth;
        this.documents=documents;
        this.audios=audios;
    }
}

class IndividualAuthor extends Author{
    constructor(id, name, sortedName, description, yearBirth, documents, audios, yearDeath, givenName){
        super(id, name, sortedName, description, yearBirth, documents, audios);
        this.yearDeath=yearDeath;
        this.givenName=givenName;
    }

        /*
    constructor(id){
        this.id=id;
        this=Author.get(id);
    }*/

    /**
     * Sends the full name of the author
     * @returns The full name of the author
     */
    getFullName() {
        return this.givenName+" "+this.name;
    }
}

class CollectiveAuthor extends Author{
    constructor(id, name, sortedName, description, yearBirth, documents, audios, seat){
        super(id, name, sortedName, description, yearBirth, documents, audios);
        this.seat=seat;
    }

    /*
    constructor(id){
        this.id=id;
    }
        */
}

export {Author, CollectiveAuthor, IndividualAuthor}