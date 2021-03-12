import React, {Component} from "react";
import {getEntries} from '../services/entryService';
import {getCategories} from '../services/categoryService';
import ExpensesTable from './expensesTable';
import Pagination from './common/pagination';
import {paginate} from '../utils/paginate';
import FilterTime from "./common/filterTime";
import FilterCategory from "./common/filterCategories";
import {filterByCategory, filterByTime} from "../utils/filters";
import {searchKeyword} from "../utils/search";
import _ from 'lodash';
import Link from "react-router-dom/Link";
import SearchBox from "./searchBox";


class Entries extends Component {
    state = {
        entries: [],
        categories: [],
        currentPage: 1,
        currentTimeFilter: "Get all entries",
        selectedCategory: 0,
        searchQuery: '',
        pageSize: 4,
        sortColumn: {path: 'id', order: 'asc'}
    };

    async componentDidMount() {
        const { data } = await getCategories();
        const categories = [{id:0 , category_name: "Get all entries"}, ...data];

        const { data: entries } = await getEntries();
        this.setState({entries, categories});
        // this.setState({entries});
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
        this.setState({currentTimeFilter: time, searchQuery: "", currentPage: 1});
    };

    handleCategoryFilterChange = category => {
        this.setState({selectedCategory: category, searchQuery: "", currentPage: 1});
    };

    handleSort = sortColumn => {
        this.setState({sortColumn})
    };

    handleSearch = query => {
        this.setState({searchQuery: query, currentPage: 1})
    };

    getPagedData = () => {
        const {
            pageSize,
            currentPage,
            sortColumn,
            searchQuery,
            entries: allEntries
        } = this.state;

        // filtering
        const entriesFilteredByTime = filterByTime(allEntries, this.state.currentTimeFilter);
        const entriesFilteredByCategory = filterByCategory(allEntries, this.state.selectedCategory);
        let filtered = entriesFilteredByTime.filter(x => entriesFilteredByCategory.includes(x));

        // searching
        const entriesSearched = searchKeyword(allEntries, searchQuery);

        // sorting
        let sorted;
        if (!searchQuery) {
            sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
        } else {
            sorted = _.orderBy(entriesSearched, [sortColumn.path], [sortColumn.order]);
        }

        const entries = paginate(sorted, currentPage, pageSize)
        return {totalCount: sorted.length, entries, total: sorted}
    };

    render() {
        const {
            pageSize,
            currentPage,
            sortColumn,
            searchQuery,
            categories,
        } = this.state;

        if (this.state.entries.length === 0) return <h5 className="title is-5 center">There are no entries!</h5>
        const {totalCount, entries, total} = this.getPagedData();
        // const {history} = this.props;
        return (

            <div className="container">
                <div>
                    <Link to="/expenses/new" className="button is-primary">Add new entry</Link>
                    {/*<button  onClick={() => history.push("/expenses/new")} className="button is-primary">Add new entry</button>*/}
                    <FilterTime onFilterChange={this.handleTimeFilterChange}
                                currentTimeFilter={this.state.currentTimeFilter}
                    />
                    <FilterCategory
                        items={this.state.categories}
                        selectedItem={this.state.selectedCategory}
                        onItemSelect={this.handleCategoryFilterChange}
                    />
                </div>
                <SearchBox
                    value={searchQuery}
                    onChange={this.handleSearch}
                />
                <h1 className="title center">Expenses</h1>
                <h5 className="title is-5 center">There are {totalCount} entries. Total amount of expenses
                    is {this.totalCalculation(total)}€. </h5>
                <ExpensesTable
                    entries={entries}
                    categories={categories}
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