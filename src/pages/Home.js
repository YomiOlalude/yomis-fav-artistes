import React from 'react';
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import FeaturedGenres from '../components/FeaturedGenres';

const Home = () => {
    return (
        <>
            <Hero hero="defaultHero">
                <Banner title="yomi's fav artistes" 
                        subtitle="">
                    <Link to="/artistes" className="btn btn-primary">
                        artistes
                    </Link>
                </Banner>
            </Hero>
            {/* <Services title="services" /> */}
            <FeaturedGenres />
        </>
    )
}

export default Home

