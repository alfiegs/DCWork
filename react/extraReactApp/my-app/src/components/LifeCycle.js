import React from 'react';
import PropTypes from 'prop-types';

class LifeCycle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            increasing: false
        }
        
    }


    //this executes code before component is rendered
    //for example, fetch call or axios call or database call
    componentWillMount(){
        console.log('Component Will Mount')
        //fetch call
        //axios call
        //database call
    }


    //while component is being rendered, things are happening
    //props are being passed, etc.

    //mounting means putting something on the page



    //this executes code after component is rendered
    //for example, clean up work
    componentDidMount(){
        console.log('Component Did Mount')
    }


    //this requires a paramater (typically called nextProps)

    componentWillReceiveProps(nextProps){
        // nextProps.val > this.props.val
        this.setState({
            increasing: nextProps.val > this.props.val
        })
    }

    //puts condition on whether component should render or not
    // until condition is true, the component will not render
    shouldComponentUpdate(nextProps, nextState){
        return (nextProps.val > 5)
    }





    componentDidUpdate(previousProps, previousState){
        console.log(`componentDidUpdate previous props: ${previousProps.val}`)
    }

    render() {
        console.log('rendered component')
        return (
            <>
            Life Cycle <br />
            {this.state.increasing ? 'true' : 'false'}
            </>
        );
    }
}


LifeCycle.propTypes = {
    
};

export default LifeCycle
