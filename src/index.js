import './css/style.css'
import MainController from './sections/maincontroller'
import MainView from './sections/view/mainView'
import MainModel from './sections/model/mainModel'

const model = new MainModel()
const view = new MainView()
const controller = new MainController(model,view)