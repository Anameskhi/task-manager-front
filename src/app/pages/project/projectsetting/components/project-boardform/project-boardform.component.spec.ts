import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectBoardformComponent } from './project-boardform.component';

describe('ProjectBoardformComponent', () => {
  let component: ProjectBoardformComponent;
  let fixture: ComponentFixture<ProjectBoardformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectBoardformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectBoardformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
