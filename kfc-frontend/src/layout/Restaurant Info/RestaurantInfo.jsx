


import { useEffect, useState } from 'react';
import axios from 'axios'

  const RestaurantInfo = () => {
    const[data,setData] = useState([]);
  
    useEffect(()=>{
      axios.get('http://localhost:5000/restaurants')
      .then(res => setData(res.data))
  
    },[])

  return (
    <div className="bg-white shadow-md rounded-lg mb-6">
    {data.map(restaurant => { return (
    <>
    <img
      src={restaurant.image}
      alt={restaurant.name}
      className="w-full h-64 object-cover rounded-t-lg"
    />
    <div className="p-4">
      <h1 className="text-2xl font-bold text-red-600">{restaurant.name}</h1>
      <p className="text-gray-500 mt-1">{restaurant.promo}</p>
      <div className="flex items-center space-x-2 mt-2">
        <span className="bg-green-500 text-white text-sm px-2 py-1 rounded">
          {restaurant.rating} ★
        </span>
        <span className="text-gray-500">{restaurant.reviews}</span>
      </div>
    </div>
    </>
  )})}
  </div>)
};

export default RestaurantInfo;








