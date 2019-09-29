import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'
// import Radium from "radium";
import  {SlideDown} from "react-slidedown";
import 'react-slidedown/lib/slidedown.css';

// class App extends React.Component{
//   constructor(){
//     super();
//     this.state = {valid : true};
//     this.changeValid = this.changeValid.bind(this);
//   }
//   changeValid(){
//     this.setState({valid:!this.state.valid})
//   }
//   render() {
//     const bio = (this.state.valid)?(<h1>Hello</h1>):null;
//     return(
//
//         (this.state.valid)?
//         <div>
//           <h1>{this.props.name}</h1>
//           <button onClick={this.changeValid}>Read More about`</button>
//         </div>
//             :
//             <div>
//               <h1>Hello</h1>
//               <p>This is more content</p>
//               <button onClick={this.changeValid}>Read Less</button>
//             </div>
//
//
//     );
//   }
//
// }


class App extends Component {

    state = {
        persons: [
            {id : "dfsdf","Name": "Sreeraj", "Age": 22 },
            {id: "sdfsdf","Name": "Sree", "Age": 22 },
        ],
        show : false
    };
    // constructor(){
    //     super();
    //     this.changeText = this.changeText.bind(this);
    //     this.change = this.change.bind(this);
    // }

    change = ()=>{
        console.log('clicked');

        this.setState({
            show : !this.state.show
        })
    }
    DeleteHandler = (index)=>{
        const persons = [...this.state.persons];
        persons.splice(index , 1);
        this.setState({persons : persons})
    }
    changeText = (event,id)=>{
        // alert('Event changed');
        console.log('hey there')
        let index = this.state.persons.findIndex(p=>{
            return p.id===id;
        });
        let prod = {...this.state.persons[index]};
        prod.Name = event.target.value;
        this.state.persons[index] = prod;
        this.setState({
            persons: this.state.persons
        })
    }
    render() {

        const style = {
            color: 'black',
            width:'150px',
            height:'30px',
            border : '2px solid blue',
            borderRadius : '20px',
            ':hover' : {
                border : '2px solid green',
                boxShadow : '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'

            }
        }

        let person = null;
        if(this.state.show){
            person = (<div className="person">
                {/*<Person*/}
                {/*    name={this.state.persons[0].Name}*/}
                {/*    age={this.state.persons[0].Age}*/}
                {/*    change={this.changeText}*/}
                {/*    // click = {this.change}*/}
                {/*/>*/}
                {this.state.persons.map((person,index)=>
                    <Person
                        name={person.Name}
                        age={person.Age}
                        delete={()=>this.DeleteHandler(index)}
                        key={person.id}
                        change={(event)=>{this.changeText(event,person.id)}}
                    />
                )}
            </div>)
        }

        return (
            <div className="App">
                {/*{this.state.persons.map((person) =>*/}
                <h1>Welcome to React</h1>
                <button onClick={this.change} style={style}>Show more!!</button>
                <SlideDown className={'person'}>
                    {person}
                </SlideDown>
            </div>
       )
    }
}

export default App
