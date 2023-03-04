import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { IssueTypeEnum } from 'src/app/core/enums/issue-type.enum';
import { IssueTypeService } from 'src/app/core/services/issue-type.service';

@Component({
  selector: 'app-issue-types',
  templateUrl: './issue-types.component.html',
  styleUrls: ['./issue-types.component.scss']
})
export class IssueTypesComponent implements OnInit {

  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    name: new FormControl(null, Validators.required),
    icon: new FormControl(null, Validators.required),
    color: new FormControl(1, Validators.required),
    type: new FormControl(null, Validators.required),
    issueTypeColumns: new FormArray([], Validators.required),
  });

  issueTypes = Object.values(IssueTypeEnum);
  issueTypeId!: number

  get columnsFormArray() {
    return this.form.get('issueTypeColumns') as FormArray;
  }

  constructor(
    private issueTypeService: IssueTypeService,
    private activatedRoute: ActivatedRoute,
    private route: Router
  ) { }


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params['id']) {
        this.issueTypeId = +params['id'];
        // this.getBoard()
      }
    })
  }
  save() {
    console.log(this.form.value)  
    // this.form.markAllAsTouched()
    // if (this.form.invalid) {
    //   return;
    // }
    // if (this.issueTypeId) {
    //   this.issueTypeService.updateIssueType(this.form.value)
    //     .subscribe( res => {
    //       this.route.navigate(['/projects/setting/board']).then()
    //     })
    // } else {
    //   this.issueTypeService.createIssueType(this.form.value)
    //     .subscribe( res => {
    //       this.route.navigate(['/projects/setting/board']).then()
    //     })
    // }  
  }

  removeCol(id:number){
    console.log(id)
  }

  
  
}
