import React from 'react'
import Counter from '../Counter'
import {
    addOneAction,
    subOneAction,
    subValueAction,
} from '../../store/actionCreators'
import { connect } from 'react-redux';
class CounterGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            size: 0,
        }
    }

    handleResize = (e) => {
        const newSize = e.target.value ? parseInt(e.target.value) : 0;
        if (newSize !== this.state.size) {
            this.setState({
                size: e.target.value ? parseInt(e.target.value) : 0,
                totalNumber: 0
            });
        }

    }

    onIncrease = () => {
        this.setState((prevState) => ({
            totalNumber: prevState.totalNumber + 1
        }));
    }
    onDecrease = () => {
        this.setState((prevState) => ({
            totalNumber: prevState.totalNumber - 1
        }));
    }
    render() {
        const initArray = [...Array(this.state.size).keys()];
        return (
            <div>
                <label>
                    GroupSize:
                    <input onBlur={this.handleResize} defaultValue={0} />
                </label>
                <br />
                <label>
                    Total number: {this.props.totalValue}
                </label>
                {initArray.map(key => <Counter subValueAction={this.props.subValueAction} onIncrease={this.props.addOneAction} onDecrease={this.props.subOneAction} key={key} />)}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { totalValue } = state.counter;
    return { totalValue };
}

const mapDispatchToProps = (dispatch) => ({
    addOneAction: () => dispatch(addOneAction()),
    subOneAction: () => dispatch(subOneAction()),
    subValueAction: (value) => dispatch(subValueAction(value))

});
export default connect(mapStateToProps, mapDispatchToProps)(CounterGroup)