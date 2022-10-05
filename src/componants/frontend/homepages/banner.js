import React from 'react'

const Banner = () => {
  return (
  <>
    <div className=" hero-section"
        style={{ width: "100%", display:"flex", justifyContent:"space-evenly", alignItems:'center' }}
      >
        <div className="Branding">
          <h1 className="Brand-name">Foodhub</h1>
        </div>
        <div classname="search-section">
          <div className="search-bar">
            <input type="search" placeholder='Search here your food' />
          <button className='search-btn'>Submit</button>
          </div>
        </div>
      </div>;
        <div className='bnr-para'
        
         style={{display:"flex",justifyContent:'center',fontSize:'2rem',color:'white'}}> Discover the best food & drink in Simdega</div>
        </>
  )
}

export default Banner