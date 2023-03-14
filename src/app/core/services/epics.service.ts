import { ObserversModule } from '@angular/cdk/observers';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEpic } from '../interfaces/epic';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class EpicsService extends BaseService {
  createEpic(epic: IEpic) {
    return this.post<IEpic>('epics', epic);
  }

  getAllEpics() {
    return this.get<IEpic[]>('epics');
  }

  updateEpics(data: any): Observable<any> {
    return this.put<IEpic>(`epics/${data.id}`, data);
  }

  deleteEpics(id:number){
    return this.delete(`epics/${id}`)
  }
}
