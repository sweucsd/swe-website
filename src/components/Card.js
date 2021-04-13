import '../App.css';

function Card(props) {
  let align;
  let wordA;
  if (props.right === true) {
    align = 'labelRight'
  }
  else {
    align = 'labelLeft'
  }
  return (
    <body>
        <div className="projectContainer">
          <p className={align}>{props.name}</p>
            <div className="Left Merriweather">{props.description}</div>
            <div className="Right Merriweather">{props.description}</div>
          
          
      </div>
    </body>
  );
}

export default Card;