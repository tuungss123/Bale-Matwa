import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../service/crud.service';
 
@Component({
  selector: 'app-names-list-admin',
  templateUrl: './names-list.admin.component.html',
  styleUrls: ['./names-list.admin.component.css']
})
 
export class NamesListAdminComponent implements OnInit {
   
  Names:any = [];
 
  constructor(private crudService: CrudService) { }
 
  ngOnInit(): void {
    this.crudService.GetNames().subscribe(res => {
      console.log(res)
      this.Names =res;
    });    
  }
 
  delete(id:any, i:any) {
    console.log(id);
    if(window.confirm('Do you want to go ahead?')) {
      this.crudService.deleteName(id).subscribe((res) => {
        this.Names.splice(i, 1);
      })
    }
  }
 
}