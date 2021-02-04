import { Component } from '@angular/core';
import { FormFieldTypes, PhoneFormFieldType } from '@aws-amplify/ui-components';

@Component({
  selector: 'my-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'amplify-usernamealias';
  formFields: FormFieldTypes = [
    {
      type: "name",
      label: "Full name",
      placeholder: "Enter your full name",
      required: true
    },
    {
      type: "phone_number",
      label: "Phone number",
      placeholder: "4123456789",
      required: true,
      dialCode: "+61",
    } as PhoneFormFieldType,
    {
      type: "email",
      label: "Email address",
      required: true
    },
    {
      type: "password",
      label: "Password",
      required: true
    }
  ];

}
