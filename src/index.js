import './css/style.css'
import MainModel from './sections/model/mainModel'
import MainView from './sections/view/mainView'
import MainController from './sections/maincontroller'
import PencilOutline from './assests/imgs/pencil-outline.svg'

const model = new MainModel()
const view = new MainView()
const controller = new MainController(model,view)