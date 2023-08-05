/* eslint-disable react/react-in-jsx-scope */
import { BEERS } from "../beersdata";

const changeStyle=(e)=>{
 e.target.style.background = '#145434';
 e.target.style.color = "#ffeedf"
 e.target.style.borderColor="#ffeedf"
}
const originalStyle = (e)=>{
  e.target.style.background = '#ffeedf';
  e.target.style.color = '#145434';
  e.target.style.borderColor="#145434"
}

function BeerCards() {
  return (
    <>
      <div className="beersSection">
        {BEERS.map((beer, index) => (
          <div key={index} className="beerWrapper">
            <div className="number">{index + 1}</div>
            <div className="beerDataCard">
              <h3>{beer.title}</h3>
              <div><p className="sub">{beer.sub}</p>
              <p className="text">{beer.text}</p></div>
              
            </div>

            <button onMouseEnter={(e)=>{changeStyle(e)}} onMouseLeave={(e)=>{originalStyle(e)}}>
              details{" "}
              <span onMouseEnter={(e)=>{changeStyle(e)}} onMouseLeave={(e)=>{originalStyle(e)}}className="material-symbols-outlined arrow">
                arrow_forward
              </span>
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default BeerCards;
