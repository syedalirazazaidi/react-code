import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
//  ************************************************************************using .MAP**************************
//                                       ASSIGNMENT   -    1 
/*const athleteIncomeStrings = athleteData.map((value,index)=>
<li key={index.toString()}>
{ value.athlete}  in {value.team}  earned {value.income} euros
</li>);

ReactDOM.render(<ol>{athleteIncomeStrings}</ol>,document.getElementById("root"));
console.log(athleteIncomeStrings);
*/
///                                        ASSIGNMENRT   - 2

/*const results = athleteData.filter((value)=>
value.income.toString().length>7);
console.log(results);
*/
//                                          ASSIGNMENT ----- 3


const popular = athleteData.filter(value =>
value.income>10000000).map(value=>

`${value.athlete} is a greastest player`);



console.log(popular);