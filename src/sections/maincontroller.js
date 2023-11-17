export default class MainController{

constructor(model,view){
    this.model = model;
    this.view = view;
    this.onEditTaskItem = {status:'false', element: ""};

    // view.getByID("add-project-bttn").addEventListener('click', () => this.toggleAddTaskForumVisibility(true,'add-proj-container'));
    view.getByID('add-task-forum').addEventListener('submit', (e) => this.onAddTaskForumSubmit(e))
    view.getByID('add-project-bttn').addEventListener('click', () => view.toggleAddTaskForumVisibility(true,'add-proj-container'))
    view.getByID('close-add-proj-forum-bttn').addEventListener('click',() => view.resetAndCloseForumByID('add-proj-forum','add-proj-container'))
    view.getByID('task-add').addEventListener('click', () => view.toggleAddTaskForumVisibility(true,'add-task-forum-container'))
    view.getByID('close-add-task-forum-bttn').addEventListener('click', () => view.resetAndCloseForumByID('add-task-forum','add-task-forum-container'))
    view.getByID('add-proj-forum').addEventListener('submit', (e) => this.onAddProjectForumSubmit(e))
    view.getByID('inbox').addEventListener('click', () => this.filterByProject('Inbox'))
    
    window.addEventListener('load',() => this.retrieveRecords());
}


onAddTaskForumSubmit(e){
    e.preventDefault()
    this.onEditTaskItem.status == true ? this.updateTaskItem() : this.createNewTaskItem()
    this.view.resetAndCloseForumByID('add-task-forum','add-task-forum-container')
}
createNewTaskItem(){
    const newTaskItem = this.createNewTaskFromForumInputs();
    this.appendAndHookUpNewTaskItemFromModel(newTaskItem)
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

    newTaskItemView.deleteBttn.addEventListener('click',() =>
    this.deleteTaskItem(newTaskItemView));

    newTaskItemView.editBttn.addEventListener('click',() =>
    this.editTaskItem(newTaskItemView));

    // newTaskItemView.deleteButton.addEventListener('change',() =>
    // this.checkCheckbox(newTaskItemView));

    return newTaskItemView
}


deleteTaskItem(taskItemView){
    this.model.removeItemById(taskItemView.id)
    taskItemView.element.remove()
    this.model.updateTaskListLocalStorage()
}
editTaskItem(taskItemView){
    this.view.toggleAddTaskForumVisibility(true,'add-task-forum-container')
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
    // failling after this.createNewProject() is called

    this.view.resetAndCloseForumByID('add-proj-forum','add-proj-container')
    

}
createNewProject(){
    const name = this.view.getAddProjectForumElementValueByName('proj-name')
    const newProject = this.model.createNewProject(name)
    

    this.appendAndHookUpNewProjectFromModel(newProject)
    

    this.model.updateProjectListLocalStorage();
    
}
appendAndHookUpNewProjectFromModel(newProject){
    const newProjectView = this.view.appendProject(newProject);

        newProjectView.deleteBttn.addEventListener("click", 
            () => this.deleteProject(newProjectView));

        newProjectView.projectName.addEventListener('click',
        () => this.filterByProject(newProjectView.projectName.textContent))


}

deleteProject(projectView){
    this.updateDeletedProjectToInbox(projectView.model.name)
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
    this.retrieveTaskList();
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
        let taskListObj = temp.itemsById;

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
    
filterByProject(projectName){
    let taskListObj = this.model.taskList.itemsById

    Object.keys(taskListObj).forEach(key =>
        {
            const statusValue = taskListObj[key].project == projectName ? true : false
            this.view.toggleFilterVisiblity(statusValue,key)
        });
        this.view.getByID('proj-info-name').textContent = projectName
}


}