import React from 'react';
import Artiste from "./Artiste"

const ArtistesList = ({ artistes }) => {
    if (artistes.length === 0) {
        return (
            <div className="empty-search">
                <h3>No Artistes matched your search</h3>
            </div>
        )
    }

    return (
        <section className="roomslist">
            <div className="roomslist-center">
                {
                    artistes.map((item) => {
                       return <Artiste key={item.id} artiste={item} />
                   }) 
                }
            </div>
        </section>
    )
}

export default ArtistesList
