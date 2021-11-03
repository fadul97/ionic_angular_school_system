import { AuthService } from './../../../services/auth.service';
import { CredentialsDTO } from './../../../models/credentials.dto';
import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.page.html',
  styleUrls: ['./home-page.page.scss'],
})
export class HomePagePage implements OnInit {
  creds: CredentialsDTO = {
    email: '',
    password: ''
  };

  constructor(
    public navCtrl: NavController,
    public menu: MenuController,
    public auth: AuthService) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.menu.enable(false);
  }

  ionViewDidLeave(){
    this.menu.enable(true);
  }

  signIn(){
    this.auth.authenticate(this.creds)
      .subscribe(response => {
        console.log(response.headers.get('Authorization'));
        this.navCtrl.navigateRoot('student');
      },
      error => {});
  }

  isLoginValid(){
    return true;
  }

  signUp(){
    console.log(this.creds);
    this.navCtrl.navigateRoot('subject');
  }
}
