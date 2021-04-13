import React from "react";
import TableHeader from "./tableHeader";
import TableFooter from "./tableFooter";
import TableBody from "./tableBody";

const Table = ({columns, sortColumn, onSort, data}) => {
    return (
        <table className="table is-fullwidth">
            <TableHeader
                columns={columns}
                sortColumn={sortColumn}
                onSort={onSort}
            />
            <TableBody
                columns={columns}
                data={data}
            />
            <TableFooter
                columns={columns}
                sortColumn={sortColumn}
                onSort={onSort}
            />
        </table>
    );
}

export default Table;