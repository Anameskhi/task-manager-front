import { Component, OnDestroy, OnInit } from '@angular/core';
import { validateBasis } from '@angular/flex-layout';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { EpicsService } from 'src/app/core/services/epics.service';

import { ProjectFacadeService } from 'src/app/facades/project.service';

@Component({
  selector: 'app-project-epicform',
  templateUrl: './project-epicform.component.html',
  styleUrls: ['./project-epicform.component.scss'],
})
export class ProjectEpicformComponent implements OnInit, OnDestroy {
  form: FormGroup = new FormGroup({
    id: new FormControl(null, Validators.required),
    name: new FormControl(null, Validators.required),
    description: new FormControl(null, Validators.required),
  });

  sub$ = new Subject();

  projectId?: number;

  constructor(
    private projectFacadeSrv: ProjectFacadeService,
    private epicSrv: EpicsService
  ) {}

  ngOnInit(): void {
    this.projectId = this.projectFacadeSrv.getProject().id;
    console.log(this.projectId);
  }

  onSubmit() {
    this.form.value.id = this.projectId;

    console.log(this.form);
    this.epicSrv
      .createEpic(this.form.value)
      .pipe(takeUntil(this.sub$))
      .subscribe((res) => {
        console.log(res);
      });
  }

  ngOnDestroy(): void {
    this.sub$.next(null);
    this.sub$.complete();
  }
}
