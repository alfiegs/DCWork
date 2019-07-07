import React from 'react';
import {Glyphicon} from 'react-bootstrap'

class Rating extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rating: this.props.rating
        }
        
    }

    handleClick(ratingValue){
        this.setState({
            rating: ratingValue
        })
    }

    render() {
        return (
            <>
                <h1>Rating: {this.state.rating}</h1>
                <Glyphicon glyph={this.state.rating >= 1 ? "star" : "star-empty"} onClick={()=>{this.handleClick(1)}}/>
                <Glyphicon glyph={this.state.rating >= 2 ? "star" : "star-empty"} onClick={()=>{this.handleClick(2)}}/>
                <Glyphicon glyph={this.state.rating >= 3 ? "star" : "star-empty"} onClick={()=>{this.handleClick(3)}}/>
                <Glyphicon glyph={this.state.rating >= 4 ? "star" : "star-empty"} onClick={()=>{this.handleClick(4)}}/>
                <Glyphicon glyph={this.state.rating >= 5 ? "star" : "star-empty"} onClick={()=>{this.handleClick(5)}}/>
                    
            </>
        );
    }
}


Rating.propTypes = {
    
};

export default Rating
