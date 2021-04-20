import React, {Component} from "react";
import {getCategories, deleteCategory} from "../services/categoryService";
import {deleteEntry, getEntries} from "../services/entryService";
import {toast} from "react-toastify";
import {filterByCategory, filterByTime} from "../utils/filters";
import {searchKeyword} from "../utils/search";
import _ from "lodash";
import {paginate} from "../utils/paginate";
import Link from "react-router-dom/Link";
import SearchBox from "./searchBox";
import FilterTime from "./common/filterTime";
import FilterCategory from "./common/filterCategories";
import CategoriesList from "./categoriesList";
import Pagination from "./common/pagination";
import ExpensesTable from "./expensesTable";
import CategoryForm from "./categoryForm";
import {Route} from "react-router-dom";



class Categories extends Component {
    state = {
        categories: [],
        sortColumn: {path: 'id', order: 'asc'}
    };

    async componentDidMount() {
        const { data } = await getCategories();
        const categories = [ ...data];
        this.setState({ categories});
    }

    handleDelete = async categoryToDelete => {
        const originalCategories = this.state.categories;
        const categories = this.state.categories.filter(category => category.id !== categoryToDelete);
        this.setState({categories: categories});
        console.log("to delete", categoryToDelete);
        try {
            await deleteCategory(categoryToDelete)
        }
        catch (ex) {
            console.log(ex);
            console.log('HANDLE DELETE CATCH BLOCK.');
            if (ex.response && ex.response.status === 404)
                toast('This category has already been deleted.');
            this.setState({categories: originalCategories});
        }
    };

    render() {
        const {categories} = this.state;
        return (
            <div className="container">
                <div className="category-container">
                    <div className="add-new-category">
                        <div className="add-new-category-button">
                            <Link to="/categories/new" className="button is-link is-medium add-more-button">+</Link>
                        </div>
                        <Route path="/categories/new" component={CategoryForm}/>
                    </div>
                    <CategoriesList
                        categories={categories}
                        onDelete={this.handleDelete}
                    />
                </div>
            </div>
        )
    }
}


export default Categories;