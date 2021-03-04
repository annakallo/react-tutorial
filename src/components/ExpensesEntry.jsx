import React from "react";


// class ExpensesEntry extends Component {
//     handleSave = () => {
//         // Navigate to /products
//         this.props.history.push("/expenses"); // with this it saves it in the history so you can go back
//         // this.props.history.replace("/products"); // with this you cannot go back, used in login pages
//     };
//
//     render() {
//         return (
//             <div>
//                 <h1 className="title"> ExpensesEntry - {this.props.match.params.id}</h1>
//                 <button onClick={this.handleSave}>Save</button>
//             </div>
//         );
//     }
// }

const ExpensesEntry =({match, history}) => {
    return (
        <div>
            <h1 className="title"> ExpensesEntry - {match.params.id}</h1>
            <button onClick={ () => history.push("/expenses")} className="button is-primary">Save</button>
        </div>
    );
}

export default ExpensesEntry;

// {this.props.match.params.id}