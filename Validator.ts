import { Todov, TodoStatev } from './model';
import { TodoState } from './project/Model';

@validable
export class ValidatableTodo implements Todov {
    id: number;

    @required
    @regex(`^[a-zA-Z]*$`)
    name: string;
    state: TodoStatev;
}

export interface ValidatableTodo extends IValidatable {
}

export interface IValidatable {
    validate(): IValidationResult;
}

export interface IValidationResult {
    isValid: boolean;
    message: string;
    property?: string;
}

export interface IValidator {
    (instance: Object): IValidationResult;
}

export function validate(): IValidationResult[] {
    let validators: IValidator[] = [].concat(this._validators),
        errors: IValidationResult[] = [];
    
    for (let validator of validators) {
        let result = validator(this);

        if(!result.isValid) {
            errors.push(result);
        }
    }

    return errors;
}

export function validable(target: Function) {
    target.prototype.validate = validate;
}

// ValidatableTodo.prototype.validate = validate;

export function required(target: Object, propertyName: string) {

    let validatable = <{_validators: IValidator[] }>target,
        validators = (validatable._validators || (validatable._validators = []));

    validators.push(function(instance) {

        let propertyValue = instance[propertyName],
            isValid = propertyValue != undefined;

        if( typeof propertyValue === 'string' ) {
            isValid = propertyValue && propertyValue.length > 0;
        }

        return {
            isValid,
            message: `${propertyName} is required`,
            property: propertyName
        }

    })

}



export function regex(pattern: string) {

    let expression = new RegExp(pattern);


    return function regex(target: Object, propertyName: string) {

        let validatable = <{_validators: IValidator[] }>target,
        validators = (validatable._validators || (validatable._validators = []));

        validators.push(function(instance) {

            let propertyValue = instance[propertyName],
                isValid = expression.test(propertyValue);

            return {
                isValid,
                message: `${propertyName} does not mach ${expression}`,
                property: propertyName
            }

        })
    }
}
