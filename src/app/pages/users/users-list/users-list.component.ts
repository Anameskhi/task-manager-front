import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProjectService } from 'src/app/core/services';
import { UsersService } from 'src/app/core/services/users.service';
import { UsersRolesComponent } from '../users-roles/users-roles.component';
import { UsersformComponent } from '../usersform/usersform.component';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent  implements OnInit {
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
