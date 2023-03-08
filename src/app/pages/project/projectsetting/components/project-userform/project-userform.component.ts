import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UsersService } from 'src/app/core/services/users.service';
import { UsersRolesComponent } from 'src/app/pages/users/users-roles/users-roles.component';
import { UsersformComponent } from 'src/app/pages/users/usersform/usersform.component';

@Component({
  selector: 'app-project-userform',
  templateUrl: './project-userform.component.html',
  styleUrls: ['./project-userform.component.scss']
})
export class ProjectUserformComponent {
  displayedColumns: string[] = ['Id', 'FullName', 'CreatedAt', 'Action'];
  dataSource:any;
  users: any ;
  constructor(
    private userService: UsersService,
    public dialog:MatDialog) {}

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe((res) => {
      console.log(res);
      this.users = res;
      this.dataSource = res;
      console.log(this.dataSource);
    });
  }
  openDialog() {
    const dialogRef = this.dialog.open(UsersRolesComponent);
    return dialogRef
    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }
  openAddUsers(){
    const dialogRef= this.dialog.open(UsersformComponent);
    return dialogRef
  }
}
