import React from 'react';
import PlaceholderLoading from 'react-placeholder-loading';

const CustomLoader = () => {
  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-center align-items-center">
        {[1, 2, 3].map((item, index) => (
          <div key={index} className="m-4">
            <div className="d-flex flex-column align-items-center">
              <PlaceholderLoading shape="circle" width={100} height={100} />
              <div className="mt-3">
                <PlaceholderLoading shape="rect" width={200} height={30} />
              </div>
              <div className="mt-3">
                <PlaceholderLoading shape="rect" width={150} height={30} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomLoader;
