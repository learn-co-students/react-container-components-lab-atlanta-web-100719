import React from 'react'

const MovieReviews = (props) => {

    return (
        <div className='review-list'>
            {props.reviews.map(({ display_title, headline, byline, summary_short, mpaa_rating, multimedia }, i) => {
                return <div key={i} className='review'>
                    <img src={multimedia ? multimedia.src : ''}></img>
                    <h2> {display_title}</h2>
                    <p>{headline}</p>
                    <p>{byline}</p>
                    <p>mpaa_rating</p>
                    <p>{summary_short}</p>
                </div>
            })}
            <div></div>
        </div>
    )
}

export default MovieReviews