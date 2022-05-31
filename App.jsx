import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import About from "./pages/About";
import Works from "./pages/Works";

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/works' component={Works} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;