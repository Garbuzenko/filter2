import React from 'react';
import PropTypes from 'prop-types';

export default function Toolbar({ filters, selected, onSelectFilter }) {
  return (
    <div className="Toolbar">
      {filters.map((filter) => {
        return (
          <div
            key={filter}
            className={
              filter === selected
                ? 'Toolbar-button Toolbar-button-selected'
                : 'Toolbar-button'
            }
            onClick={() => onSelectFilter(filter)}
          >
            {filter}
          </div>
        );
      })}
    </div>
  );
}

Toolbar.propTypes = {
  filters: PropTypes.array,
  selected: PropTypes.string,
  onSelectFilter: PropTypes.func,
};

Toolbar.defaultProps = {
  filters: ['All'],
  selected: 'All',
  onSelectFilter: () => {},
};
