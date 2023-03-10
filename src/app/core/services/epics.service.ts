import { Injectable } from '@angular/core';
import { Iepic } from '../interfaces/epic';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class EpicsService extends BaseService {

  getAllEpics(){
    return this.get<Iepic[]>('epics')
  }

}
