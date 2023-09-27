import { Component } from '@angular/core';

// Закрыть диалоговое окно, если не использовать аттрибут mat-dialog-close в разметке
// import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css']
})
export class DeleteDialogComponent {

// Закрыть диалоговое окно, если не использовать аттрибут mat-dialog-close в разметке
// constructor(public dialogRef: DialogRef<DeleteDialogComponent>){}
constructor(){}

// Закрыть диалоговое окно, если не использовать аттрибут mat-dialog-close в разметке
// close(){
// this.dialogRef.close()
// }

}
