import React, {Component} from "react";
import Like from "./common/like";
import Table from "./common/table";
import Link from "react-router-dom/Link";


class ExpensesTable extends Component {
    columns = [
        {path: 'id', label: 'Id'},
        {path: 'title', label: 'Title', content: entry => <Link to={`/expenses/${entry.id}`}>{entry.title}</Link>},
        {path: 'amount', label: 'Amount'},
        {path: 'category.name', label: 'Category', content: entry => (
            <span className={this.getCategoryClasses(this.props.entries, entry.id)}>{entry.category.name}</span>)},

        // {path: 'category.name', label: 'Category'},

        {path: 'shop', label: 'Shop'},
        {path: 'date', label: 'Date'},
        {key:'like', content: entry => <Like liked={entry.liked} onClick={() => this.props.onLike(entry)}/>},
        {key:'delete', content: entry => (
            <button onClick={() => this.props.onDelete(entry.id)}
                    className="button is-danger is-small">delete
            </button>
            )
        },
    ];

    getCategoryClasses = (entries, id) => {
        let classes = "tag is-";
        // eslint-disable-next-line array-callback-return
        entries.map(entry => {
            if (entry.id === id) {
                if (entry.category.id === 1) {
                    classes += "primary";
                }
                if (entry.category.id === 2) {
                    classes += "dark";
                }
                if (entry.category.id === 3) {
                    classes += "warning";
                }
            }
        })
        return classes;
    }

    render() {
        const {entries, onSort, sortColumn} = this.props;
        return (
            <Table
                columns={this.columns}
                data={entries}
                sortColumn={sortColumn}
                onSort={onSort}
            />
        );
    }
}


export default ExpensesTable;