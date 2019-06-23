import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const propTypes = {
  albums: PropTypes.shape().isRequired
};

const Albums = ({ albums }) => {
  const allAlbumsIds = Object.keys(albums);

  return (
    <div>
      <h2>All albums</h2>
      <ul className="row row_column">
        { allAlbumsIds.map(albumId => (
          <li key={ `album_${ albumId }` }>
            <Link className="link"  to={ `/${ albumId }` }>
              Album #{ albumId }
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

Albums.propTypes = propTypes;

export default Albums;
