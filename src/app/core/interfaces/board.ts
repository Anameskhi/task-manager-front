import { IProject } from "./project";

 

export interface IBoard {
  id: number;
  name: string;
  description: string;
  position: number;
  projectId: number;
  project: IProject;
  columns: Column[];
  tasks: any;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

export interface Column {
  id: number;
  name: string;
  description: string;
  position: number;
  taskStatus: any;
  boardId: number;
  board: string;
  tasks: any;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

