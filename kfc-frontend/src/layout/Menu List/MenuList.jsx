import React, { useState, useEffect } from 'react';

const MenuList = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    // Replace with your API endpoint
    fetch('/')
      .then((response) => response.json())
      .then((data) => setMenuItems(data));
  }, []);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Menu</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className="bg-white p-4 shadow-md rounded-lg flex items-center space-x-4"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-16 h-16 object-cover rounded-lg"
            />
            <div>
              <h3 className="text-lg font-bold">{item.name}</h3>
              <p className="text-gray-500">${item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuList;
