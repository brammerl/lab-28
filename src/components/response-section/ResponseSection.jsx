import React from 'react';
import styles from './ResponseSection.css';
import ReactJson from 'react-json-view';

import PropTypes from 'prop-types'

const ResponseSection = ({display}) => {
  return (
    <div className={styles.ResponseSection}>
      Results
      <ReactJson src={display} displayDataTypes={false} />
    </div>
  )
}

ResponseSection.propTypes = {
  display: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired
};

export default ResponseSection;