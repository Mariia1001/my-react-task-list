import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Menu } from './componentes/Menu';




 //<div>
      <Router>
      <Menu />
        <Switch>
          <Route exact path="/Home" component={Home} />
          <Route path="/tareas" component={Tareas} />
          <Route path="/sobre-nosotros" component={SobreNosotros} />
        </Switch>
        </Router>
        </div>
