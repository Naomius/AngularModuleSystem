import {FormControl} from "@angular/forms";

export interface IFormGroupInterface {
  name: FormControl<string | null>,
  last_name: FormControl<string | null>,
  phone: FormControl<string | null>,
  country: FormControl<string | null>,
  zip: FormControl<string | null>,
  address: FormControl<string | null>,
  product: FormControl<string | null>,
  comment:  FormControl<string | null>,
}
