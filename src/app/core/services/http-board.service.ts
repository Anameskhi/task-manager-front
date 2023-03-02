import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBoard } from '../interfaces/board';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class HttpBoardService extends BaseService {
  addBoard(board: any): Observable<IBoard> {
    console.log(board);
    return this.post<IBoard>('board', board);
  }
  
}
