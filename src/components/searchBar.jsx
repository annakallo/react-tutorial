import React, {Component} from "react";


class SearchBar extends Component {

    handleSearch = e => {
        e.preventDefault(); // prevent the submission of the form instead call the server and save the
        // changes and redirect the user to a different page

        // Call the server
        console.log('Submitted');
    };

    render() {
        const {searchBar, onSearchChange} = this.props;
        return (
            <div className="container filter-position">
                <form onSubmit={this.handleSearch}>
                    <div className="field search-bar">
                        <input
                            name="search"
                            value={searchBar}
                            onChange={onSearchChange}
                            className="input search-bar"
                            type="text"
                            placeholder="What are you looking for?"/>
                        <button type="submit" className="button is-primary search-button">
                            <i className="fa fa-search"/>
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;