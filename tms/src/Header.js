import React from 'react'
import './Header.css'
function Header() {
  return (
    <div className='Header'>

      <div className='header__nav'>
        <div className='header__alerts'>
          <img className='header__alerts_logo'
          src='https://cdn.icon-icons.com/icons2/1997/PNG/512/alarm_alert_bell_notification_ring_icon_123294.png'
          />
          
        </div>
        <div className='header__settings'>
          <img className='header__settings_logo'
          src='https://www.svgrepo.com/show/151444/settings-outlined-wheel.svg'/>

        </div>
        <div className='header__username'>
          <span>Username</span>
          
        </div>
      </div>
    </div>
  )
}

export default Header
