

export default class ProjectView{

    constructor(element, projectModel){
        this.element = element
        this.model = projectModel
        this.id = projectModel.id
        this.name = projectModel.name
        
    }
    
    get projectName(){
        return this.element.querySelector('.project') 
        
    }
    get id(){
        return this.element.getAttribute('id')
        
    }
    get deleteBttn(){
        return this.element.querySelector('.delete-project-bttn')
    }
    set id(value){
        this.element.setAttribute("id", value)
        
    }
   
    set name(value){
        this.projectName.textContent = value
    }
}