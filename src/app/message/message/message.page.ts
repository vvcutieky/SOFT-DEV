import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.scss'],
})
export class MessagePage implements OnInit {
  toastController: any;

  constructor() { }

  ngOnInit() {
  }

  message: string = '';
  messageSent: boolean = false;

  @Output() messageSentEvent = new EventEmitter<string>();

  sendMessage() {
    if (this.message.trim()) {
      this.messageSentEvent.emit(this.message.trim());
      this.messageSent = true;
      this.message = '';
      setTimeout(() => {
        this.messageSent = false;
      }, 2000);
    }
  }

  resetMessage() {
    this.message = '';
  }



}
