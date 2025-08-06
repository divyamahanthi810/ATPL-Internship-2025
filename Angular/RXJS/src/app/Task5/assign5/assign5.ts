import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { NzModalModule } from 'ng-zorro-antd/modal';
@Component({
  selector: 'app-assign5',
  imports: [ NzModalModule ],
  templateUrl: './assign5.html',
  styleUrl: './assign5.css'
})
export class Assign5 {
isVisible = false;
  modalEvents$ = new Subject<string>();

  constructor() {
    this.modalEvents$.subscribe(event => console.log('Modal event:', event));
  }

  showModal() {
    this.isVisible = true;
    this.modalEvents$.next('Modal Opened');
  }

  handleCancel() {
    this.isVisible = false;
    this.modalEvents$.next('Modal Cancelled');
  }

  handleOk() {
    this.isVisible = false;
    this.modalEvents$.next('Modal Confirmed');
  }
}
