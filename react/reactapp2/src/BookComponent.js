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
            let wikiCountry = "https://en.wikipedia.org/wiki/"
            return (
            <Col md={3}>
            <div class="border1 box">
            <h5>{book.title} ({book.year})</h5> 
            <i>{book.author}</i>
            <br></br>
            <a class="link" href={wikiCountry+book.country}>{book.country}</a>
            <br></br>
            <a href={book.link}><img class="image" src={url+book.imageLink}></img></a>
            <div class="small-font">Pages: {book.pages}, Language: {book.language}</div>
            </div>
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
