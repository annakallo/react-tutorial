import React, {Component} from "react";
import {getEntries} from '../services/fakeEntries';


class Entries extends Component {
    state ={
        entries: getEntries()
    };

    renderBody() {
        const {entries} = this.state;
        if (entries.length === 0) return <p>There are no entries!</p>
        return (
            <tbody>
                {entries.map(entry =>
                    <tr key={entry.id}>
                        <th>{entry.id}</th>
                        <td>{entry.title}</td>
                        <td>{entry.amount}</td>
                        <td>{entry.category}</td>
                        <td>{entry.shop}</td>
                        <td>{entry.date}</td>
                    </tr>)}
            </tbody>
        );
    }

    render() {
        return (
            <div className="container">
                <table className="table is-fullwidth">
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Amount</th>
                        <th>Category</th>
                        <th>Shop</th>
                        <th>Date</th>
                    </tr>
                    </thead>
                    {this.renderBody()}
                </table>
            </div>

        );

    }
}

export default Entries;