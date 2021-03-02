import React from "react";


const FilterTime = props => {
    const timeLength = ['Get all entries','Last week','This month','Last month']
    return (
        <div className="dropdown is-hoverable filter-position">
            <div className="dropdown-trigger">
                <button className="button" aria-haspopup="true" aria-controls="dropdown-menu4">
                    <span>Filter by Time: {props.currentTimeFilter}</span>
                </button>
            </div>
            <div className="dropdown-menu" id="dropdown-menu4" role="menu">
                <div className="dropdown-content">
                    {timeLength.map(filter =>
                        <a key={filter} className="dropdown-item"
                            onClick={() => props.onFilterChange(filter)}>{filter}
                        </a>)}
                </div>
            </div>
        </div>
    );
}

export default FilterTime;