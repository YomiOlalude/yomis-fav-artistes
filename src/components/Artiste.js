import React from 'react';
import { Link } from 'react-router-dom';
import defaultImg from "../images/defaultBcg.jpg";
import PropTypes from 'prop-types';

export default function Artiste({artiste}) {
    
    const {name, slug, images} = artiste

    return (
        <article className="room">
            <div className="img-container">
                <img src={images[0] || defaultImg} alt="single artiste" />
                <Link to={`/artistes/${slug}`} className="btn-primary room-link">
                    Details
                </Link>
            </div>
            <p className="room-info">{name}</p>
        </article>
    )
}

Artiste.propTypes = {
    artiste: PropTypes.shape({
        name: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
        worth: PropTypes.number.isRequired,
    })
}
