import React, { Component } from 'react';
import defaultBcg from "../images/defaultBcg.jpg";
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import { ArtisteContext } from '../context';
import StyledHero from '../components/StyledHero';
import { FaYoutube, FaSpotify } from "react-icons/fa";


export default class SingleArtiste extends Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            slug: this.props.match.params.slug,
            defaultBcg: defaultBcg,
        }
    }

    static contextType = ArtisteContext;

    render() {
        const { getArtiste } = this.context;
        const artiste = getArtiste(this.state.slug);

        if (!artiste) {
            return <div className="error">
                <h3>no such room could be found...</h3>
                <Link to="/artistes" className="btn-primary">
                    back to artistes
                </Link>
            </div>
        }

        
        const { name, genre, about, albums, height, worth, spotify, youtube, solo, grammy, images } = artiste;

        console.log(spotify);

        return (
            <>
                <StyledHero img={images[1] || this.state.defaultBcg}>
                    <Banner title={name}>
                        <Link to="/artistes" className="btn-primary">
                            back to artistes
                        </Link>
                    </Banner>
                </StyledHero>
                <section className="single-artiste">
                    <div className="single-artiste-info">
                        <article className="desc">
                            <h3>about</h3>
                            <p>{about}</p>
                        </article>
                        <article className="info">
                            <h3>info</h3>
                            <h6>Genre: {genre}</h6>
                            <h6>net worth: ${worth} million</h6>
                            {solo ? <h6>height: {height} CM</h6> : ""}
                            <h6>
                                albums: {albums}
                            </h6>
                            <h6>
                                {grammy ? "grammy winner" + (!solo ? "s" : "") : "no grammy"}
                            </h6>
                            <h6>
                                {solo ? "solo artiste" : "group"}
                            </h6>
                        </article>
                        <article className="info">
                            <h3>Links</h3>
                            <ul className="extras">
                                <a href={spotify} target="_blank" rel="noreferrer" className="socials" >
                                    <FaSpotify />
                                </a>
                                <a href={youtube} target="_blank" rel="noreferrer" className="socials" >
                                    <FaYoutube />
                                </a>
                            </ul>
                        </article>
                    </div>
                </section>
                
          </>
        )
    }
}

