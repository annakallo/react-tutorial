import React from "react";


const FilterCategory = ({selectedItem, items, onItemSelect, textProperty, valueProperty}) => {
    return (
        <div className="dropdown is-hoverable filter-position">
            <div className="dropdown-trigger">
                <button className="button" aria-haspopup="true" aria-controls="dropdown-menu4">
                    <span>Filter by Category:</span>
                </button>
            </div>
            <div className="dropdown-menu" id="dropdown-menu4" role="menu">
                <div className="dropdown-content">
                    {items.map(filter =>
                        <a key={filter[valueProperty]} className={filter[textProperty] === selectedItem ? "dropdown-item is-active" : "dropdown-item"}
                           onClick={() => onItemSelect(filter[textProperty])}>{filter[textProperty]}
                        </a>)}
                </div>
            </div>
        </div>
    );
}

FilterCategory.defaultProps = {
    textProperty: 'name',
    valueProperty: 'id'
}

export default FilterCategory;