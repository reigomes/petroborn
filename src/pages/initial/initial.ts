import { Component, ViewChild } from '@angular/core';
import { IonicPage, Slides, NavController, MenuController } from 'ionic-angular';

@IonicPage({
  name: 'page-initial',
  segment: 'initial',
  priority: 'high'
})

@Component({
  selector: 'page-initial',
  templateUrl: 'initial.html',
})

export class InitialPage {
	@ViewChild(Slides) slides: Slides;
  showSkip = true;
  dir: string = 'ltr';

  slideList: Array<any> = [
    {
      title: "What is <strong>ionProperty</strong>?",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque maximus, dui accumsan cursus lacinia, nisl risus.",
      image: "assets/img/ionProperty-ico.png",
    },
    {
      title: "Why ionProperty?",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque maximus, dui accumsan cursus lacinia, nisl risus.",
      image: "assets/img/ionProperty-ico.png",
    },
    {
      title: "Find your perfect home",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque maximus, dui accumsan cursus lacinia, nisl risus.",
      image: "assets/img/ionProperty-ico.png",
    }
  ];

  constructor(public navCtrl: NavController, public menu: MenuController) {
    this.menu.swipeEnable(false);
    this.menu.enable(false);
  }

  onSlideNext() {
    this.slides.slideNext(300)
  }

	onSlidePrev() {
    this.slides.slidePrev(300)
  }

  onLastSlide() {
  	this.slides.slideTo(3, 300)
  }

  openHomePage() {
  	this.navCtrl.setRoot('page-home');
  }

  openAuthPage() {
    this.navCtrl.setRoot('page-auth');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InitialPage');
  }

}
