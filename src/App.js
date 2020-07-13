import React, {Component} from 'react';
import './App.css';
import Chart from './components/Chart'; 
import EvelynChart from './components/EvelynChart';
import ArankaChart from './components/ArankaChart';
import FlorisChart from './components/FlorisChart';
import HectorChart from './components/HectorChart';
import MartinaChart from './components/MartinaChart';
import MauritsChart from './components/MauritsChart';
import RahimaChart from './components/RahimaChart';
import SandraChart from './components/SandraChart';
import WietskeChart from './components/WietskeChart';
import StormChart from './components/StormChart';
import Nav from './components/Nav';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


class App extends Component {
  constructor(){
    super();
    this.state ={
      chartData:{}
    }
  }

  componentWillMount(){
    this.getChartData();
  }

  getChartData(){
    //Data ophalen, normaal uit API
    this.setState({
      chartData:{
        labels: ['SCRUM','W1D1-1','W1D2-1','W1D2-2',' W1D2-3','W1D2-4','W1D2-5','W1D3-1',
                  'W1D3-2','W1D3-4','W1D3-5',' W1D3 - Project - Guess-the-number','W1D4-1','W1D4 - Project - Kleurentoggle',
                  'W1D5 - Project - Galgje','W2D1-1','W2D1-2','W2D2-1','W2D2-2','W2D2-3','W2D3-1','W2D3-2',
                  'W2D3-3','W2D4-1','W2D4-2','W2D4-3','W2D5 - Project - Filmzoeker','W3D1-1','W3D1-2','W3D1-3',
                  'W3D1-4','W3D2-1','W3D2-2','W3D2-3','W3D3-1','W3D3-2','W3D3-3','W3D3-4','W3D4-1','W3D4-2','W3D5 - Project - Todo-List',
                  'W4D2-1','W4D2-2','W4D2-3','W4D2-4','W4D3-1','W4D3-2','W4D3-3','W4D3-4','W4D3-5','W4D3 - Project - Next-Level CSS',
                  'W5D4-1','W5D5 - Project - Lil_Playlist','W6D1-1','W6D2-1'],
        datasets: [
            {
                label:'LEUK',
                data:[
                  2, 3, 3, 2.7, 2.5, 2.4, 3, 2.9, 2.5, 2, 2.6, 2.7, 2.8, 2.9, 3.1, 2.8, 2.4, 2.6, 2.5, 2.5, 2, 
                  2.6, 2.3, 3.4, 3, 2.5, 2.1, 2.3, 3.1, 2.9, 2.9, 3, 2.9, 2.6, 3, 2.4, 3.1, 2.4, 3.4, 2.7, 3.1,
                  2.7, 2.8, 3, 3, 2.5, 3.1, 2.7, 2.6, 2.5, 2.8, 2.8, 1.9, 2.6, 2.5, 2.8
                    ],
                fill: false,
                backgroundColor:'blue',
                borderColor:'blue'
            },
            {
                label:'MOEILIJK',
                data:[
                  1.9, 3.1, 2, 1.6, 1.9, 2.6, 2.7, 1.9, 2.2, 2.4, 2.7, 2.5, 2.9, 2.5, 3, 2.2, 3.3, 2.9, 2.3,
                  2.8, 2.4, 2.4, 2.8, 1.9, 3.1, 2.6, 2.9, 2.4, 2.2, 2.2, 2.2, 1.8, 2.1, 2.5, 2.4, 2.9, 2.3, 2.9,
                  2.6, 2.2, 2.2, 2.1, 2.3, 2.4, 2.4, 2.2, 1.9, 2.1, 2.1, 2.5, 2.7, 1.9, 2.7, 2.3, 1.9, 3
                    ],
                fill: false,
                backgroundColor:'yellow',
                borderColor:'yellow'

            }
        ]
    }
    });
  }

  render (){
    return(
      <div className="App">
      <header className="App-header">
        <p>
          STUDENT DASHBOARD
        </p>
      
      </header>
      
      <body className='App-body'>
        <Router>
            <Nav />
          <Switch>
            <Route path='/Evelyn' component={EvelynChart}/>
            <Route path='/Aranka' component={ArankaChart}/>
            <Route path='/Floris' component={FlorisChart}/>
            <Route path='/Hector' component={HectorChart}/>
            <Route path='/Martina' component={MartinaChart}/>
            <Route path='/Maurits' component={MauritsChart}/>
            <Route path='/Rahima' component={RahimaChart}/>
            <Route path='/Sandra' component={SandraChart}/>
            <Route path='/Wietske' component={WietskeChart}/>
            <Route path='/Storm' component={StormChart}/>
          </Switch>
        </Router>

        <Chart chartData={this.state.chartData} />
      
      </body>

      <footer className='App-footer'>
        <p><strong>Didi Demiray</strong></p>
      </footer>
    </div>
    )
    
  };
}

export default App;
