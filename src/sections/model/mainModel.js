import TaskItem from './task';
import TaskList from './taskList';
import Project from './project';
import ProjectList from './projList';


export default class MainModel
{
    constructor()
    {
        this.taskList = new TaskList();
        this.projectList =  new ProjectList();
    }

    createAndAddNewTaskItem(name,description,dueDate,project,checkboxStatus)
    {
        const newTaskItem = new TaskItem(name,description,dueDate,project,checkboxStatus)
        this.taskList.add(newTaskItem)

        return newTaskItem
    }    



}