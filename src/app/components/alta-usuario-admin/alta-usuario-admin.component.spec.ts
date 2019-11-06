import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaUsuarioAdminComponent } from './alta-usuario-admin.component';

describe('AltaUsuarioAdminComponent', () => {
  let component: AltaUsuarioAdminComponent;
  let fixture: ComponentFixture<AltaUsuarioAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltaUsuarioAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaUsuarioAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
