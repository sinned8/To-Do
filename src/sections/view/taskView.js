export default class TaskItemView
{
    constructor(element, taskItemModel)
    {
        this.element = element;
        this.model = taskItemModel;
        this.id = taskItemModel.id;
        this.name = taskItemModel.name;
        this.description = taskItemModel.description;
        this.dueDate = taskItemModel.dueDate;
        this.project = taskItemModel.project;
        
    }
    get checkbox(){
        return this.element.querySelector('input[name=checkmark-proj]')
    }
    get taskName(){
        return this.element.querySelector('.task-name')

    }
    get taskDueDate(){
        return this.element.querySelector('.due-date')
    }
    get deleteBttn(){
        return this.element.querySelector('delete-task')
    }
    get editBttn(){
        return this.element.querySelector('edit-task')
    }
    get id(){
        return this.element.getAttribute('id')
    }
    set id(value){
        this.element.setAttribute('id',value)

        // const checkBoxId = `checkbox-${value}`
        // this.checkbox.setAttribute('id',checkBoxId)
    }
    set name(value){
        this.taskName.textContent = value
    }
    set due(value){
        this.taskDueDate.textContent = value
    }





}