import React from 'react';
import{Container, Row, Col} from 'react-bootstrap';

const Movie_URL = "https://raw.githubusercontent.com/RyanHemrick/star_wars_movie_app/master/movies.json"

class MovieList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            movies: []
        }
    }

    componentWillMount(){


        fetch(Movie_URL)
        .then((response)=>{
            return response.json()
        })
        .then((data)=>{
            // console.log(data)
            this.setState({
                movies: data.movies
            }, ()=>{console.log(this.state.movies)})
        })
    }

    componentDidMount(){

    }



    render() {
        let movieList = this.state.movies.map((movie)=>{
        let movieURL = "https://raw.githubusercontent.com/mav1283/star_wars_movie_app_followed_from_ryanhemrick/master/public/images/"
            return (
            <Col md={4}>
            <div class="movie-box">
                <div class="movie-box-header">
                <h3>Episode: {movie.episode_number}</h3>
                <h5>{movie.title}</h5>
                </div>
                <br />
                <div class='movie-box-image'>
                    <img class="poster" src={movieURL+movie.poster} />
                </div>
            </div>
            </Col>
            )
            

        })
        return (
<Container fluid={true}>
<Row>
{movieList}
</Row>
</Container>);
    }
}


MovieList.propTypes = {
    
};

export default MovieList
