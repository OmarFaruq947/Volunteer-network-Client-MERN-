import React from 'react';

const DonateInistitute = () => {
    return (
        <>
         <div className="text-card">
          <div className="content">
            <div className="author-section">
              <a href="#" className="author-avator-link">
                <img
                  className="author-avator"
                  src="https://static01.nyt.com/vi-assets/images/share/1200x1200_t.png"
                  alt="The New York Times Logo"
                  width={40}
                />
              </a>
              <a href="#" className="author-name-link">
                <h6 className="author-name">THE NEW YORK TIMES</h6>
              </a>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              aliquam diam sit amet elit hendrerit rutrum. Nam egestas laoreet
            </p>
            <button>READ MORE</button>
          </div>
        </div>   
        </>
    );
};

export default DonateInistitute;