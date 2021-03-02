import React, {Component} from "react";
import Counter from './counter';

class Counters extends Component {
    render() {
        console.log('Counters-Rendered');
        const {onReset, counters, onDelete, onIncrement, onDecrement} = this.props
        return (
            <div>
                <button onClick={onReset} style={{fontSize: 10}}
                        className="button badge is-danger"style={{fontSize: 10}} className="button badge is-warning">Reset</button>
                {counters.map(counter =>
                    (<Counter
                        key={counter.id}
                        onDelete={onDelete}
                        onIncrement={onIncrement}
                        onDecrement={onDecrement}
                        counter={counter}
                    />
                    ))}
            </div>
        );
    }
}

export default Counters;