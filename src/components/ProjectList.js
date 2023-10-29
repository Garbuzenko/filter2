import React from 'react';
import PropTypes from 'prop-types';

export default function ProjectList({ projects }) {
  return (
    <div className="ProjectList">
      {projects.map((project) => {
        return (
          <div key={Math.random()}>
            <img src={project.img} alt={project.category} />
          </div>
        );
      })}
    </div>
  );
}

ProjectList.propTypes = {
  projects: PropTypes.array,
};
