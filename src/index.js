import './css/style.css'
import MainModel from './sections/model/mainModel'
import MainView from './sections/view/mainView'
import MainController from './sections/maincontroller'

const model = new MainModel()
const view = new MainView()
const controller = new MainController(model,view)