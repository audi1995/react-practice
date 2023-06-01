import React from 'react';

function Button() {


    
function changeEvent(e) {
    console.log("hello sjhvdbcsn....", e)
}

  return (
    <div>
      <button onClick={changeEvent}>Hit me</button>
    </div>
  );
};

export default Button;
