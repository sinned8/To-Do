import { v4 as uuidv4 } from 'uuid';
export default class TaskItem
{
  constructor(name, dueDate, project, checkboxStatus)
  {
    this.name = name;
    this.dueDate = dueDate;
    this.project = project;
    this.id = uuidv4();
    this.checkboxStatus = checkboxStatus;
    
  }
} 