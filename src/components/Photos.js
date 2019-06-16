import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    photos: PropTypes.array.isRequired
};

const Photos = ({ photos }) => {
    return (
        <div>
            <h2>Photos</h2>
            <ul className="row row_wrap row_h-between">
                { photos.map(({ title, url }) => (
                    <li className="cell">
                        <h3 className="title">{ title }</h3>
                        <img src={ url } alt="photo"/>
                    </li>
                ))}
            </ul>
        </div>
    );
};

Photos.propTypes = propTypes;

export default Photos;
