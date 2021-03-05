import React from "react";
import Joi from 'joi-browser';
import Form from './common/form';

class SearchBar extends Form {
    state = {
        data: {search: ''},
        errors: {}
    };

    schema = {
        search: Joi.label('Search')
    };

    doSubmit = () => {
        // Call the server
        console.log('Searched');
    };

    render() {
        return (
            <div className="container filter-position">
                <form onSubmit={this.handleSubmit}>
                    <div className="buttonIn">
                        {this.renderInput('search', '')}
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;