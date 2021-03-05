import React from "react";


// stateless functional component
const Input = ({name, label, value, error, onChange}) => {
    return (
        <div className="field">
            <label htmlFor={name} className="label">{label}</label>
            <div className="control">
                <input
                    // autoFocus
                    // ref={this.username}
                    value={value}
                    onChange={onChange}
                    id={name}
                    name={name}
                    className="input"
                    type="text"
                    placeholder="Text input"/>
                {error && <div>{error}</div>}
            </div>
        </div>
    );
};


export default Input;