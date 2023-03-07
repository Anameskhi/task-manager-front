import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectIssuetypeformComponent } from './project-issuetypeform.component';

describe('ProjectIssuetypeformComponent', () => {
  let component: ProjectIssuetypeformComponent;
  let fixture: ComponentFixture<ProjectIssuetypeformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectIssuetypeformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectIssuetypeformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
