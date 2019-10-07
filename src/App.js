import React from 'react';
import sally from './sally.jpg';
import './App.css';
import Info from "./Info";

function App() {
    const title = (<h1> Sally Student resume </h1>);
    const desc = (<p>I'm an aspiring full stack web developer. I love cats, coding, and crocheting.</p>);
    const data = [
        {
            header: 'Contact Info', arr:
                ['Name: Sally', 'Email: abcdefg12@gmail.com', 'Phone Number: 123-456-7891']
        },
        {header: 'Education', arr: ['Harvard University']},
        {
            header: 'Employment History', arr: ['Company name: ABC',
            'Job title: Management',
            'Date of employment: May 2017 - May 2019' ,
            'Description: Management team work and projects overall',
                'Company name: DFG',
                'Job title: Teacher',
                'Date of employment: April 2015 - April 2017',
                'Description: Teach elementary student in the school']
        }
    ];

    return (
        <div className="App">
            <header className="App-header">
                {title}
                {desc}
                <img src={sally} height={'250px'}/>
                {data.map(item => (<Info header={item.header} arr={item.arr}/>))}
            </header>
        </div>
    );
}

export default App;
