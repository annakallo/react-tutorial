import React, {Component} from "react";

class Hearts extends Component {

    rightHeart() {
        if (this.props.hearts.full === true) return <i className="fa fa-heart" aria-hidden="true"></i>
        return <i className="fa fa-heart-o" aria-hidden="true"></i>
    }

    render() {
        return (
            <div>
                <button onClick={() => this.props.onHeart}>{this.rightHeart()}</button>
            </div>
        );
    }
}



export default Hearts;