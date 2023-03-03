import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup, NgForm } from '@angular/forms';
import { ContactService } from '../../core/services/contact.service';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  constructor(private builder: FormBuilder, private contact: ContactService) { }

  FormData: FormGroup;

  respOptions = [
    {
      viewClasses: 'd-none d-md-flex',
      headingClass: 'display-3',
      useSmallerHeadings: true,
    },
    {
      viewClasses: 'd-flex d-md-none',
      headingClass: '',
      useSmallerHeadings: true,
    },
  ];


  ngOnInit() {
    this.FormData = this.builder.group({
      Fullname: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
      Message: new FormControl('', [Validators.required])
    })
  }


  onSubmit(FormData) {
    console.log(this.FormData.value)
    this.contact.PostMessage(FormData)
      .subscribe(response => {
        location.href = 'https://mailthis.to/confirm'
        console.log(response)
      }, error => {
        console.warn(error.responseText)
        console.log({ error })
      })
  }

}
