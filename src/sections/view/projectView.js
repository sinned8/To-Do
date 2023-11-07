export default class ProjectView{

    constructor(element, projectModel){
        this.element = element
        this.model = projectModel
        this.id = projectModel.id
        this.name = projectModel.name
    }
    get projectName(){
        return this.element.querySelector('proj-info-name')
    }
    get id(){
        return this.element.querySelector('id')
    }
    get deleteBttn(){
        return this.element.querySelector('proj-trash-icon')
    }
    get editBttn(){
        return this.element.querySelector('proj-edit-icon')
    }
    set id(value){
        this.element.setAttribute('id',value)
    }
    set name(value){
        this.projectName.textContent = value
    }

}