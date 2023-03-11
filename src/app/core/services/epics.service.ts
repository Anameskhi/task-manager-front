import { Injectable } from '@angular/core';
import { IEpic } from '../interfaces/epic';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class EpicsService extends BaseService {

  getAllEpics(){
    return this.get<IEpic[]>('epics')
  }

}
