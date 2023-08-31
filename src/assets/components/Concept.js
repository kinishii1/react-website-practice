const Concept = (promps) => {
  return (
    <li className="concept">
      <img src={promps.image} alt={promps.title} />
      <h2>{promps.title}</h2>
      <p>{promps.description}</p>
    </li>
  );
};
export default Concept;
