import React from "react";
import "../Components/Coin.css";

const Coin = ({
  icon,
  coinName,
  coinSymbol,
  price,
  marketCap,
  priceChange,
}) => {
  return (
    <div className="coinContainer">
      <div className="coinRow">
        <div className="coinData">
          <div className="coin">
            <img src={icon} />
            <h1 className="coinName">{coinName}</h1>
            <p className="coinSymbol">{coinSymbol}</p>
            <p className="coinPrice">$ {price.toFixed(2)}</p>
            {priceChange < 0 ? (
              <p className="priceChange red">{priceChange.toFixed(2)}%</p>
            ) : (
              <p className="priceChange green">{priceChange.toFixed(2)}%</p>
            )}
            <p className="coinVolume">$ {marketCap.toLocaleString()}</p>
            <button>More Info</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coin;
