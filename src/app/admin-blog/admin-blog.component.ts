import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';

// Для конструкции без объявления отдельного компонента DeleteDialogComponent
// import {MatDialogModule} from '@angular/material/dialog';



export interface PeriodicElement {
  id: number;
  title: string;
  body: string;
  image: string;
  published_at: Date;
}

@Component({
  selector: 'app-admin-blog',
  templateUrl: './admin-blog.component.html',
  styleUrls: ['./admin-blog.component.css']
})

export class AdminBlogComponent {

  constructor(public dialog: MatDialog) { }

  dataSource: PeriodicElement[] = [
    {
      id: 1,
      title: 'My Best Blog',
      body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus unde nam ut doloremque laboriosam optio neque dicta itaque architecto dolorem porro ad, beatae fugit cumque nulla quisquam omnis placeat. Ullam.',
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      published_at: new Date(),
    },
    {
      id: 2,
      title: 'My Best Blog',
      body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus unde nam ut doloremque laboriosam optio neque dicta itaque architecto dolorem porro ad, beatae fugit cumque nulla quisquam omnis placeat. Ullam.',
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      published_at: new Date(),
    },
    {
      id: 3,
      title: 'My Best Blog',
      body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus unde nam ut doloremque laboriosam optio neque dicta itaque architecto dolorem porro ad, beatae fugit cumque nulla quisquam omnis placeat. Ullam.',
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      published_at: new Date(),
    },
    {
      id: 4,
      title: 'My Best Blog',
      body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus unde nam ut doloremque laboriosam optio neque dicta itaque architecto dolorem porro ad, beatae fugit cumque nulla quisquam omnis placeat. Ullam.',
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      published_at: new Date(),
    },
    {
      id: 5,
      title: 'My Best Blog',
      body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus unde nam ut doloremque laboriosam optio neque dicta itaque architecto dolorem porro ad, beatae fugit cumque nulla quisquam omnis placeat. Ullam.',
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      published_at: new Date(),
    },
  ];

  displayedColumns: string[] = ['id', 'title', 'image', 'published_at', 'actions'];


  delete(id: number) {
    const dialogRef = this.dialog.open(DeleteDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if(result){
        this.dataSource = this.dataSource.filter(data => data.id != id)
      }
    })
  }

}



// Если не создавать отдельно компонент окна удаления DeleteDialogComponent,
// то можно воспользоваться этой конструкцией

//   delete(id: number) {
//     this.dialog.open(DeleteDialog);
//   }
// }

// @Component({
//   selector: 'delete-dialog',
//   templateUrl: "delete-dialog.component.html",
//   standalone: true,
//   imports: [MatDialogModule],
// })
// export class DeleteDialog {

// }
