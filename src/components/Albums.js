import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    photos: PropTypes.array.isRequired
};

const Albums = ({ albums }) => {
    console.log(albums);
    return (
        <div>
            <h2>Albums</h2>
            <ul className="row row_wrap row_h-between">
                { albums.map(({ albumId, thumbnailUrl }) => (
                    <li className="cell">
                        <h3>Album: { albumId }</h3>
                        <img src={ thumbnailUrl } alt="thumbnail"/>
                    </li>
                ))}
            </ul>
        </div>
    );
};

Albums.propTypes = propTypes;

export default Albums;
