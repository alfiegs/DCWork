import React from 'react';
import {Media} from 'react-bootstrap';
import Rating from './Rating'

class Product extends React.Component {


    render() {
        return (
            <>
                <Media>
                        <img src={this.props.data.imageUrl} alt="" width={64} height={64}></img>

                    <Media.Body>
                        <h3>{this.props.data.productName}</h3>
                        <p>{this.props.data.releaseDate}</p>
                        <Rating rating={this.props.data.rating}/>

                    </Media.Body>
                </Media>
            </>
        )
    }
}


Product.propTypes = {
    
};

export default Product






