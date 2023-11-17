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

    createAndAddNewTaskItem(name, dueDate, project, checkboxStatus)
    {
        const newTaskItem = new TaskItem(name, dueDate, project, checkboxStatus)
        this.taskList.add(newTaskItem)

        return newTaskItem
    }    

    updateTaskItem(element, name, description, dueDate, project)
    {
        element.model.name = name;
        element.model.description = description;
        element.model.dueDate = dueDate;
        element.model.project = project;
        return element

    }
    removeItemById(id)
    {
        this.taskList.removeById(id)
    }


    createNewProject(name)
    {
        console.log(name);
        const newProject = new Project(name);
        this.projectList.add(newProject);
        return newProject;
    }
    removeProjectById(id)
    {
        this.projectList.removeById(id);
    }
    updateTaskListLocalStorage()
    {
        window.localStorage.setItem('taskList', JSON.stringify(this.taskList))
    }
    updateProjectListLocalStorage()
    {
        window.localStorage.setItem('projectList', JSON.stringify(this.projectList))
    }
    updateCheckBox(id, value)
    {
        this.taskList.getItemByID(id).checkboxStatus = value;
    }

    getTodayDate()
    {
        let today = new Date(); 

        function addZ(n) {
            return (n<10? '0' : '') + n;
        }

        return today.getFullYear() + '-' + addZ(today.getMonth() + 1) + '-' + addZ(today.getDate());
    }
}