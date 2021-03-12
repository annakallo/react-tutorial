import React, {Component} from "react";
import Like from "./common/like";
import Table from "./common/table";
import Link from "react-router-dom/Link";


class ExpensesTable extends Component {
    columns = [
        {path: 'id', label: 'Id'},
        {path: 'title', label: 'Title', content: entry => <Link to={`/expenses/${entry.id}`}>{entry.title}</Link>},
        {path: 'amount', label: 'Amount'},
        {path: 'category', label: 'Category', content: entry => (
            <span className={this.getCategoryClasses(this.props.entries, entry.id)}>{this.getCategoryName(entry.category)}</span>)},

        // {path: 'category.name', label: 'Category'},

        {path: 'shop', label: 'Shop'},
        {path: 'updated_at', label: 'Date', content: entry => (<span>{this.getTimeFormat(entry.updated_at)}</span>)},
        {key:'like', content: entry => <Like liked={entry.liked} onClick={() => this.props.onLike(entry)}/>},
        {key:'delete', content: entry => (
            <button onClick={() => this.props.onDelete(entry)}
                    className="button is-danger is-small">delete
            </button>
            )
        },
    ];

    getTimeFormat = time => {
        return new Date(time).toDateString()
    };

    getCategoryName = id => {
        const {categories} = this.props;
        const category = categories.filter(cat => cat.id === id)
        let catName = category[0].category_name;
        if (category[0].id === 0) catName = '';
        return catName
    }

    getCategoryClasses = (entries, id) => {
        let classes = "";
        // eslint-disable-next-line array-callback-return
        entries.map(entry => {
            if (entry.id === id) {
                if (entry.category === 1) {
                    classes += "tag is-primary";
                }
                if (entry.category === 2) {
                    classes += "tag is-dark";
                }
                if (entry.category === 3) {
                    classes += "tag is-warning";
                }
            }
        })
        return classes;
    };

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