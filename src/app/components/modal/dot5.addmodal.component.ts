import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { WebsocketService } from 'src/app/service/websocket.service.ts.service';

@Component({
  selector: 'app-addmodal',
  templateUrl: './dot5.addmodal.component.html',
  styleUrls: ['./dot5.addmodal.component.css']
})

export class AddmodalComponent {
  
  /**Tag name to be added */
  public tag: string = ""
  
  constructor(
    public dialogRef: MatDialogRef<AddmodalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {tag:string}) {}

  /** Close modal with no action */
  onNoClick(): void {
    this.dialogRef.close();
  }

}