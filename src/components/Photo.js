import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  photo: PropTypes.shape(),
};

const defaultProps = {
  photo: null,
};

const Photo = ({ photo }) => {
  if(!photo) return (
    <div>
      Sorry, there is no such photo(((
    </div>
  );

  const { title, url } = photo;

  return (
    <div>
      <h3 className="title">{ title }</h3>
      <div className="photo">
        <img src={ url } alt="photo"/>
        <span className="photo__alt">Downloading img...</span>
      </div>
    </div>
  );
};

Photo.propTypes = propTypes;
Photo.defaultProps = defaultProps;

export default Photo;
