import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject, takeUntil } from 'rxjs';
import { IBoard, IUser } from 'src/app/core/interfaces';
import { ProjectService } from 'src/app/core/services';
import { UsersService } from 'src/app/core/services/users.service';
import { ProjectFacadeService } from 'src/app/facades/project.service';

@Component({
  selector: 'app-project-userform',
  templateUrl: './project-userform.component.html',
  styleUrls: ['./project-userform.component.scss']
})
export class ProjectUserformComponent implements OnInit,OnDestroy{
  displayedColumns: string[] = ['Id', 'FirstName', 'LastName', 'CreatedAt', 'Action'];
  dataSource = new MatTableDataSource<IUser>();
  loader=true;
  sub$ = new Subject()
  projectUserIds?: any
  getAllUsers$: Observable<IUser[]> = this.userService.getAllUsers()
  // users: any ;
  constructor(
    private userService: UsersService,
    private projectService: ProjectService,
    private route: ActivatedRoute,
    public dialog:MatDialog,
    private projectFacadeSrv: ProjectFacadeService
    
    ) {}

    userForm: FormGroup = new FormGroup({
      userId: new FormControl(null, [Validators.required])
    })
  chooseUserActive = false
  ngOnInit(): void {
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
      this.projectService.getProjectUsers()
      .pipe(takeUntil(this.sub$))
      .subscribe(users =>{
        this.projectUserIds  = users.map((user: IUser) => user.id);
        this.dataSource.data = users;
      this.loader=false
        console.log(users)
    })
    
  }

  delete(currentId: number){
    const userIds = this.projectUserIds.filter( (otherId: number) => otherId !== currentId)

    this.projectService.addUserProject({ 
      projectId: this.projectId, 
      userIds
    })
    .pipe(takeUntil(this.sub$))
    .subscribe((res)=>{
      console.log(res)
      this.getProjectUsers()
    })
    console.log(this.projectId)
    console.log(userIds)
 

  }
  chooseUser(){
    const userIds = [...this.projectUserIds,this.userForm.value.userId]

    this.projectService.addUserProject({
      projectId: this.projectId,
      userIds
    })
    .pipe( takeUntil(this.sub$))
    .subscribe(()=>{
      this.getProjectUsers(),
      this.chooseUserToggle()
    })

  }


  chooseUserToggle(){
    this.chooseUserActive = !this.chooseUserActive

  }

  
  
}
