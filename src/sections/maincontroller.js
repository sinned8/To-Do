export default class MainController{

constructor(model,view){
    this.model = model;
    this.view = view;
    this.ondEditTodoItem = {status:'false', element: ""};

    view.getByID("add-project-bttn").addEventListener('click', () => this.toggleAddTaskFormVisibility(true, 'add-proj-container'));
    view.getByID("close-add-proj-forum-bttn").addEventListener('click', () => this.resetAndCloseForumByID('add-proj-forum', 'add-proj-container'));


}





}