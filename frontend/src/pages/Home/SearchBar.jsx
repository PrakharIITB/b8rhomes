const SearchBar = () => {
    return (
        <div className="w-full h-full">
        <div
          id="search-bar"
          className="w-3/5 rounded-full shadow-md border-2 m-auto mt-4 flex items-center justify-between px-3"
        >
          <div className="w-2/5 rounded-l-full py-2 px-4">
            <p className="text-sm font-[500]">Where</p>
            <input
              type="text"
              placeholder="Search Destination"
              className="outline-0 text-[0.8rem]"
            />
          </div>
          <div className="border-r-[1px] h-8 border-slate-500"></div>
          <div className="w-2/5 rounded-l-full py-2 px-4">
            <p className="text-sm font-[500]">Property type</p>
            <input
              type="text"
              placeholder="eg. Flat, Villa"
              className="outline-0 text-[0.8rem]"
            />
          </div>
          
          <div className="w-11 h-11 bg-red-500 rounded-full flex items-center justify-center cursor-pointer">
            <img src="./search.svg" width={"25px"} alt="search" />
          </div>
        </div>
      </div>

    )
}

export default SearchBar;