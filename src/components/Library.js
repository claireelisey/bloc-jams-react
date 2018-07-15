import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import albumData from './../data/albums';
import './Library.css';

class Library extends Component {
  constructor(props) {
    super(props);
    this.state = { albums: albumData };
  }
 
  render() {
   return ( 
     <section className='library'>
        {
          this.state.albums.map( (album, index) => 
            <Link style={{ textDecoration: 'none', color:'white' }} to={`/album/${album.slug}`} key={index}>
               <img id="album-cover" src={album.albumCover} alt={album.title} />
               <div id="album-title-library">{album.title}</div>
               <div className="artist-library">{album.artist}</div>
               <div id="release-info-library">{album.songs.length} songs</div>
            </Link>
          )
        }
     </section>
    );
  }
}

export default Library;