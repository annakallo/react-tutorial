import React, {Component} from "react";
import {getEntries} from '../services/fakeEntries';
import {getCategories} from '../services/fakeCategories';
import ExpensesTable from './expensesTable';
import Pagination from './common/pagination';
import {paginate} from '../utils/paginate';
import FilterTime from "./common/filterTime";
import FilterCategory from "./common/filterCategories";
import {filterByCategory, filterByTime} from "../utils/filters";
import _ from 'lodash';
import {Route} from "react-router-dom";
import Users from "./admin/users";
import ExpensesEntry from "./ExpensesEntry";

class Entries extends Component {
    state = {
        entries: [],
        categories: [],
        currentPage: 1,
        currentTimeFilter: "Get all entries",
        selectedCategory: "Get all entries",
        pageSize: 4,
        sortColumn: {path: 'id', order: 'asc'}
    };

    componentDidMount() {
        const categories = [{id:'', name: "Get all entries"}, ...getCategories()]
        this.setState({entries: getEntries(), categories});
    }

    totalCalculation = entries => {
        let total = 0;
        // eslint-disable-next-line array-callback-return
        entries.map(entry => total += entry.amount)
        return total
    }

    handleDelete = id => {
        const {entries} = this.state;
        const newEntries = entries.filter(entry => entry.id !== id);
        // eslint-disable-next-line array-callback-return
        // const newEntries = [];
        // entries.map(entry => {
        //     if (entry.id !== id) {
        //         newEntries.push(entry)
        //     }
        // })
        this.setState({entries: newEntries})
    }

    handleLike = entry => {
        const entries = [...this.state.entries];
        const index = entries.indexOf(entry);
        entries[index] = {...entries[index]};
        entries[index].liked = !entries[index].liked;
        this.setState({entries});
    };

    handlePageChange = page => {
        this.setState({currentPage: page});
    };

    handleTimeFilterChange = time => {
        this.setState({currentTimeFilter: time, currentPage: 1});
    };

    handleCategoryFilterChange = category => {
        this.setState({selectedCategory: category, currentPage: 1});
    };

    handleSort = sortColumn => {
        this.setState({sortColumn})
    };

    getPagedData = () => {
        const {
            pageSize,
            currentPage,
            sortColumn,
            entries: allEntries
        } = this.state;

        // filtering
        const entriesFilteredByTime = filterByTime(allEntries, this.state.currentTimeFilter);
        const entriesFilteredByCategory = filterByCategory(allEntries, this.state.selectedCategory);
        let filtered = entriesFilteredByTime.filter(x => entriesFilteredByCategory.includes(x));

        // sorting
        const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order])

        const entries = paginate(sorted, currentPage, pageSize)
        return {totalCount: sorted.length, data: entries}
    };

    render() {
        const {
            pageSize,
            currentPage,
            sortColumn,
        } = this.state;

        if (this.state.entries.length === 0) return <h5 className="title is-5 center">There are no entries!</h5>
        const {totalCount, data: entries} = this.getPagedData();
        return (
            <div className="container">
                <FilterTime onFilterChange={this.handleTimeFilterChange}
                            currentTimeFilter={this.state.currentTimeFilter}
                />
                <FilterCategory
                    items={this.state.categories}
                    selectedItem={this.state.selectedCategory}
                    onItemSelect={this.handleCategoryFilterChange}
                />
                <h1 className="title center">Expenses</h1>
                <h5 className="title is-5 center">There are {totalCount} entries. Total amount of expenses
                    is {this.totalCalculation(entries)}€. </h5>
                <ExpensesTable
                    entries={entries}
                    sortColumn={sortColumn}
                    onDelete={this.handleDelete}
                    onLike={this.handleLike}
                    onSort={this.handleSort}
                />
                {/*<Route path="/expenses/id" component={ExpensesEntry}/>*/}
                <Pagination itemsCount={totalCount}
                            pageSize={pageSize}
                            currentPage={currentPage}
                            onPageChange={this.handlePageChange}
                />
            </div>
        );
    }
}

export default Entries;