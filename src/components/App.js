import Popular from './Popular';
import Home from './Home';
import Battle from './Battle';
import Results from './Results';
var React = require('react');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;

var Switch = ReactRouter.Switch;

var Nav = require('./Nav');

//var Home = require('./Home')

class App extends React.Component{




    render(){

        return (

            <Router>


                    <div className="container">

                    <Nav />
                    <Switch>

                    <Route exact path='/' component={Home} />
                    <Route path = '/popular' component = {Popular} />
                    <Route path = '/battle/results' component = {Results} />
                    <Route exact path = '/battle' component = {Battle} />

                        <Route render={function(){


                                return <p>Not Found</p>
                        }} />
                    </Switch>
                    

                    </div>


            </Router>
        )
    }
}


export default App;

