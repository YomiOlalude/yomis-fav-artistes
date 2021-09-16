import React, { Component } from 'react';
import { ArtisteContext } from "../context";
import Loading from "./Loading";
import Title from "./Title";


const Genre = (artiste) => {

    const { genre } = artiste

    return (
        <article className="genre-info featured-genres-center" >
            <span className="genre-name">{genre}</span>
        </article>
    )
}

export default class FeaturedGenres extends Component {

    static contextType = ArtisteContext;
    
    render() {
        let { loading, featuredGenres } = this.context;
        
        return (
            <section className="featured-genres">
                <Title title="fav genres" />
                <div className="featured-genres-center">
                    {loading ? <Loading /> : featuredGenres.map(featuredGenre => {
                        return <Genre key={featuredGenre.id} genre={featuredGenre} />
                 })}
                </div>
            </section>
        )
    }
}

