import { Injectable } from '@angular/core';
import { AlertComponent } from 'ngx-bootstrap/alert';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertModalComponent } from './alert-modal/alert-modal.component';

export enum AlertTypes{
  DANGER = 'danger',
  SUCCESS = 'success'
}
@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private modalService:BsModalService) {  
  }

  showAlert(message:string, type:AlertTypes){
    const bsModalRef:BsModalRef = this.modalService.show(AlertModalComponent)
    bsModalRef.content.type = type;
    bsModalRef.content.message = message;
  }
  showAlertDanger(message:string){
    this.showAlert(message, AlertTypes.DANGER)
  }

  showAlertSuccess(message:string){
    this.showAlert(message, AlertTypes.SUCCESS)
  }
}