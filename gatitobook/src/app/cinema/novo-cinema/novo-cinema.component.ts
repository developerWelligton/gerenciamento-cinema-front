import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';
import { AlertService } from 'src/app/shared/alert.service';
import { ListaEnderecoService } from '../lista-endereco/lista-endereco.service';
import { ListaGerenteComponent } from '../lista-gerente/lista-gerente.component';
import { ListaGerenteService } from '../lista-gerente/lista-gerente.service';
import { Endereco } from '../novo-endereco/Endereco';
import { Gerente } from '../novo-gerente/Gerente';
import { Cinema } from './Cinema';

@Component({
  selector: 'app-novo-cinema',
  templateUrl: './novo-cinema.component.html',
  styleUrls: ['./novo-cinema.component.css']
})
export class NovoCinemaComponent implements OnInit {

  formularioCinema!: FormGroup;
  endereco$: Observable<Endereco[]> | undefined  
  gerente$: Observable<Gerente[]> | undefined
  gerenteId: number | undefined;
  enderecoId: number | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private listaGerenteService: ListaGerenteService ,
    private listaEnderecoService: ListaEnderecoService, 
    private spinner: NgxSpinnerService,
    private alertService: AlertService) { }

    ngOnInit(): void {
      this.endereco$ = this.listaEnderecoService.retornaEnderecos(); 
      this.gerente$ = this.listaGerenteService.retornaGerentes();

      this.formularioCinema = this.formBuilder.group({
        Nome: ['', [Validators.required]] ,
        EnderecoId: [this.enderecoId, [Validators.required]] ,
        GerenteId: [this.gerenteId, [Validators.required]]    
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

    changeGerente(event:any) {
      console.log(event.target.value); 
    }

    

}
