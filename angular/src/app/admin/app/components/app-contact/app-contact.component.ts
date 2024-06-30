import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-contact',
  templateUrl: './app-contact.component.html',
  styleUrls: ['./app-contact.component.scss']
})
export class AppContactComponent implements OnInit {
  public contactOptions:Array<any> = new Array<any>();
  constructor() {
    this.contactOptions = [
      {
        personimg:"assets/images/sm/avatar1.jpg",
        personname:"JOHN SMITH",
        personmail:"Johnsmith@example.com",
        mobilenumber: '+01234567890',
        telnumber: '1234567890',
        address: '795 Folsom Ave, Suite 600 San Francisco CADGE 94107',
        facebooklink:'https://www.facebook.com/',
        twitterlink:'https://twitter.com/?lang=en',
        instagramlink:'https://www.instagram.com/?hl=en'
      },
      {
        personimg:"assets/images/sm/avatar2.jpg",
        personname:"HOSSEIN SHAMS",
        personmail:"Hosseinshams@example.com",
        mobilenumber: '+01234567890',
        telnumber: '1234567890',
        address: '795 Folsom Ave, Suite 600 San Francisco CADGE 94107',
        facebooklink:'https://www.facebook.com/',
        twitterlink:'https://twitter.com/?lang=en',
        instagramlink:'https://www.instagram.com/?hl=en'
      },
      {
        personimg:"assets/images/sm/avatar3.jpg",
        personname:"MARYAM AMIRI",
        personmail:"Maryamamiri@example.com",
        mobilenumber: '+01234567890',
        telnumber: '1234567890',
        address: '795 Folsom Ave, Suite 600 San Francisco CADGE 94107',
        facebooklink:'https://www.facebook.com/',
        twitterlink:'https://twitter.com/?lang=en',
        instagramlink:'https://www.instagram.com/?hl=en'
      },
      {
        personimg:"assets/images/sm/avatar4.jpg",
        personname:"TIM HANK",
        personmail:"Timhank@example.com",
        mobilenumber: '+01234567890',
        telnumber: '1234567890',
        address: '795 Folsom Ave, Suite 600 San Francisco CADGE 94107',
        facebooklink:'https://www.facebook.com/',
        twitterlink:'https://twitter.com/?lang=en',
        instagramlink:'https://www.instagram.com/?hl=en'
      },
      {
        personimg:"assets/images/sm/avatar5.jpg",
        personname:"JOHN SMITH",
        personmail:"Johnsmith@example.com",
        mobilenumber: '+01234567890',
        telnumber: '1234567890',
        address: '795 Folsom Ave, Suite 600 San Francisco CADGE 94107',
        facebooklink:'https://www.facebook.com/',
        twitterlink:'https://twitter.com/?lang=en',
        instagramlink:'https://www.instagram.com/?hl=en'
      },
      {
        personimg:"assets/images/sm/avatar6.jpg",
        personname:"FRANK CAMLY",
        personmail:"Frankcamly@example.com",
        mobilenumber: '+01234567890',
        telnumber: '1234567890',
        address: '795 Folsom Ave, Suite 600 San Francisco CADGE 94107',
        facebooklink:'https://www.facebook.com/',
        twitterlink:'https://twitter.com/?lang=en',
        instagramlink:'https://www.instagram.com/?hl=en'
      },
      {
        personimg:"assets/images/sm/avatar1.jpg",
        personname:"GARY CAMARA",
        personmail:"Garycamara@example.com",
        mobilenumber: '+01234567890',
        telnumber: '1234567890',
        address: '795 Folsom Ave, Suite 600 San Francisco CADGE 94107',
        facebooklink:'https://www.facebook.com/',
        twitterlink:'https://twitter.com/?lang=en',
        instagramlink:'https://www.instagram.com/?hl=en'
      },
      {
        personimg:"assets/images/sm/avatar2.jpg",
        personname:"FIDEL TONN",
        personmail:"Fideltonn@example.com",
        mobilenumber: '+01234567890',
        telnumber: '1234567890',
        address: '795 Folsom Ave, Suite 600 San Francisco CADGE 94107',
        facebooklink:'https://www.facebook.com/',
        twitterlink:'https://twitter.com/?lang=en',
        instagramlink:'https://www.instagram.com/?hl=en'
      },
    ];
  }

  ngOnInit(): void {
  }

}
