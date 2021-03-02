import React, {Component} from "react";
import {getEntries} from '../services/fakeEntries';
import {getCategories} from '../services/fakeCategories';
import Like from './common/like';
import Pagination from './common/pagination';
import {paginate} from '../utils/paginate';
import FilterTime from "./common/filterTime";
import FilterCategory from "./common/filterCategories";
import {filterByTime, filterByCategory} from "../utils/filters";


class Entries extends Component {
    state ={
        entries: getEntries(),
        categories: getCategories(),
        currentPage: 1,
        currentTimeFilter: "Get all entries",
        currentCategoryFilter: "Get all entries",
        pageSize: 4,
        currentDateTime: new Date()
    };

    totalCalculation() {
        const {entries} = this.state;
        let total = 0;
        // eslint-disable-next-line array-callback-return
        entries.map(entry => total += entry.amount)
        return total
    }

    renderResume() {
        const {entries} = this.state;
        if (entries.length === 0) return <h5 className="title is-5 center">There are no entries!</h5>
        return <h5 className="title is-5 center">There are {entries.length} entries. Total amount of expenses is { this.totalCalculation()}€. </h5>
    }

    handleDelete(id) {
        const {entries} = this.state;
        const newEntries = entries.filter(entry => entry.id !== id);
        // eslint-disable-next-line array-callback-return
        // entries.map(entry => {
        //     if (entry.id !== id) {
        //         newEntries.push(entry)
        //     }
        // })
        this.setState({entries: newEntries})
    }

    getCategoryClasses(id) {
        const {entries} = this.state;
        let classes = "tag is-";
        // eslint-disable-next-line array-callback-return
        entries.map(entry => {
            if (entry.id === id) {
                if (entry.category === "groceries") {
                    classes += "primary";
                }
                if (entry.category === "restaurant") {
                    classes += "dark";
                }
                if (entry.category === "gift") {
                    classes += "warning";
                }
            }
        })
        return classes;
    }

    handleLike = entry  => {
        const entries = [...this.state.entries];
        const index = entries.indexOf(entry);
        entries[index] ={...entries[index]};
        entries[index].liked = !entries[index].liked;
        this.setState({entries});
    };

    handlePageChange = page => {
        this.setState({currentPage: page});
    };

    handleTimeFilterChange = filter => {
        this.setState({currentTimeFilter: filter});
    };

    handleCategoryFilterChange = filter => {
        this.setState({currentCategoryFilter: filter});
    };

    render() {
        const {pageSize,currentPage, entries: allEntries} = this.state;
        if (this.state.entries.length === 0) return null
        const entriesFilteredByTime = filterByTime(allEntries, this.state.currentTimeFilter);
        const entriesFilteredByCategory = filterByCategory(allEntries, this.state.currentCategoryFilter);
        let entriesFiltered = entriesFilteredByTime.filter(x => entriesFilteredByCategory.includes(x));
        const entries = paginate(entriesFiltered, currentPage, pageSize)
        return (
            <div className="container">
                <FilterTime onFilterChange={this.handleTimeFilterChange}
                            currentTimeFilter={this.state.currentTimeFilter}/>
                <FilterCategory
                            onFilterChange={this.handleCategoryFilterChange}
                            currentCategory={this.state.currentCategoryFilter}
                            allCategories={this.state.categories}/>
                <h1 className="title center">Expenses</h1>
                {this.renderResume()}
                <table className="table is-fullwidth">
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Amount</th>
                        <th>Category</th>
                        <th>Shop</th>
                        <th>Date</th>
                        <th/>
                        <th/>
                    </tr>
                    </thead>
                    <tbody>
                    {entries.map(entry =>
                        <tr key={entry.id}>
                            <th>{entry.id}</th>
                            <td>{entry.title}</td>
                            <td>{entry.amount}</td>
                            <td><span className={this.getCategoryClasses(entry.id)}>{entry.category}</span></td>
                            <td>{entry.shop}</td>
                            <td>{entry.date}</td>
                            <td><Like liked={entry.liked} onClick={() => this.handleLike(entry)}/></td>
                            <td><button onClick={() => this.handleDelete(entry.id)} className="button is-danger is-small">delete</button></td>
                        </tr>)}
                    </tbody>
                </table>
                <Pagination itemsCount={entriesFiltered.length}
                            pageSize={pageSize}
                            currentPage={currentPage}
                            onPageChange={this.handlePageChange}
                />
            </div>
        );

    }
}

export default Entries;