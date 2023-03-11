import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { IBoard, IUser } from 'src/app/core/interfaces';
import { ProjectService } from 'src/app/core/services';
import { UsersService } from 'src/app/core/services/users.service';
import { ProjectFacadeService } from 'src/app/facades/project.service';
import { UsersRolesComponent } from 'src/app/pages/users/users-roles/users-roles.component';

@Component({
  selector: 'app-project-userform',
  templateUrl: './project-userform.component.html',
  styleUrls: ['./project-userform.component.scss']
})
export class ProjectUserformComponent implements OnInit,OnDestroy{
  displayedColumns: string[] = ['Id', 'FirstName', 'LastName', 'CreatedAt', 'Action'];
  dataSource = new MatTableDataSource<IBoard>()
  sub$ = new Subject()
  projectUserIds?: number
  // users: any ;
  constructor(
    private userService: UsersService,
    private projectService: ProjectService,
    private route: ActivatedRoute,
    public dialog:MatDialog,
    private projectFacadeSrv: ProjectFacadeService
    
    ) {}

  ngOnInit(): void {
    // this.userService.getAllUsers().subscribe((res) => {
    //   console.log(res);
    //   this.users = res;
    //   this.dataSource = res;
    //   console.log(this.dataSource);
    // });
    this.getProjectUsers()
  }

  get projectId(){
   return this.projectFacadeSrv.getProject().id
  }

  ngOnDestroy(): void {
    this.sub$.next(null),
    this.sub$.complete()
  }

  getProjectUsers(){
      this.projectService.getProjectUsers(this.projectId)
      .pipe(takeUntil(this.sub$))
      .subscribe(users =>{
        this.projectUserIds  = users.map((user: IUser) => user.id);
        this.dataSource.data = users;
       
        console.log(users)
    })
    
  }
  // openDialog() {
  //   const dialogRef = this.dialog.open(UsersRolesComponent);
  //   return dialogRef
   
  // }
  // openAddUsers(){
  //   const dialogRef= this.dialog.open(UsersformComponent);
  //   return dialogRef
  // }

  delete(id: number){
 

  }

  
  
}
