import React, {Component} from "react";

class Counter extends Component {
    // state = {
    //     value: this.props.counter.value,
    //     // imageUrl: 'http://picsum.photos/200',
    //     // tags: ['tag1', 'tag2', 'tag3'],
    //     tags: []
    // };

    // style = {
    //     fontSize: 10,
    //     fontWeight: "bold"
    // };

    // renderTags() {
    //     if (this.state.tags.length === 0) return <p>There are no tags!</p>
    //     // if (this.state.tags.length === 0) return null
    //     return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
    // }

    render() {
        return (
            <React.Fragment>
                {/*<img src={this.state.imageUrl} alt="image"/>*/}
                <h4>Counter #{this.props.counter.id}</h4>
                <span style={this.style} className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={() => this.props.onIncrement(this.props.counter)} style={{fontSize: 10}}
                        className="button is-primary badge">
                        Increment
                </button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} style={{fontSize: 10}} className="button badge is-danger">Delete</button>
                {/*{this.renderTags()}*/}
            </React.Fragment>
        );
    }

    getBadgeClasses() {
        let classes = "button badge is-";
        classes += (this.props.counter.value === 0) ? "light" : "dark";
        return classes;
    }

    formatCount() {
        const {value} = this.props.counter;
        // return count === 0 ? <h1>Zero</h1> : <h1>{count}</h1>;
        return value === 0 ? 'Zero' : value;
    }
}

export default Counter;