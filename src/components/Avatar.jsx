import React, { useState } from 'react';

const Avatar = ({simpsons}) => {
  const [donut, setDonut] = useState(0);

  return (
    simpsons.map((simpson) => (
  <div key="simpson.name">
    <figure>
      <img src={simpson.image} alt="simpson.name"></img>
      <figcaption>
        {simpson.name} : {simpson.donut}
      </figcaption>
      <button onClick={() => setDonut(simpson.donut++)}>🍩</button>
    </figure>
  </div>
    ))
);
  }

export default Avatar;
