import {getCategoryColor, getCategoryIcon, saveCategory} from "../services/categoryService";
import React, {Component} from "react";

class CategoryForm extends Component {
    state ={
        data: {
            category_name: '',
            category_color: ''
        },
        category_color: getCategoryColor(),
        category_icon: getCategoryIcon()
    };

    doSubmit = async () => {
        await saveCategory(this.state.data);
        this.props.history.push("/categories");
        // Call the server
        console.log('Submitted');
    };

    render() {
        const {category_color, category_icon} = this.state;
        console.log("color", category_color);
        console.log("icon", category_icon);
        return (
            <form onSubmit={this.doSubmit}>
                <div className="container">
                    <form className="new-category-form" onSubmit={this.handleSubmit}>
                        <div className="field">
                            <label htmlFor="name" className="label">New category:</label>
                            <div className="control">
                                <input
                                    name="name"
                                    id="name"
                                    className="input"/>
                            </div>
                        </div>

                        <div className="field">
                            <label htmlFor="color" className="label">Color</label>
                            <div className="control">
                                <div className="select">
                                    <select name="color" id="color">
                                        <option value=""/>
                                        {category_color.map(option => <option style={{backgroundColor:option}}></option>)}
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="field">
                            <div className="control center-text">
                                <button
                                    id="save"
                                    className="button is-link">Save
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </form>
        );
    }
}

export default CategoryForm;