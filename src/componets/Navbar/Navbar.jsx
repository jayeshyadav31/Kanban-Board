  // Available grouping and ordering options
  import React, { useState } from 'react';
  import "./Navbar.css";
  
  function Navbar({ setGrouping, setOrdering }) {
    // Available grouping and ordering options
    const groupingOptions = ['Status', 'User', 'Priority'];
    const orderingOptions = ['Title', 'Priority'];
  
    // State to handle the visibility of the options dropdown
    const [optionsView, setOptionsView] = useState(false);
  
    // Function to toggle the dropdown options view
    const toggleOptions = () => setOptionsView(prevState => !prevState);
  
    return (
      <div className='navbar-main'>
        <div className='navbar-options-dropdown'>
          <button id="navbar-dropdown-button" onClick={toggleOptions}>
            <span style={{ fontSize: '18px', marginRight: '5px' }}>
                <img className='display-icon' src='\assets\Display.svg' ></img></span> 
            <p id="navbar-dropdown-text">Display</p>
            <span style={{ fontSize: '18px', marginLeft: '5px' }}>
                 <img className='display-icon' src='\assets\down.svg' ></img>
            </span>
          </button>
  
          {optionsView && (
            <div className='navbar-options'>
              <div className='navbar-option'>
                <label htmlFor="grouping">Grouping</label>
                <select
                  name="grouping"
                  id="grouping"
                  value={localStorage.getItem('grouping') || groupingOptions[0]}
                  style={{padding:'4px', borderRadius:'4px'}}
                  onChange={e => {
                    localStorage.setItem("grouping", e.target.value);
                    setGrouping(e.target.value);
                  }}
                >
                  {groupingOptions.map((group, key) => (
                    <option key={key} value={group}>
                      {group}
                    </option>
                  ))}
                </select>
              </div>
  
              <div className='navbar-option'>
                <label htmlFor="ordering">Ordering</label>
                <select
                  name="ordering"
                  id="ordering"
                  style={{padding:'4px', borderRadius:'4px'}}
                  value={localStorage.getItem('ordering') || orderingOptions[0]}
                  onChange={e => {
                    localStorage.setItem("ordering", e.target.value);
                    setOrdering(e.target.value);
                  }}
                >
                  {orderingOptions.map((order, key) => (
                    <option key={key} value={order}>
                      {order}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
  
  export default Navbar;
  