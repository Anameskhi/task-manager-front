import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BoardFormService } from 'src/app/core/services/board-form.service';
import { HttpProjectService } from 'src/app/core/services/http-project.service';

@Component({
  selector: 'app-board-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.scss'],
})
export class ProjectFormComponent implements OnInit {
  backgroundColor: string[] = [];
  backgroundImg: string[] = [];
  createProject!: FormGroup;
  color = '';
  background =
    'https://plus.unsplash.com/premium_photo-1674752365557-166d7edc8081?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1075&q=80';
  constructor(private boardFormSrv: BoardFormService,private httpProject:HttpProjectService, private router:Router) {}
  ngOnInit(): void {
    this.backgroundColor = this.boardFormSrv.boardColors;
    this.backgroundImg = this.boardFormSrv.boardImages;

    this.createProject = new FormGroup({
      name: new FormControl('', Validators.required),
      abbreviation: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      color: new FormControl('', Validators.required),
    });
  }

  onColor(colors: string) {
    this.color = colors;
    this.background = colors;
  }
  onSubmit() {
    this.httpProject.createProject(this.createProject.value).subscribe((res)=>{
      console.log(res);
    })
    this.router.navigate(['home/BoardForm'])
    console.log(this.createProject.value);
  }
}
