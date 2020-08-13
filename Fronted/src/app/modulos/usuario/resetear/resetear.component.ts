import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { UsuarioService } from 'src/app/servicios/servicios_de_usuario/usuario.service';
import MD5 from 'crypto-js/md5';
import { Router } from '@angular/router';
import {  ChangePasswordModel} from 'src/app/modelos/change-password.model';


declare const ShowNotificationMessage: any;
@Component({
  selector: 'app-resetear',
  templateUrl: './resetear.component.html',
  styleUrls: ['./resetear.component.css']
})
export class ResetearComponent implements OnInit {

  fgValidator: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: UsuarioService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.FormBuilding();
  }

  FormBuilding() {
    this.fgValidator = this.fb.group({
      currentPassword: ['', [Validators.required]],
      newPassword: ['', [Validators.required]],
      newPassword2: ['', [Validators.required]]
    });
  }

  ChangePassword() {
    if (this.fgValidator.invalid || this.fgv.newPassword.value != this.fgv.newPassword2.value) {
      ShowNotificationMessage('Invalid Form.');
    } else {
      let model = this.getChangePasswordData();
      this.service.ChangePassword(model).subscribe(
        data => {
          ShowNotificationMessage('Your password has been changed.');
          this.router.navigate(["/maestro/home"]);
        },
        err => {
          ShowNotificationMessage('Error processing data.');
        }
      );
    }
  }

  /**
   * Build a model instance to send it
   */
  getChangePasswordData(): ChangePasswordModel {
    let model = new ChangePasswordModel();
    model.id = this.service.getUserId();
    model.currentPassword = MD5(this.fgv.currentPassword.value).toString();
    model.newPassword = MD5(this.fgv.newPassword.value).toString();
    console.log(model);
    return model;
  }

  get fgv() {
    return this.fgValidator.controls;
  }

}
