import React, {Component} from "react";
import {Route, Switch, Redirect} from "react-router-dom";
import NavBar from "./components/navbar";
import Expenses from './components/expenses';
import Incomes from "./components/incomes";
import Overview from "./components/overview";
import NotFound from "./components/notFound";
import ExpensesEntry from "./components/ExpensesEntry";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import EntryForm from "./components/entryForm";
import "./App.css";
import Home from "./components/home";

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

    // handleIncrement = counter => {
    //     const counters = [...this.state.counters];
    //     const index = counters.indexOf(counter);
    //     counters[index] = {...counter};
    //     counters[index].value++;
    //     this.setState({counters});
    // }
    //
    // handleDecrement = counter => {
    //     const counters = [...this.state.counters];
    //     const index = counters.indexOf(counter);
    //     counters[index] = {...counter};
    //     counters[index].value--;
    //     this.setState({counters});
    // }
    render() {
        console.log('App-Rendered');
        return (
            <React.Fragment>
                <NavBar totalCounters={this.state.counters.filter(c => c.value >0).length}/>
                <main>
                    <Switch>
                        <Route path="/incomes" component={Incomes}/>
                        <Route path="/expenses/:id" component={EntryForm}/>
                        <Route path="/expenses" component={Expenses}/>
                        <Route path="/overview" component={Overview}/>
                        <Route path="/login" component={LoginForm}/>
                        <Route path="/register" component={RegisterForm}/>
                        <Route path="/home" component={Home}/>
                        <Redirect from="/" exact to="/expenses"/>
                        <Route path="/not-found" component={NotFound}/>
                        <Redirect to="/not-found"/>}
                    </Switch>
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
