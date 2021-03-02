import React from "react";


const FilterCategory = props => {
    return (
        <div className="dropdown is-hoverable filter-position">
            <div className="dropdown-trigger">
                <button className="button" aria-haspopup="true" aria-controls="dropdown-menu4">
                    <span>Filter by Category: {props.currentCategory}</span>
                </button>
            </div>
            <div className="dropdown-menu" id="dropdown-menu4" role="menu">
                <div className="dropdown-content">
                    {props.allCategories.map(filter =>
                        <a key={filter.id} className="dropdown-item"
                           onClick={() => props.onFilterChange(filter.name)}>{filter.name}
                        </a>)}
                </div>
            </div>
        </div>
    );
}

export default FilterCategory;