import React from 'react';
import './styles/DetailView.css';

const DetailView = ({ pokemon }) => {
  const { id, name, sprite, type } = pokemon;

  if(id != null)
  {
    return (
        <section className="detail-view">
        <h1 className="data-tile">1st Gen Pokedex</h1>
        <img src={sprite} className='sprite-image' alt="sprite"/>
        <div className='data-wrapper'>
            <h1 className='data-name'>ID: {id} {name}</h1>
            <p className="data-char">Type: {type}</p>
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