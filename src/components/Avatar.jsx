const Avatar = ({image, firstname, lastname}) => (
  <div>
    <figure>
      <img src={image} alt="un simpson"></img>
      <figcaption>
        {firstname} - {lastname}
      </figcaption>
    </figure>
  </div>
);

export default Avatar;
