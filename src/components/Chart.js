import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

class Chart extends Component{
    constructor(props){
        super(props);
        this.state = {
            chartData:props.chartData
        }
    }

   
    render(){
        return(
            <div className='chart'>
                <Bar 
                    data={this.state.chartData}
                    options={{
                        title:{
                            display:true,
                            text:'Evaluatie (0/5): Alle Studenten',
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
                <Line 
                    data={this.state.chartData}
                    options={{
                       
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

export default Chart;