import React from 'react';

const Toggle = ({ toggleTheme }) => {
  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="m-4 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
    >
      Switch
    </button>
  );
};

export default Toggle;
