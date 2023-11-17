import TaskItemView from './taskView'
import ProjectView from './projectView'

export default class MainView{
    getByID(id){
        return document.getElementById(id)
    }
    toggleAddTaskForumVisibility(visible, id)
    {
        const displayValue = visible ? 'block' : 'none';
        this.getByID(id).style.display = displayValue;
        
    }

    toggleFilterVisiblity(visible, id){
        const displayValue = visible ? 'flex' : 'none';
        this.getByID(id).style.display = displayValue
    }

    getAddProjectForumElementValueByName(elementName){
        return this.getByID('add-proj-forum').elements[elementName].value
    }
    getAddTaskForumElementValueByName(elementName){
        return this.getByID('add-task-forum').elements[elementName].value
    }
    resetAndCloseForumByID(forumID,forumContainerID){
        this.getByID(forumID).reset()
        this.toggleAddTaskForumVisibility(false,forumContainerID)
    }
    appendTaskItem(item){
        let templateContent = this.getByID('task-template').content
        let taskItemElementClone = templateContent.cloneNode(true).querySelector("div")
        let taskItemView = new TaskItemView(taskItemElementClone, item)
        this.getByID('task-container').append(taskItemView.element)

        return taskItemView
    }

    appendProject(item){
        let templateContent = this.getByID('project-template').content
        let projectDivElementClone = templateContent.cloneNode(true).querySelector("div");
        let projectView = new ProjectView(projectDivElementClone, item);
        this.getByID('proj-container').append(projectView.element);


        let option = document.createElement('option')
        option.value = item.name
        option.text = item.name
        option.id = `checkbox-${item.id}`
        this.getByID('task-project').appendChild(option)
        return projectView
    }
    fillAddForumWhenEdit(taskItemView){
        this.getByID('add-task-forum').elements['task-name'].value = taskItemView.model.name
        this.getByID('add-task-forum').elements['task-due-date'].value = taskItemView.model.dueDate
        this.getByID('add-task-forum').elements['task-project'].value = taskItemView.model.project

    }
    updateTaskItem(element){
        let taskItemToUpdate = this.getByID(element.id)
        new TaskView(taskItemToUpdate,element.model)
    }
    updateTaskItemAfterProjectDeleted(element){
        let taskItemToUpdate = this.getByID(element.id)
        new TaskView(taskItemToUpdate,element)
    }

}