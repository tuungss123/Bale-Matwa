import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NamesListAdminComponent } from './names-list.admin.component';

describe('NamesListComponent', () => {
  let component: NamesListAdminComponent;
  let fixture: ComponentFixture<NamesListAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NamesListAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NamesListAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
