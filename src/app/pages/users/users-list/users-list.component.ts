import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProjectService } from 'src/app/core/services';
import { UsersService } from 'src/app/core/services/users.service';
import { UsersRolesComponent } from '../users-roles/users-roles.component';
import { UsersformComponent } from '../usersform/usersform.component';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {

  loader:boolean=true

  displayedColumns: string[] = ['Id', 'FullName', 'CreatedAt', 'Action'];
  dataSource: any;
  users: any;
  constructor(private userService: UsersService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.getAllUsers();
  }

  onDelete(id: number) {
    this.userService.deleteUser(id).subscribe((res) => {
      console.log(res);
      this.getAllUsers();
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(UsersRolesComponent);
  }

  openAddUsers(id?: number) {
    const dialogRef = this.dialog.open(UsersformComponent, {
      data: {
        userId: id,
      },
    });
    dialogRef.afterClosed().subscribe((res) => {
      this.getAllUsers();
    });
  }

  getAllUsers() {
    this.userService.getAllUsers().subscribe((res) => {
      console.log(res);
      this.users = res;
      this.dataSource = res;
      this.loader=false
      
    });
  }
}
