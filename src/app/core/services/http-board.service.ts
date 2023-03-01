import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Board } from '../interfaces/board';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class HttpBoardService extends BaseService {
  addBoard(board: Board): Observable<any> {
    console.log(board);
    return this.post<any>('board', board);
  }
}
