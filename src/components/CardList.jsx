import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCards, selectCards } from '../slice/cardSlice';
import data from '../data/data.json';
import Card from './Card';

const CardList = () => {
  const dispatch = useDispatch();
  const cards = useSelector(selectCards);

  useEffect(() => {
    if (data && data.length > 0) {
      dispatch(setCards(data));
    } else {
      console.error("No data available to set cards.");
    }
  }, [dispatch]);

  const cardElements = useMemo(() => 
    cards.map((item) => (
      <Card
        key={item.id}
        city={item.city}
        country={item.country}
        dates={item.dates}
        price_per_night={item.price_per_night}
        rating={item.rating}
        owner={item.owner}
        images={item.images}
      />
    )), [cards]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 justify-center items-center p-10 border-b-2">
      {cardElements}
    </div>
  );
};

export default CardList;
