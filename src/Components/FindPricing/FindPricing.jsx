import React from 'react';
import './FindPricing.css';

function FindPricing() {
  const handleClick = (e) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const ripple = document.createElement('span');

    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height =`${size}px `;

    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    ripple.style.left =`${x}px`;
    ripple.style.top = `${y}px`;

    ripple.classList.add('ripple');

    const rippleContainer = button.querySelector('.ripple');
    if (rippleContainer) {
      rippleContainer.remove();
    }

    button.appendChild(ripple);
  };

  return (
    <div className='FindPricing'>
      <div className="container">
        <div className="leftcontainer">
          <h1>Choose a subscription that's right for you</h1>
          <p>Find your perfect balance of collaboration, security, and support with a C-suite Academy subscription.</p>
        </div>
        <div className="rightcontainer">
          <button onClick={handleClick}>Click here</button>
        </div>
      </div>
    </div>
  );
}

export default FindPricing;