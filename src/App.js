`import React from 'react'

class Calculator extends React.Component {
    state = {
        currentNumber: 0,
        display: '0',
        currentOperator: '',
        result: 0,
        hasCalculated: false,
    };
    
    input(value) {
        const { state } = this
        if (typeof value === 'number') {
            let currentNumber = state.currentNumber
            if (state.hasCalculated){
                currentNumber = 0
                this.setState({
                    hasCalculated: false,
                })
            }
            currentNumber = Number(`${currentNumber}${value}`)
            this.setState({
                currentNumber,
            })
            this.setState({
                display: currentNumber.toString(),
            })
        }
        else if (typeof value === 'string') {
            if (state.hasCalculated) {
                this.setState({
                    hasCalculated: false,
                })
            }
            if (value === '=') {
                this.calculate()
            }
            else {
                this.setState({
                    currentNumber: 0,
                    currentOperator: value,
                    result: state.currentNumber,
                })
            }
        }
    }

    calculate(){
        const { state } = this
        if (state.currentOperator === '+') {
            const result = state.result + state.currentNumber
            this.setState({
                display: result,
                currentOperator: '',
                currentNumber: result,
                hasCalculated:true,
            })
           
        } 
        else if (state.currentOperator === '-') {
            const result = state.result - state.currentNumber
            this.setState({
                result: 0,
                display: result,
                currentOperator: '',
                currentNumber: result,
            })
        } 
        else if (state.currentOperator === '/') {
            const result = state.result / state.currentNumber
            this.setState({
                result: 0,
                display: result,
                currentOperator: '',
                currentNumber: result,
            })
        } 
        else if (state.currentOperator === '*') {
            const result = state.result * state.currentNumber
            this.setState({
                result: 0,
                display: result,
                currentOperator: '',
                currentNumber: result,
            })
        } 

    }
            
    clear(){
        this.setState({
            display: 0, 
            currentNumber: 0,
            currentOperator:'',
            result:0,
        })
    }
    render() {
        return (
            <div className="bg-cyan-100  w-96 h-auto p-2 ">
                <div className="m-2"> 
                    <div className="mt-2 bg-white py-6 mb-1" >{this.state.display}</div>
                    <div className="mt-2 bg-white py-6 mb-1" >{this.state.currentOperator}</div>
                </div>
                <div>
                    <li className="inline-block ">
                        <button className="shadow-sm shadow-gray-500 bg-white hover:bg-gray-100 w-1/3 py-3" onClick={() => this.input(1)}>1</button>
                        <button className="shadow-sm shadow-gray-500 bg-white hover:bg-gray-100 w-1/3 py-3" onClick={() => this.input(2)}>2</button>
                        <button className="shadow-sm shadow-gray-500 bg-white w-1/3 py-3 hover:bg-gray-100" onClick={() => this.input(3)}>3</button>
                        <button className="shadow-sm shadow-gray-500 bg-white w-1/3 py-3 hover:bg-gray-100" onClick={() => this.input(4)}>4</button>
                        <button className="shadow-sm shadow-gray-500 bg-white w-1/3 py-3 hover:bg-gray-100" onClick={() => this.input(5)}>5</button>
                        <button className="shadow-sm shadow-gray-500 bg-white w-1/3 py-3 hover:bg-gray-100" onClick={() => this.input(6)}>6</button>
                        <button className="shadow-sm shadow-gray-500 bg-white w-1/3 py-3 hover:bg-gray-100" onClick={() => this.input(7)}>7</button>
                        <button className="shadow-sm shadow-gray-500 bg-white w-1/3 py-3 hover:bg-gray-100" onClick={() => this.input(8)}>8</button>
                        <button className="shadow-sm shadow-gray-500 bg-white w-1/3 py-3 hover:bg-gray-100" onClick={() => this.input(9)}>9</button>
                        <button className="shadow-sm shadow-gray-500 bg-white w-1/3 py-3 hover:bg-gray-100" onClick={() => this.input(0)}>0</button>
                        <button className="shadow-sm shadow-gray-500 bg-white w-1/3 py-3 hover:bg-gray-100" onClick={() => this.input('+')}>+</button>
                        <button className="shadow-sm shadow-gray-500 bg-white w-1/3 py-3 hover:bg-gray-100" onClick={() => this.input('-')}>-</button>
                        <button className="shadow-sm shadow-gray-500 bg-white w-1/3 py-3 hover:bg-gray-100" onClick={() => this.input('/')}>/</button>
                        <button className="shadow-sm shadow-gray-500 bg-white w-1/3 py-3 hover:bg-gray-100" onClick={() => this.input('*')}>*</button>
                        <button className="shadow-sm shadow-gray-500 bg-white px-14 py-3 hover:bg-gray-100" onClick={() => this.input('=')}>=</button>
                        <button className="shadow-sm shadow-gray-500 bg-white px-14 py-3 hover:bg-gray-100"value={0} onClick={() => this.clear()}>clr</button>
                    </li>
                </div>
                
            </div>
        );
    }
}

export default Calculator
