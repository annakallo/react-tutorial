import React, {Component} from "react";

class Counter extends Component {
    state = {
        count: 0,
        // imageUrl: 'http://picsum.photos/200',
        // tags: ['tag1', 'tag2', 'tag3'],
        tags: []
    };

    // style = {
    //     fontSize: 10,
    //     fontWeight: "bold"
    // };

    renderTags() {
        if (this.state.tags.length === 0) return <p>There are no tags!</p>
        // if (this.state.tags.length === 0) return null
        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
    }

    handleIncrement = product => {
        console.log(product);
        this.setState({count: this.state.count + 1})
    }

    render() {
        return (
            <React.Fragment>
                {/*<img src={this.state.imageUrl} alt="image"/>*/}
                <span style={this.style} className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={() => this.handleIncrement({id:1})} style={{fontSize: 10}}
                        className="button is-primary badge">
                        Increment
                </button>
                {this.renderTags()}
            </React.Fragment>
        );
    }

    getBadgeClasses() {
        let classes = "button badge is-";
        classes += (this.state.count === 0) ? "light" : "dark";
        return classes;
    }

    formatCount() {
        const {count} = this.state;
        // return count === 0 ? <h1>Zero</h1> : <h1>{count}</h1>;
        return count === 0 ? 'Zero' : count;
    }
}

export default Counter;