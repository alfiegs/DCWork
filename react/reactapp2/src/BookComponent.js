import React from 'react';
import {Container, Row, Col} from 'react-bootstrap' //importing only elements we need, aka destructuring
import './styles.css';


class BookComponent extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        let bookList = this.props.books.map((book)=>{
            let url = "https://raw.githubusercontent.com/benoitvallon/100-best-books/master/static/"
            return (
            <Col md={6}>
            <span class="title">Title: {book.title}</span>
            <br></br>
            <span class="author">Author: {book.author}</span>
            <br></br>
            <img class="image" src={url+book.imageLink}></img>
            </Col>
            )
            

        })
        return (
<Container fluid={true}>
<Row>
{bookList}
</Row>
</Container>);
    }
}


BookComponent.propTypes = {
    
};

export default BookComponent
