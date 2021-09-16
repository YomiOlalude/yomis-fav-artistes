import React from 'react';
import ArtisteFilter from "./ArtistesFilter";
import ArtistesList from "./ArtistesList";
import { withArtisteConsumer } from '../context';
import Loading from "./Loading";

const ArtisteContainer = ({context}) => {
    const { loading, sortedArtistes, artistes } = context;

    if (loading) {
        return <Loading />;
    }

    return (
        <>
            <ArtisteFilter artistes={artistes} />
            <ArtistesList artistes={sortedArtistes} />
        </>
    );
            
}

export default withArtisteConsumer(ArtisteContainer)
