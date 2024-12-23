import React from 'react';
import PropTypes from 'prop-types';

const ChartsHeader = ({ category, title, className = '', darkMode = false }) => (
  <div className={`mb-10 ${className}`}>
    <div>
      <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-400'}`}>Chart</p>
      <p className={`text-3xl font-extrabold tracking-tight ${darkMode ? 'text-gray-200' : 'text-slate-900'}`}>{category}</p>
    </div>
    <p className={`text-center text-xl mb-2 mt-3 ${darkMode ? 'text-gray-200' : 'text-slate-900'}`}>{title}</p>
  </div>
);

ChartsHeader.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
  darkMode: PropTypes.bool,
};

ChartsHeader.defaultProps = {
  className: '',
  darkMode: false,
};

export default ChartsHeader;
