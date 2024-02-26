import React from 'react';

function Search() {
  return (
    <>
    <div style={{width:"100%",paddingLeft:"9%"}} className='bg-gray-200'>
        <form style={{width: "84%"}}>
          <div className="relative">
          <i className="absolute fa fa-search text-gray-400 top-5 left-4"></i>
          <input type="text" className="bg-white h-14 w-full px-12 rounded-lg focus:outline-none" placeholder='Search here' name=""/>
          <span className="absolute top-4 right-5 border-l pl-4"><i className="fa fa-filter text-gray-500 hover:text-green-500 hover:cursor-pointer"></i></span>
        </div>
        </form>
    </div>
    </>
  )
}

export default Search