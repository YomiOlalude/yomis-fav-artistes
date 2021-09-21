import React, { Component } from 'react';
import items from "./data";

const ArtisteContext = React.createContext();

class ArtisteProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            artistes: [],
            sortedArtistes: [],
            featuredGenres: [],
            loading: true,
            genre: "all",
            albums: 0,
            worth: 0,
            minWorth: 0,
            maxWorth: 0,
            minHeight: 0,
            maxHeight: 0,
            maxAlbums: 0,
            solo: false,
            grammy: false,
            gospel: false,
        };
    }

    componentDidMount() {
        let artistes = this.formatData(items);
        // let featuredGenres = [...new Set(artistes.map(artiste => artiste.featuredGenres))]
        let featuredGenres = [...new Set(artistes.map(artiste => artiste.genre))];
        let maxWorth = Math.max(...artistes.map(artiste => artiste.worth));
        let maxHeight = Math.max(...artistes.map(artiste => artiste.height));
        let maxAlbums = Math.max(...artistes.map(artiste => artiste.albums));
        this.setState({
            artistes,
            featuredGenres,
            sortedArtistes: artistes,
            loading: false,
            maxWorth,
            maxHeight,
            maxAlbums,
            
        });
    }

    formatData(items) {
        let tempItems = items.map(item => {
            let id = item.sys.id;
            let images = item.fields.images.map(image => image.fields.file.url);
            // let spotify = item.fields.links.spotify
            // let youtube = item.fields.links.youtube
            let artiste = {...item.fields, ...item.fields.links, images, id};

            return artiste;
        });
        return tempItems;
    }

    getArtiste = (slug) => {
        let tempArtistes = [...this.state.artistes];
        const artiste = tempArtistes.find((artiste) => artiste.slug === slug);
        return artiste;
    }

    handleChange = (event)  => {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        }, this.filterArtistes)
    }

    filterArtistes() {
        let {
            artistes,
            genre,
            albums,
            worth,
            minHeight,
            maxHeight,
            solo,
            grammy,
            gospel,
        } = this.state

        let tempArtistes = [...artistes];
        albums = parseInt(albums);
        worth = parseInt(worth);

        // filter by type
        if (genre !== "all") {
           tempArtistes = tempArtistes.filter(artiste => artiste.genre === genre) 
        }

        // filter by albums
        if (albums !== 1) {
            tempArtistes = tempArtistes.filter(artiste => artiste.albums >= albums)
        }

        // filter by worth
        tempArtistes = tempArtistes.filter(artiste => artiste.worth >= worth)

        // filter by size
        tempArtistes = tempArtistes.filter(artiste => artiste.height >= minHeight && artiste.height <= maxHeight)

        // filter by solo
        if (solo) {
            tempArtistes = tempArtistes.filter(artiste => artiste.solo === true);
        }

        // filter by grammy
        if (grammy) {
            tempArtistes = tempArtistes.filter(artiste => artiste.grammy === true);
        }

        // filter by gospel
        if (gospel) {
            tempArtistes = tempArtistes.filter(artiste => artiste.gospel === true);
        }

        // change state
        this.setState({
            sortedArtistes: tempArtistes,
        });
    }

    render() {
        return (
            <ArtisteContext.Provider
                value={{
                    ...this.state,
                    getArtiste: this.getArtiste,
                    handleChange: this.handleChange,
                }}>
               {this.props.children}
           </ArtisteContext.Provider>
        )
    }
}


const ArtisteConsumer = ArtisteContext.Consumer;

export function withArtisteConsumer(Component) {
    return function ConsumerWrapper(props) {
        return <ArtisteConsumer>
            {value => <Component {...props} context={value}/>}
        </ArtisteConsumer>
    }
}

export { ArtisteProvider, ArtisteConsumer, ArtisteContext }