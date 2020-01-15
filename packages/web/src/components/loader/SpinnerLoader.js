import React from "react";
import Loader from 'react-loader-spinner';


const SpinnerLoader = ({ }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
      <Loader
        type="BallTriangle"
        color="#44f804"
        height={150}
        width={150}
        timeout={3000} //3 secs
      />
    </div>
  );
};

export default SpinnerLoader;
