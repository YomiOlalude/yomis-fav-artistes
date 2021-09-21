import React from 'react';
import { useContext } from 'react';
import { ArtisteContext } from '../context';
import Title from "../components/Title";

const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))]
}

const ArtistesFilter = ({artistes}) => {
    const context = useContext(ArtisteContext)
    const {
        handleChange,
        genre,
        albums,
        worth,
        minWorth,
        maxWorth,
        maxAlbums,
        minHeight,
        maxHeight,
        solo,
        grammy,
        gospel,
    } = context

    let genres = getUnique(artistes, "genre");
    genres = ["All", ...genres];
    genres = genres.map((item, index) => {
        return (
        <option value={item} key={index}>
            {item}
        </option>
        )
    })

    // let discography = getUnique(artistes, "albums");
    // discography = discography.map((item, index) => {
    //     return (
    //         <option key={index} value={item}>
    //             {item}
    //         </option>
    //     )
    // })
    
    return (
        <section className="filter-container">
            <Title title="artistes" />
            <form className="filter-form">
                {/* genre */}
                <div className="form-group">
                    <label htmlFor="genre">
                        genre
                    </label>
                    <select name="genre" id="genre" value={genre}
                        className="form-control" onChange={handleChange}>
                        {genres}
                    </select>
                </div>
                {/* end genre */}
                {/* guests */}
                <div className="form-group">
                    <label htmlFor="albums">
                        {albums} {albums > 1 || albums === 0 ? "Albums" : "Album"}
                    </label>
                   <input type="range" name="albums" min={0} max={maxAlbums}
                        id="albums" value={albums} onChange={handleChange}
                        className="form-control" />
                </div>
                {/* end guests */}
                {/* room worth */}
                <div className="form-group">
                    <label htmlFor="worth">
                        Net worth ${worth}M
                    </label>
                    <input type="range" name="worth" min={minWorth} max={maxWorth}
                        id="worth" value={worth} onChange={handleChange}
                        className="form-control" />
                </div>
                {/* end room worth */}
                {/* height */}
                <div className="form-group">
                    <label htmlFor="height">
                        Height (CM)
                    </label>
                    <div className="size-inputs">
                        <input type="number" name="minHeight" id="height" value={minHeight}
                            onChange={handleChange} className="size-input" />
                        <input type="number" name="maxHeight" id="height" value={maxHeight}
                            onChange={handleChange} className="size-input" />
                    </div>
                </div>
                {/* end height */}
                {/* links */}
                <div className="form-group checkers" >
                    <div className="single-extra">
                        <input type="checkbox" name="solo" id="solo"
                           checked={solo} onChange={handleChange} />
                        <label htmlFor="solo">
                            solo
                        </label>
                    </div>
                    <div className="single-extra">
                        <input type="checkbox" name="grammy" id="grammy"
                           checked={grammy} onChange={handleChange} />
                        <label htmlFor="grammy">
                            grammy
                        </label>
                   </div>
                    <div className="single-extra">
                        <input type="checkbox" name="gospel" id="gospel"
                           checked={gospel} onChange={handleChange} />
                        <label htmlFor="gospel">
                            gospel
                        </label>
                   </div>
                </div>
                {/* end links */}
            
            </form>
        </section>
    )
}

export default ArtistesFilter
