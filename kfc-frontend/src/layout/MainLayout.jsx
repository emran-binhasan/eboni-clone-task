
import Header from '../components/Header';

import LeftSidebar from './Left Sidebar/LeftSidebar';
import MenuList from './Menu List/MenuList';
import RestaurentInfo from './Restaurant Info/RestaurantInfo';
import RightSidebar from './Right Sidebar/RightSidebar';


const MainLayout = () => {
  return (
    <div className="min-h-screen bg-slate-100 flex flex-col">
      {/* Header */}
      <Header />

      {/* Body Layout: Sidebar + Main Content + Cart */}
      <div className="flex flex-1 w-11/12 mx-auto ">
        {/* Left Sidebar */}
        <LeftSidebar />

        {/* Main Content */}
        <main className="flex-1 p-6">
          <RestaurentInfo />
          <MenuList />
        </main>

        {/* Right Sidebar */}
        <RightSidebar />
      </div>
    </div>
  );
};

export default MainLayout;
