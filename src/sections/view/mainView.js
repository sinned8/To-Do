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

    resetAndCloseFormByID(formID,formContainerID){
        this.getByID(formID).reset()
        this.toggleAddTaskFormVisibility(false,formContainerID)
    }
}