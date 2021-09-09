import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosService } from './usuarios.service';

describe('UsuariosComponent', () => {
  let component: UsuariosService;
  let fixture: ComponentFixture<UsuariosService>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuariosService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuariosService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
