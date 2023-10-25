import React from 'react';

const timeout = function (jsx, delayTime) {
  setTimeout(() => {
    jsx;
  }, delayTime)
}

export default timeout;