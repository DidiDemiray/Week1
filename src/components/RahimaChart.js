import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';


class RahimaChart extends Component{
    constructor(props){
        super(props);
        this.state = {
            chartData:{
                labels: ['SCRUM','W1D1-1','W1D2-1','W1D2-2',' W1D2-3','W1D2-4','W1D2-5','W1D3-1',
                'W1D3-2','W1D3-4','W1D3-5',' W1D3 - Project - Guess-the-number','W1D4-1','W1D4 - Project - Kleurentoggle',
                'W1D5 - Project - Galgje','W2D1-1','W2D1-2','W2D2-1','W2D2-2','W2D2-3','W2D3-1','W2D3-2',
                'W2D3-3','W2D4-1','W2D4-2','W2D4-3','W2D5 - Project - Filmzoeker','W3D1-1','W3D1-2','W3D1-3',
                'W3D1-4','W3D2-1','W3D2-2','W3D2-3','W3D3-1','W3D3-2','W3D3-3','W3D3-4','W3D4-1','W3D4-2','W3D5 - Project - Todo-List',
                'W4D2-1','W4D2-2','W4D2-3','W4D2-4','W4D3-1','W4D3-2','W4D3-3','W4D3-4','W4D3-5','W4D3 - Project - Next-Level CSS',
                'W5D4-1','W5D5 - Project - Lil_Playlist','W6D1-1','W6D2-1'],
                datasets: [{
                    label:'LEUK',
                    data:[
                        4,4,4,2,3,2,3,1,4,2,2,1,3,4,3,2,1,1,1,2,1,4,2,4,4,3,1,1,2,
                        3,4,2,4,1,1,4,4,2,2,3,4,4,3,3,1,1,1,1,2,2,2,3,3,4,4,1
                        ],
                    fill: false,
                    backgroundColor:'black',
                    borderColor:'black'
                },
                {
                    label:'MOEILIJK',
                    data:[
                       2,3,2,1,1,1,1,1,2,1,2,3,4,2,3,2,3,1,1,4,1,1,4,4,4,2,3,1,
                       1,2,2,3,1,2,3,4,1,2,1,3,2,2,4,3,4,2,1,2,2,3,1,3,2,4,1,4
                        ],
                    fill: false,
                    backgroundColor:'light-grey',
                    borderColor:'light-grey'
    
                }]
            }
            
        }
    }

    
   
    render(){
        return(
            
            <div className='rahimachart'>
              
                <Bar 
                    data={this.state.chartData}
                    options={{
                        
                        title:{
                            display:true,
                            text:'Evaluatie (0/5): Rahima',
                            fontSize: 25
                        },
                        legend:{
                            display:true,
                            position: 'right'
                        },
                        scales: {
                            yAxes:[{
                                ticks:{
                                    suggestedMin: 0,
                                    suggestedMax:5
                                
                                }
                            }]
                        }
                    }}
                />
            </div>
        )
    }
}

export default RahimaChart;