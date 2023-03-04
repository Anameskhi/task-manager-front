import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBoard } from '../interfaces/board';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class BoardService extends BaseService {
  addBoard(board: any): Observable<IBoard> {
    console.log(board);
    return this.post<IBoard>('board', board);
  }
  getboard():Observable<any>{
    return this.get<any>('board');
  }

  getTarBoard(id:number,):Observable<any>{
    return this.get<any>(`board/${id}`, )
  }
}
