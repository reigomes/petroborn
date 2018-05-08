import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

@IonicPage({
	name: 'page-timeline',
	segment: 'timeline'
})

@Component({
  selector: 'page-timeline',
  templateUrl: 'timeline.html',
})

export class TimelinePage {

  items = [
    {
      title: 'Closing Business',
      content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo culpa eum sed dolores officia delectus vitae nostrum eligendi quaerat dolore reprehenderit, dolorum quo animi laborum veritatis maiores vero totam magni.`,
      icon: 'calendar',
      dir: 'direction-r',
      time: { subtitle: '1/16/2018', title: '21:30' }
    },
    {
      title: 'Broker Visit',
      content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus cupiditate nam, itaque doloribus provident illum quis distinctio, sunt iste, odio earum ad. Repellat quaerat, enim nesciunt dolorem porro perspiciatis sequi? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum accusamus, minima, illum natus, perspiciatis quibusdam maxime nemo ex cupiditate fugit molestiae similique tempore totam necessitatibus nam, adipisci modi vero libero.`,
      icon: 'calendar',
      dir: 'direction-l',
      time: { subtitle: 'January', title: '29' }
    },
    {
      title: 'Broker Contact',
      content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit ipsa explicabo, voluptate amet, suscipit accusantium quaerat blanditiis, magnam rerum iste nobis excepturi, aliquam perferendis iure magni molestias cum sunt voluptates.`,
      icon: 'calendar',
      dir: 'direction-r',
      time: { title: 'Short Text' }
    }
  ];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TimelinePage');
  }

}
