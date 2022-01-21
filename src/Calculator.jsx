import React, { Component } from 'react';


class Calculator extends Component{

    state = {
        num: "0",
        a: 0,
        op: null,
        b: 0,
        step: 0
    }

    

    
    check(current){
        switch(this.state.step){
            case 0:
            if(typeof(current) == "number"){
                if(this.state.num === "0"){
                    this.setState({ num: `${current}` }); 
                }else{
                    this.setState({ num: `${this.state.num}${current}` });
                }
            }else{
                setTimeout(1);
                this.setState({a: parseInt(this.state.num) });
                setTimeout(1);
                this.setState({step: this.state.step + 1});
                setTimeout(1);
                this.setState({op: current});
            }
            break;
            case 1:
                if(typeof(current) == "number"){
                    if(this.state.b === 0){
                        this.setState({ num: `${current}` });
                        setTimeout(1);
                        this.setState({ b: parseInt(`${current}`) }); 
                    }else{
                        this.setState({ num: `${this.state.num}${current}` });
                        setTimeout(1);
                        this.setState({ b: parseInt(`${this.state.num}${current}`) }); 
                    }
                }
                else{
                    if(current === "="){
                        this.setState({ a: parseInt(this.state.num) });
                        this.setState({ b: 0 });
                        this.setState({step: 0});
                        this.setState({num: `${eval(`${this.state.a} ${this.state.op} ${this.state.b}`)}`});
                    }else{
                        this.setState({op: current});
                        this.setState({num: `${eval(`${this.state.a} ${this.state.op} ${this.state.b}`)}`});
                        setTimeout(1);
                        this.setState({ a: `${eval(`${this.state.a} ${this.state.op} ${this.state.b}`)}` });
                        this.setState({ b: 0 });
                    }
                }
            break;
        }
    }
    
    clear(){
        window.location.reload();
        // this.setState({ a: 0 });
        // this.setState({ b: 0 });
        // this.setState({step: 0});
        // this.setState({num: 0});
        // this.setState({ op: null });
    }

    render(){
        return(
            <div className='Calculator'>
                <h1 id="result">{this.state.num}</h1>
                <div className="btn-group">
                    <button onClick={this.clear}>AC</button>
                    <button onClick={() => this.check("/")}>/</button>
                    <button onClick={() => this.check("*")}>*</button>
                    <button onClick={() => this.check("-")}>-</button>
                    <button onClick={() => this.check("+")}>+</button>
                    <button onClick={() => this.check("=")}>=</button>
                </div> 
                <div className='btn-group-nums'>
                    <div className='btn-group-nums-row'>
                        <button onClick={() => this.check(7)}>7</button>
                        <button onClick={() => this.check(8)}>8</button>
                        <button onClick={() => this.check(9)}>9</button>
                    </div>
                    <div className='btn-group-nums-row'>
                        <button onClick={() => this.check(4)}>4</button>
                        <button onClick={() => this.check(5)}>5</button>
                        <button onClick={() => this.check(6)}>6</button>
                    </div>
                    <div className='btn-group-nums-row'>
                        <button onClick={() => this.check(1)}>1</button>
                        <button onClick={() => this.check(2)}>2</button>
                        <button onClick={() => this.check(3)}>3</button>
                    </div>
                    <div className='btn-group-nums-row'>
                        <button onClick={() => this.check(0)}>0</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Calculator;