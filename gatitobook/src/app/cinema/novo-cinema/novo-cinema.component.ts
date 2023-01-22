import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';
import { AlertService } from 'src/app/shared/alert.service';
import { ListaEnderecoService } from '../lista-endereco/lista-endereco.service';
import { Endereco } from '../novo-endereco/Endereco';
import { Cinema } from './Cinema';

@Component({
  selector: 'app-novo-cinema',
  templateUrl: './novo-cinema.component.html',
  styleUrls: ['./novo-cinema.component.css']
})
export class NovoCinemaComponent implements OnInit {

  formularioCinema!: FormGroup;
  endereco$: Observable<Endereco[]> | undefined  
  constructor(
    private formBuilder: FormBuilder,
    private router: Router, 
    private listaEnderecoService: ListaEnderecoService, 
    private spinner: NgxSpinnerService,
    private alertService: AlertService) { }

    ngOnInit(): void {
      this.endereco$ = this.listaEnderecoService.retornaEnderecos(); 
      this.formularioCinema = this.formBuilder.group({
        Nome: ['', [Validators.required]] ,
        EnderecoId: ['', [Validators.required]] ,
        GerenteId: ['', [Validators.required]]    
      }) 
    }

    cadastrar() {  
      console.error("")
      console.log(this.formularioCinema.getRawValue())
      this.spinner.show();
      if(this.formularioCinema.valid){  
        const novoCinema = this.formularioCinema.getRawValue() as Cinema; 
      }
    }
    changeEndereco(event:any) {
      console.log(event.target.value);
    }

}
