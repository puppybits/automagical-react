import ReactDOM from 'react-dom'
import {Router, browserHistory} from 'react-router'
import {createHistory} from 'history'
import routes from './routes'

ReactDOM.render(
  (<Router history={browserHistory}>{routes}</Router>),
  document.getElementById('app'))
