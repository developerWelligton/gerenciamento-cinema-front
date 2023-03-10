import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ativaSenhaIguaisValidator } from './ativa-senha-iguais.validator';
import { AtivaUsuarioService } from './ativa-usuario.service';
import { minusculoValidator } from './minusculo.validator';
import { ResetUser } from './ResetUser';

@Component({
  selector: 'app-ativa-usuario',
  templateUrl: 'ativa-usuario.component.html',
  styleUrls: ['ativa-usuario.component.css']
})
export class AtivaUsuarioComponent implements OnInit {
  ativaUsuarioForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, 
    private ativaNovoUsuarioService:AtivaUsuarioService,
    private router: Router,
    private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.ativaUsuarioForm = this.formBuilder.group({
      email:['',[Validators.required, Validators.email] ],
      password:['',[Validators.required]],
      repassword:['',[Validators.required]],
      token:['',[Validators.required]]
    },
    {
      validators: [ativaSenhaIguaisValidator],
    })
  }

  efetuareset(){
    this.spinner.show();
    if(this.ativaUsuarioForm.valid){
      const efetuaresetUsuario = this.ativaUsuarioForm.getRawValue() as ResetUser;
      this.ativaNovoUsuarioService.efetuaresetService(efetuaresetUsuario).subscribe((res)=>{
       console.log(res)
       this.spinner.hide();
       alert("Senha redefinida com sucesso")
       this.router.navigate(['']);
      },
      (error)=>{
       console.log(error)
       this.spinner.hide();
       alert("Erro ao redefinir senha: Dados invalidos")
      }
      )
    }else{
      alert("Dados invalidos")
      this.spinner.hide();
    } 
  }
}
