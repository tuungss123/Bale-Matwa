import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CrudService } from './../../service/crud.service';
import { FormGroup, FormBuilder } from "@angular/forms";
 
@Component({
  selector: 'app-name-detail',
  templateUrl: './name-detail.component.html',
  styleUrls: ['./name-detail.component.css']
})
 
export class NameDetailComponent implements OnInit {
 
  getId: any;
  updateForm: FormGroup;
   
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private activatedRoute: ActivatedRoute,
    private crudService: CrudService
  ) {
    this.getId = this.activatedRoute.snapshot.paramMap.get('id');
 
    this.crudService.GetName(this.getId).subscribe(res => {
      this.updateForm.setValue({
        donor_name: res['donor_name'],
        email: res['email'],
        contact: res['contact'],
        fund: res ['fund']
      });
    });
 
    this.updateForm = this.formBuilder.group({
      donor_name: ['donor_name'],
      email: ['email'],
      contact: ['contact'],
      fund: ['fund']
    })
  }
 
  ngOnInit() { }
 
  onUpdate(): any {
    this.crudService.updateName(this.getId, this.updateForm.value)
    .subscribe(() => {
        console.log('Data updated successfully!')
        this.ngZone.run(() => this.router.navigateByUrl('/names-list'))
      }, (err) => {
        console.log(err);
    });
  }
 
}