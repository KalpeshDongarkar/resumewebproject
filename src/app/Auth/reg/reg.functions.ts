import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms";

// export default class customvalidator{
//   static confirmValidator( pass : string, cpass: string){
//     return(formGroup : FormGroup) =>{
//       const control1 = formGroup.controls[pass];
//       const control2 = formGroup.controls[cpass];
//       if (control2.errors && !control2.errors.confirmValidator) {
//         return;
//       }
//       if (control1.value !== control2.value) {
//         control2.setErrors({confirmValidator: true});
//       } else {
//         control2.setErrors(null);
//       }
//       return null;
//     };
//   }

// }

export const MatchingValidatior: ValidatorFn = (controls: AbstractControl): ValidationErrors | null => {
  const password = controls.get('password');
  const confirmPassword = controls.get('cpassword');

  return password?.value === confirmPassword?.value ? null : { notmatched: true };
};
