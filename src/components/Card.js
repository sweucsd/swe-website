import './src/components/Card.css';

function Card(props) {
  let align;
  if (props.right === true) {
    align = 'labelLeft'
  }
  else {
    align = 'labelRight'
  }
  return (
    <body>
        <div className="projectContainer">
          <p className={align}>{props.name}</p>
            {props.right ? <div className="Right Merriweather">{props.description}</div> : <div className="Left Merriweather">{props.description}</div>}
          
          
      </div>
    </body>
  );
}

export default Card;