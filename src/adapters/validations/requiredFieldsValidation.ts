import { Validation } from "../interfaces/validation";
import { MissingParamError } from "../presentations/api/errors/missing-param-error";

export class RequiredFieldsValidation implements Validation {
  constructor(private readonly field: string) {}

  validate(data: any): void | Error {
    if (!data[this.field]) {
      return new MissingParamError(this.field);
    }
  }
}
