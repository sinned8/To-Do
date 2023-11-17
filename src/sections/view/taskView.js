export default class TaskItemView
{
    constructor(element, taskItemModel)
    {
        this.element = element;
        this.model = taskItemModel;
        this.id = taskItemModel.id;
        this.name = taskItemModel.name;
        this.description = taskItemModel.description;
        this.due = taskItemModel.dueDate;
        this.project = taskItemModel.project;
        console.log(this.project);
        console.log(this.due);
    }
    get checkbox(){
        return this.element.querySelector('input[name=checkTask]')
    }
    get checkboxLabel()
    {
        return this.element.querySelector("label[name=checkBoxLabel]");
    }
    get taskName(){
        return this.element.querySelector('.task-name')
    }

    get taskDueDate(){
        return this.element.querySelector('.due-date')
    }
    get deleteBttn(){
        return this.element.querySelector('.delete-task')
    }
    get editBttn(){
        return this.element.querySelector('.edit-task')
    }
    get id(){
        return this.element.getAttribute('id')

        
    }
    set id(value){
        this.element.setAttribute('id',value)

        // const checkBoxId = `checkbox-${value}`;
        // this.checkbox.setAttribute("id", checkBoxId);
        // this.checkboxLabel.setAttribute("for", checkBoxId)
    }
    set name(value){
        this.taskName.textContent = value
    }
    set due(value){
        this.taskDueDate.textContent = value
    }





}