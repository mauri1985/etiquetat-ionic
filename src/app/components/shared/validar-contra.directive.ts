import { Validators, NG_VALIDATORS, AbstractControl } from '@angular/forms';
import { Directive, Input } from '@angular/core';

@Directive({
    selector: '[appConfirmEqualValidator]',
    providers:[{
        provide: NG_VALIDATORS,
        useExisting: ValidarContraDirective,
        multi: true
    }] 
})

export class ValidarContraDirective implements Validators{
    @Input() appConfirmEqualValidator: string;
    validate(control: AbstractControl): {[key:string]: any} | null{
        const controlToCompare = control.parent.get(this.appConfirmEqualValidator);
        if(controlToCompare && controlToCompare.value !== control.value){
            return {'notEqual': true};
        }

        return null;
    }
}