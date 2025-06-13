     const Header = () => {
  return (
  <header className="bg-red-600 text-white shadow-md">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-md hover:bg-blue-700">
              <span className="material-icons">menu</span>
            </button>
            <div className="relative">
              <input
                className="bg-red-700 text-white placeholder-gray-200 rounded-md py-1.5 px-3 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Search..."
                type="text"
              />
              <span className="material-icons absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300">
                search
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <div className="text-sm font-semibold">Prime Sales Inc. - MANILA</div>
              <div className="text-xs">6/11/2025 2:26 PM</div>
            </div>
            <button className="p-2 rounded-full hover:bg-blue-700">
              <span className="material-icons">help_outline</span>
            </button>
            <button className="p-2 rounded-full hover:bg-blue-700">
              <span className="material-icons">notifications</span>
            </button>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-600">
                <span className="material-icons text-lg">person</span>
              </div>
              <div>
                <div className="text-sm font-semibold">Allen Paul Rebolla</div>
                <div className="text-xs">PSI Go Live</div>
              </div>
              <button className="p-1 rounded-md hover:bg-blue-700">
                <span className="material-icons text-sm">expand_more</span>
              </button>
            </div>
          </div>
        </div>
      </header>
  );}

  export default Header;


     
   