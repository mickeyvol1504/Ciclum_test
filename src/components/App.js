import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { fetchPhotos } from '../api/fetchPhotos';

import Albums from './Albums';
import Album from './Album';
import Photo from './Photo';

class App extends React.Component {

  mount = true;
  state = {
    albums: null,
    photos: null,
  };

  componentDidMount() {
    const { albums } = this.state;

    if(albums) return;

    fetchPhotos()
      .then(data => {
        let albums = {};
        let photos = {};

        data.forEach(({ albumId, id, title, url, thumbnailUrl }) => {
          if(!(albumId in albums)) {
            albums[albumId] = [];
          }

          albums[albumId].push({ thumbnailUrl, photoId: id });
          photos[id] = { title, url }
        });

        if(!this.mount) return;

        this.setState({ albums, photos });
      });
  }

  componentWillUnmount() {
    this.mount = false;
  }

  render() {
    const { albums, photos } = this.state;

    if(!albums) return (
      <div className="cnt">
        Loading...
      </div>
    );

    return (
        <div className="cnt">
          <h1>Ciclum test</h1>
          <Router>
            <Switch>
              <Route
                path="/"
                exact
                render={ () => (
                  <Albums
                    albums={ albums }
                  />
                ) }
              />
              <Route
                path="/:albumId"
                exact
                render={ ({ match: { params } }) => (
                  <Album
                    albumId={ params.albumId }
                    album={ albums[params.albumId] }
                  />
                ) }
              />
              <Route
                path="/photos/:photoId"
                render={ ({ match: { params } }) => (
                  <Photo
                    photo={ photos[params.photoId] }
                  />
                ) }
              />
            </Switch>
          </Router>
        </div>
    );
  }
}

export default App;
