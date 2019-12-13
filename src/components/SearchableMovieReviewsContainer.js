import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

// const NYT_API_KEY = '436twst70f50CVZ99i6Au6lsbPvrFw83';
const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';

const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
    + `api-key=${NYT_API_KEY}`;

class SearchableMovieReviewsContainer extends Component {
    state = {
        reviews: [],
        searchTerm: 'christmas'
    }

    componentDidMount() {
        fetch(`${URL}&query=${this.state.searchTerm}`)
            .then(res => res.json())
            .then(data => {
                this.setState({ reviews: data.results })
            })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        // console.log(e.target.searchTerm);
        fetch(`${URL}&query=${this.state.searchTerm}`)
            .then(res => res.json())
            .then(data => {
                // if (data.status === 'ok')
                this.setState({ reviews: data.results })
            })
    }

    handleChange = (e) => {
        // this.setState({ searchTerm: e.target.value })
    }

    render() {
        return <div className='searchable-movie-reviews'>
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} name='searchTerm' type='text'  ></input>
                <button type='submit' >Submit</button>
            </form>
            <MovieReviews reviews={this.state.reviews} />
        </div>
    }
}

export default SearchableMovieReviewsContainer
