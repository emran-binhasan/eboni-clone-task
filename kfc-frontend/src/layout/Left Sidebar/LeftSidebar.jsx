import axios from 'axios';
import { useState, useEffect } from 'react';

const LeftSidebar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Replace with your API endpoint
    axios.get('http://localhost:5000/category')
    .then(res => setCategories(res.data))
  }, []);

  return (
    <aside className="bg-gray-100 w-64 p-4 hidden lg:block">
      <h2 className="text-lg font-bold mb-4">Menu</h2>
      <ul className="space-y-2">
        {categories.map((category) => (
          <li key={category.id}>
            <a
              href={`#${category.name}`} // Scroll-to links
              className="block text-gray-700 hover:bg-gray-200 rounded-lg p-2"
            >
              {category.name}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default LeftSidebar;
