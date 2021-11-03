import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.page.html',
  styleUrls: ['./home-page.page.scss'],
})
export class HomePagePage implements OnInit {
  username: string;
  password: string;

  constructor(public navCtrl: NavController, public menu: MenuController) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.menu.enable(false);
  }

  ionViewDidLeave(){
    this.menu.enable(true);
  }

  signIn(){
    console.log('Username: ' + this.username, 'Password: ' + this.password);
    if(this.isLoginValid()){
      this.navCtrl.navigateRoot('student');
    }
  }

  isLoginValid(){
    return true;
  }

  signUp(){
    this.navCtrl.navigateRoot('subject');
  }
}
