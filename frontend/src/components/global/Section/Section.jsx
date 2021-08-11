import React from 'react';
import './Section.scss';

function Section(props) {
  const classes = 'section ' + props.className;

  return (
    <section className={classes}>
      <div className="section__inner">{props.children}</div>
    </section>
  );
}

export default Section;