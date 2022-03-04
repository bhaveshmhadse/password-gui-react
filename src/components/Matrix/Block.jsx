import React from "react";

const Block = ({ title, position, matrix, setMatrix, isSelected, password, setPassword }) => {
  const handleBlockClick = () => {
    let newMatrix = [...matrix];

    const [row, col] = position;

    newMatrix[row][col].isSelected = !isSelected;

    if (true) {
      setMatrix(newMatrix);
      setPassword(previousPassword => (previousPassword || "") + newMatrix[row][col].title);
    }
  };

  return (
    <div onClick={handleBlockClick} className={`bg-gray-100 h-auto p-6 m-2   rounded-md font-extrabold duration-75 hover:border-blue-700 hover:text-blue-700 hover:bg-blue-100 text-gray-500 lg:w-full ${isSelected ? "border-blue-700 text-blue-700 bg-blue-100 " : ""}`} style={{}}>
      {title || "Baray"}
    </div>
  );
};

export default Block;
