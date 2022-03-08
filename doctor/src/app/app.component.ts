import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import { fromEvent, Observable, Subscription } from 'rxjs';
import {ToastData, ToastOptions, ToastyService} from 'ng2-toasty';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  //for toast show
  position = 'top-center';
  showClose = true;
  timeout = 10000;
  theme = 'bootstrap';
  type = 'default';
  closeOther = false;

  public offlineEvent: Observable<Event>;
  public subscriptions: Subscription[] = [];

  public connectionStatusMessage: string;
    public connectionStatus: string;

  constructor(private router: Router,private toastyService: ToastyService) { }

  ngOnInit() {
    this.offlineEvent = fromEvent(window, 'offline');

    this.subscriptions.push(this.offlineEvent.subscribe(e => {
      this.connectionStatusMessage = 'Connection lost! Please Check Your Internet Connection';
      this.connectionStatus = 'offline';

      console.log("Connection status :-", this.connectionStatusMessage)
    }));

    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }


}
