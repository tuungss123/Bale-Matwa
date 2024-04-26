import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from './../../service/crud.service';
import { FormGroup, FormBuilder } from "@angular/forms";
 
@Component({
  selector: 'app-add-name',
  templateUrl: './add-name.component.html',
  styleUrls: ['./add-name.component.css']
})
 
export class AddNameComponent implements OnInit {
 
  nameForm: FormGroup;
   
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private crudService: CrudService
  ) { 
    this.nameForm = this.formBuilder.group({
      donor_name: [''],
      email: [''],
      contact: [''],
      fund: ['']
    })
  }
 
  ngOnInit() { }
 
  onSubmit(): any {
    this.crudService.AddName(this.nameForm.value)
    .subscribe(() => {
        console.log('Data added successfully!')
        this.ngZone.run(() => location.reload())
      }, (err) => {
        console.log(err);
    });
  }
 
}