import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  // Properties of Modal
  @Input() modalShow: boolean; // Modal statut [show - disable]
  @Input() modalData; // data since characters page

  constructor() { }

  ngOnInit() {
  }




}
