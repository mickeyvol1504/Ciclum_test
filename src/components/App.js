import React from 'react';
import '../styles/App.scss';

import { fetchPhotos } from '../api/fetchPhotos';

import Albums from './Albums';
import Photos from './Photos';

class App extends React.Component {

  state = {
    albums: [],
    photos: []
  };

  componentDidMount() {
    const { photos } = this.state;

    if(photos.length > 0) return;

    fetchPhotos()
      .then(data => {
        let albums = [];
        let photos = [];

        data.forEach(({ albumId, title, url, thumbnailUrl }) => {
          albums.push({ albumId, thumbnailUrl });
          photos.push({ title, url });
        });

        this.setState({ albums, photos });
      });
  }

  render() {
    const { albums, photos } = this.state;

    if(albums.length === 0) return null;

    return (
        <div className="cnt">
          <h1>Ciclum test</h1>
          <Albums albums={ albums } />
          <Photos photos={ photos } />
        </div>
    );
  }
}

export default App;
