import React from "react";

import Block from "./Block";

const Matrix = ({ password, setPassword, matrix, setMatrix }) => {
  return (
    <div className='lg:w-1/2'>
      {matrix.map((eachArray, row) => {
        return (
          <div key={Math.random().toString()} className='grid grid-cols-3 w-full lg:gap-3'>
            {eachArray.map((eachBlock, col) => (
              <Block key={Math.random().toString()} title={eachBlock.title} position={[row, col]} matrix={matrix} setMatrix={setMatrix} isSelected={eachBlock.isSelected} password={password} setPassword={setPassword} />
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default Matrix;
