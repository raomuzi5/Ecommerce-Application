import { Component, OnInit} from '@angular/core';



@Component({
  selector: 'sa-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  eventsModel: any;
    public show_activity = true;
    public show_follow = true;
    public info: string = "About";
    public setting: string = "Overview";

    constructor() { }

    ngOnInit() {

    }

    hideFollow() {
        this.show_activity = !this.show_activity;
    }

    hideActivity() {
        this.show_follow = !this.show_follow;
    }

    toggleInfo(selection: string) {
        this.info = selection;
    }

    toggleSetting(selection: string) {
        this.setting = selection;
    }
}
