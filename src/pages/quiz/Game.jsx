export function Game({ question, onclickVariant, persenTage, step }) {
  return (
    <>
      <div className="progress">
        <div
          style={{ width: `${persenTage}%` }}
          className="progress__inner"
        ></div>
      </div>
      <h1>
        {step + 1} &nbsp;
        {question.title}
      </h1>
      <ul>
        {question.variants.map((item, i) => (
          <li onClick={() => onclickVariant(i)} key={i}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
