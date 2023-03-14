import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBoard } from '../interfaces/board';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class BoardService extends BaseService {
  addBoard(board: IBoard): Observable<IBoard> {
    return this.post<IBoard>('board', board);
  }

  updateBoard(board: any): Observable<IBoard> {
    return this.put<IBoard>(`board/${board.id}`, board);
  }
  getboard(): Observable<IBoard[]> {
    return this.get<IBoard[]>('board');
  }

  getTarBoard(id: number): Observable<IBoard> {
    return this.get<any>(`board/${id}`);
  }

  deleteBoard(boardId: number): Observable<any> {
    return this.delete(`board/${boardId}`);
  }
}
