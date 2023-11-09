export default class MainController{

constructor(model,view){
    this.model = model;
    this.view = view;
    this.onEditTaskItem = {status:'false', element: ""};

    view.getByID("add-project-bttn").addEventListener('click', () => this.toggleAddTaskFormVisibility(true, 'add-proj-container'));
    view.getByID("close-add-proj-forum-bttn").addEventListener('click', () => this.resetAndCloseForumByID('add-proj-forum', 'add-proj-container'));
    view.getByID('add-task-forum').addEventListener('submit', (e) => this.on)

}


onAddTaskForumSubmit(e){
    e.preventDefault()
    this.onEditTaskItem.status == true ? this.updateTaskItem() : this.createNewTaskItem()
    this.view.resetAndCloseForumByID('add-task-forum','add-task-forum-container')
}
createNewTaskItem(){
    const newTaskItem = this.createNewTaskItemFromForumInputs();
    this.appendAndHookUpNewTodoItemFromModel(newTaskItem)
    this.model.updateTaskListLocalStorage()
}
updateTaskItem(){
    const forumElements = this.getElementsFromForumInputs()
    const updatedTaskItem = this.model.updateTaskItem(this.onEditTaskItem.element, forumElements.name, forumElements.dueDate, forumElements.project)
    this.view.updateTaskItem(updatedTaskItem)
    this.onEditTaskItem.status = false
    this.model.updateTaskListLocalStorage()
}



getElementsFromForumInputs(){
    const name = this.view.getAddTaskForumElementValueByName('task-name')
    const dueDate = this.view.getAddTaskForumElementValueByName('task-due-date')
    const project = this.view.getAddTaskForumElementValueByName('task-project')

    return {name, dueDate, project};
}
createNewTaskFromForumInputs(){
    const forumElements = this.getElementsFromForumInputs()
    return this.model.createAndAddNewTaskItem(forumElements.name,forumElements.dueDate,forumElements.project)
}


appendAndHookUpNewTaskItemFromModel(taskItem){
    const newTaskItemView = this.view.appendTaskItem(taskItem)

    newTaskItemView.deleteButton.addEventListener('click',() =>
    this.deleteTaskItem(newTaskItemView));

    newTaskItemView.editButton.addEventListener('click',() =>
    this.editTaskItem(newTaskItemView));

    newTaskItemView.deleteButton.addEventListener('change',() =>
    this.checkCheckbox(newTaskItemView));

    return newTaskItemView
}


deleteTaskItem(taskItemView){
    this.model.removeItemById(taskItemView.id)
    taskItemView.element.remove()
    this.model.updateTaskListLocalStorage()
}
editTaskItem(taskItemView){
    this.view.toggleAddTaskFormVisibility(true,'add-task-forum-container')
    this.view.fillAddForumWhenEdit(taskItemView)
    this.onEditTaskItem.status = true
    this.onEditTaskItem.element = taskItemView
}
checkCheckbox(taskItemView){
    parent = this.view.getByID('task-container')
    if(taskItemView.checkbox.checked){
        taskItemView.element.classList.add('onCheckbox')
        parent.append(taskItemView.element)
        this.model.updateCheckBox(taskItemView.id, true)
    } else{
        taskItemView.element.classList.remove('onCheckbox')
        parent.prepend(taskItemView.element)
        this.model.updateCheckBox(taskItemView.id, false)
    }
    this.model.updateTaskListLocalStorage();
}

onAddProjectForumSubmit(e){
    e.preventDefault()

    this.createNewProject()
    this.view.resetAndCloseForumByID('add-proj-forum', 'add-proj-container')
}
createNewProject(){
    const name = this.view.getAddProjectForumElementValueByName('proj-name')
    const newProject = this.model.createNewProject(name)
    this.appendAndHookUpNewProjectFromModel(newProject)

    this.model.updateProjectListLocalStorage();
}
appendAndHookUpNewProjectFromModel(newProject){
    const newProjectView = this.view.appendProject(newProject);

        newProjectView.deleteButton.addEventListener("click", 
            () => this.deleteProject(newProjectView));

}

deleteProject(projectView){
    this.updateProjectToInbox(projectView.model.name)
    this.model.removeProjectById(projectView.id)
    this.view.getByID(`checkbox-${projectView.id}`).remove()
    projectView.element.remove()

    this.model.updateProjectListLocalStorage()
    this.model.updateTaskListLocalStorage()
}

updateDeletedProjectToInbox(deletedProjectName){
    let taskListObj = this.model.taskList.itemsById
    Object.keys(taskListObj).forEach(key =>
        {
            if(taskListObj[key].project == deletedProjectName){
                taskListObj[key].project = 'Inbox'
                this.view.updateTaskItemAfterProjectDeleted(taskListObj[key])
            }
        });
}
retrieveRecords(){
    this.retrieveProjects();
    this.retrieveTodoList();
}


retrieveProjects(){
    if(window.localStorage.getItem('projectList') !== null){
        let temp = (JSON.parse(localStorage.getItem('projectList')));
        let projectListObj = temp.projectsById;

        Object.keys(projectListObj).forEach(key =>
            {
                const newProject = this.model.createNewProject(projectListObj[key].name)
                this.appendAndHookUpNewProjectFromModel(newProject)
            }
            );
    }
}

retrieveTaskList(){
    if(window.localStorage.getItem('taskList') !== null){
        let temp = (JSON.parse(localStorage.getItem('taskList')));
        let projectListObj = temp.itemsById;

        Object.keys(taskListObj).forEach(key =>
            {
                const newTaskItem = this.model.createAndAddNewTaskItem(taskListObj[key].name, taskListObj[key].dueDate,taskListObj[key].project)
                const newTaskItemView = this.appendAndHookUpNewTaskItemFromModel(newTaskItem)
            }
            );
            this.retrieveCheckbox();
    }
}

retrieveCheckbox(){
    let taskListObj = this.model.taskList.itemsById
    Object.keys(taskListObj).forEach(key =>
        {
            if(taskListObj[key].checkboxStatus == true){
                let taskItem = this.view.getByID(taskListObj[key].id)
                taskItem.classList.add('onCheckbox')
                this.view.getByID(`checkbox-${taskListObj[key].id}`).checked = true;
                parent = this.view.getByID('task-container')
                parent.append(taskItem)
            }
        })
}
    


}