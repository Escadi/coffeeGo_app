import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CoffeeGoServices } from '../../services/coffee-go-services';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.page.html',
  styleUrls: ['./client-form.page.scss'],
  standalone: false
})
export class ClientFormPage {

  registerForm: FormGroup;

  constructor(

    private formBuilder: FormBuilder,
    private clientService: CoffeeGoServices,
    private router: Router,
    private alertController: AlertController


  ) {
    this.registerForm = this.formBuilder.group({

      nameClient: ['', [Validators.required]],
      usernameClient: ['', [Validators.required]],
      emailClient: ['', [Validators.required, Validators.email]],
      passwordClient: ['', [Validators.required, Validators.minLength(10)]],
      rolUserClient: ["user"]
    });
  }

  async alertAdd() {
    const alert = await this.alertController.create({
      header: 'Éxito',
      message: 'Añadido correctamente',
      buttons: [
        {
          text: 'OK',
          handler: async () => {
            this.registerForm.reset();
            await this.router.navigateByUrl("/login-users");
          }
        }
      ]
    });
    await alert.present();
  }

  async createClient() {
    if (this.registerForm.valid) {
      this.clientService.createClient(this.registerForm.value).subscribe({
        next: async (data) => {
          console.log("Añadido")
          await this.alertAdd();

        }
      });
    } else {
      console.log('Formulario inválido');
    }
  }

}
