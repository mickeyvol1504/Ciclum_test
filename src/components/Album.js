import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const propTypes = {
  albumId: PropTypes.string.isRequired,
  album: PropTypes.shape(),
};

const defaultProps = {
  album: null,
};

const Album = ({ album, albumId }) => {
  if(!album) return (
    <div>
      Sorry, there is no such album(((
    </div>
  );

  return (
    <div>
      <h3>Album #{ albumId }</h3>
      <ul className="row row_wrap">
        { album.map(({ photoId, thumbnailUrl }) => (
          <li className="cell" key={ `photo_${ photoId }`}>
            <Link to={ `/photos/${ photoId }` }>
              <img src={ thumbnailUrl } alt="thumbnail"/>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

Album.propTypes = propTypes;
Album.defaultProps = defaultProps;

export default Album;
