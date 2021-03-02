import React, {Component} from "react";
import "./App.css";
import NavBar from "./components/navbar";
import Counters from './components/counters';
import Expenses from './components/expenses';

class App extends Component {
    state = {
        counters: [
            {id:1, value: 0 },
            {id:2, value: 1 },
            {id:3, value: 0 },
            {id:4, value: 0 }
        ]
    };

    constructor() {
        super();
        console.log('App-Constructor');
        // this.state = this.props.something;
    }

    componentDidMount() {
        // Ajax Call
        console.log('App - Mounted');
    }

    componentWillMount () {
        const script = document.createElement("script");

        script.src = "https://use.fontawesome.com/7fd7fceaab.js";
        script.async = true;

        document.body.appendChild(script);
    }

    handleDelete = (counterId) => {
        console.log('Event handler called.', counterId);
        const counters = this.state.counters.filter(counter => (counter.id !== counterId));
        this.setState({counters});
    };

    handleReset = () => {
        const counters = this.state.counters.map(counter => {
            counter.value = 0;
            return counter;
        });
        this.setState({counters});
    };

    handleIncrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value++;
        this.setState({counters});
    }

    handleDecrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value--;
        this.setState({counters});
    }
    render() {
        console.log('App-Rendered');
        return (
            <React.Fragment>
                <NavBar totalCounters={this.state.counters.filter(c => c.value >0).length}/>
                <main>
                    {/*<Counters counters={this.state.counters}*/}
                    {/*          onReset={this.handleReset}*/}
                    {/*          onIncrement={this.handleIncrement}*/}
                    {/*          onDecrement={this.handleDecrement}*/}
                    {/*          onDelete={this.handleDelete}*/}
                    {/*/>*/}
                    <Expenses/>
                </main>
            </React.Fragment>
        );
    }
}


// function App() {
//
//   return (
//       <React.Fragment>
//           <NavBar/>
//           <main>
//             <Counters/>
//           </main>
//       </React.Fragment>
//   );
// }

export default App;
