import { AppError } from "./app-error";

export class BadInputError extends AppError {
    get badInputs(){
        console.log("badInputs ", this.originalError.error.fields);
        return this.originalError.error.fields
    } 
}