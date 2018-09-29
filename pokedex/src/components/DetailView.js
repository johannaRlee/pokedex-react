import React from 'react';
import './styles/DetailView.css';

const DetailView = ({ pokemon }) => {
  const { id, name, sprite, type, weight, height } = pokemon;

  if(id != null)
  {
    return (
        <section className="detail-view">
        <h1 className="data-tile">1st Gen Pokedex</h1>
        <img src={sprite} className='sprite-image' alt="sprite"/>
        <div className='data-wrapper'>
            <h3 className='data-name'>ID: {id} {name}</h3>
            <p className="data-char">Type: {type}</p>
            <p className="data-char">Weight: {weight} kg</p>
            <p className="data-char">Height: {height} m</p>
        </div>
        </section>
    )
    }
    else
    {
  return (
        <section className="detail-view">
        <h1 className="data-tile">1st Gen Pokedex</h1>
        <div className='sprite-image'> Choose a pokemon!
        </div>
        </section>
    )
    }
}

export default DetailView;