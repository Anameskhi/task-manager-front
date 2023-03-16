import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iepic } from '../interfaces/epic';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class EpicsService extends BaseService {

  getAllEpics(): Observable<Iepic[]> {
    return this.get<Iepic[]>(`epics`);
  }
  
}
