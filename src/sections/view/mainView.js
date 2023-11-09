import TaskView from './taskView'
import ProjectView from './projectView'

export default class MainView{
    getByID(id){
        return document.getElementById(id)
    }
    toggleAddTaskFormVisibility(visible, id)
    {
        const displayValue = visible ? 'block' : 'none';
        this.getByID(id).style.display = displayValue;
    }

    toggleFilterVisiblity(visible, id){
        const displayValue = visible ? 'grid' : 'none';
        this.getByID(id).style.display = displayValue
    }

    getAddProjectFormElementValueByName(elementName){
        return this.getByID('add-proj-forum').elements[elementName].value
    }
    getAddTaskFormElementValueByName(elementName){
        return this.getByID('add-task-forum').elements[elementName].value
    }
    resetAndCloseFormByID(formID,formContainerID){
        this.getByID(formID).reset()
        this.toggleAddTaskFormVisibility(false,formContainerID)
    }
    appendTaskItem(item){
        let templateContent = this.getByID('task-template').content
        let taskItemElementClone = templateContent.cloneNode(true).querySelector('div')
        let taskItemView = new taskItemView(taskItemElementClone, item)
        this.getByID('task-container').append(taskItemView.element)

        return taskItemView
    }

    appendProject(item){
        let templateContent = this.getByID('project-template')
        let projectDivElementClone = templateContent.cloneNode(true).querySelector("div");
        let projectView = new ProjectView(projectDivElementClone, item);
        this.getByID('proj-main-container').append(projectView.element);


        let option = document.createElement('option')
        option.value = item.element
        option.text = item.element
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
        new taskItemView(taskItemToUpdate,element.model)
    }
    updateTaskItemAfterProjectDeleted(element){
        let taskItemToUpdate = this.getByID(element.id)
        new taskItemView(taskItemToUpdate,element)
    }

}