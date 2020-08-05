import React from 'react'

class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state = {value:0,
                        size : 0
                    }
    }

    onDecrease = () =>{
        this.setState((prevState)=>({
            value: prevState.value-1
        }));
        this.props.onDecrease();
    }

    onIncrease = () =>{
        this.setState((prevState)=>({
            value: prevState.value+1
        }));
        this.props.onIncrease();
    }

    componentWillUnmount(){
        this.props.subValueAction(this.state.value);
    }

    static getDerivedStateFromProps(props, state){
        //console.log(JSON.stringify(props));
        if(props.size !== state.size){
            return{
                size: props.size,
                value: 0
            }
        }
        return null;
    }
    render(){
        return (<div>
            <button onClick={this.onDecrease}>-</button>
            <mark>{this.state.value}</mark>
            <button onClick={this.onIncrease}>+</button>
        </div>)
    }
}

export default Counter