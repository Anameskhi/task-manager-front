import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProjectService } from '../services';

@Injectable()
export class ProjectInterceptor implements HttpInterceptor {
  constructor(private projectService: ProjectService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const localProject = this.projectService.getLocalProject();
    if (localProject) {
      request = request.clone({
        setHeaders: {
          project: localProject.id.toString(),
        },
      });
    }
    console.log('project interecpt');
    return next.handle(request);
  }
}
