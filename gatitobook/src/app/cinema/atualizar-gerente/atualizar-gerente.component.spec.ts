import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarGerenteComponent } from './atualizar-gerente.component';

describe('AtualizarGerenteComponent', () => {
  let component: AtualizarGerenteComponent;
  let fixture: ComponentFixture<AtualizarGerenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtualizarGerenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtualizarGerenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
