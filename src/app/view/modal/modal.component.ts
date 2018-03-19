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
  @Output() onCloseClick: EventEmitter<boolean> = new EventEmitter<boolean>();

  characterData:object;

  constructor() { }

  ngOnInit() {
    this.characterData = this.modalData;
  }

  /*
    Close modal emmiting to parent (character)
   */
  close(){
    this.modalShow = false;
    this.onCloseClick.emit(this.modalShow); // emmiting the event.
    delete this.modalData;
  }



}
