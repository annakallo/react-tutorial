import React from "react";


const FilterCategory = ({selectedItem, items, onItemSelect, textProperty, valueProperty}) => {
    return (
        <div className="dropdown is-hoverable filter-position filter-category">
            <div className="dropdown-trigger">
                <button className="button" aria-haspopup="true" aria-controls="dropdown-menu4">
                    <span>Filter by Category</span>
                </button>
            </div>
            <div className="dropdown-menu" id="dropdown-menu4" role="menu">
                <div className="dropdown-content">
                    {items.map(filter =>
                        <a key={filter[valueProperty]} className={filter[valueProperty] === selectedItem ? "dropdown-item is-active" : "dropdown-item"}
                           onClick={() => onItemSelect(filter[valueProperty])}>{filter[textProperty]}
                        </a>)}
                </div>
            </div>
        </div>
    );
}

FilterCategory.defaultProps = {
    textProperty: 'category_name',
    valueProperty: 'id'
}

export default FilterCategory;