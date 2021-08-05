import { AppError } from "./app-error";

export class BadInputError extends AppError {
    get badInputs(): BadInput[]{
        return this.originalError.error.fields
    } 
}

interface BadInput{
    params : string,
    message : string
  }