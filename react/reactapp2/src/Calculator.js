import React from 'react';

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        let numberList = this.props.numbers.map((numbers) => {
            return <button class="button">{numbers}</button>
        })
        let row1 = numberList.slice(0,3);
        let row2 = numberList.slice(3,6);
        let row3 = numberList.slice(6, 9);
        let row4 = numberList.slice(9,11)
        return (
            <div>
                <div>
                {row1}
                </div>
                <div>
                {row2}
                </div>
                <div>
                {row3}
                </div>
                <div>
                {row4}
                </div>
            </div>
        );
    }
}


Calculator.propTypes = {
    
};

export default Calculator
