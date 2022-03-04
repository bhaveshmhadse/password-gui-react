import React, { useEffect, useState } from "react";

import Matrix from "./Matrix";

const Container = () => {
  let [password, setPassword] = useState("");

  let [matrix, setMatrix] = useState([
    [
      {
        isSelected: false,
        title: "ani",
      },
      {
        isSelected: false,
        title: "baray",
      },
      {
        isSelected: false,
        title: "mhane",
      },
    ],
    [
      {
        isSelected: false,
        title: "adika",
      },
      {
        isSelected: false,
        title: "akshya",
      },
      {
        isSelected: false,
        title: "athya",
      },
    ],
    [
      {
        isSelected: false,
        title: "mira bro",
      },
      {
        isSelected: false,
        title: "vaish",
      },
      {
        isSelected: false,
        title: "hushar",
      },
    ],
  ]);

  let [copyMatrix, setcopyMatrix] = useState([]);

  const authenticate = () => {
    const userPassword = localStorage.getItem("userpassword");

    if (JSON.stringify(userPassword) === JSON.stringify(password)) {
      alert("Authenticated!!! You are genuine");
      return;
    } else {
      alert("Please try again");
      reload();
    }
  };

  const generatePattern = () => {
    localStorage.setItem("userpassword", password);
    setTimeout(() => {
      setPassword("");
      reload();
    }, 500);

    alert("Password Saved Successfully!!");
  };

  class Shuffler {
    shuffleArray = array => {
      let modifiedArray = [...array];

      let currentIndex, randomizingIndex;

      for (currentIndex = modifiedArray.length - 1; currentIndex > 0; currentIndex--) {
        randomizingIndex = Math.floor(Math.random() * (currentIndex + 1));
        [modifiedArray[randomizingIndex], modifiedArray[currentIndex]] = [modifiedArray[currentIndex], modifiedArray[randomizingIndex]];
      }

      return modifiedArray;
    };

    getShuffledMatrix = matrix => {
      console.log("before ", matrix);
      let modifiedMatrix = [];

      for (const array of matrix) modifiedMatrix.push(this.shuffleArray(array));

      modifiedMatrix = this.shuffleArray(modifiedMatrix);
      console.log("after", modifiedMatrix);
      return modifiedMatrix;
    };
  }

  const reload = () => {
    window.location.reload();
  };

  const reset = () => {
    localStorage.clear();

    alert("Password has been reset. Enter new password pattern");
    reload();
  };

  useEffect(() => {
    setcopyMatrix(matrix);
    setMatrix(new Shuffler().getShuffledMatrix(matrix));
    console.log(copyMatrix);
  }, []);

  return (
    <div className='block items-center justify-center text-center'>
      <div className=' w-full flex justify-center items-center' style={{ height: "50vh" }}>
        <Matrix matrix={matrix} setMatrix={setMatrix} password={password} setPassword={setPassword} />
      </div>
      <div>
        <div className=' w-full flex justify-center items-center'>
          <button className='bg-white px-6 py-2 mx-2 rounded-md font-extrabold duration-300 hover:border-blue-700 hover:text-blue-700 hover:bg-blue-100 text-gray-500 ' onClick={generatePattern}>
            Generate Pattern
          </button>
          <button className='bg-white px-6 py-2 mx-2 rounded-md font-extrabold duration-300 hover:border-blue-700 hover:text-blue-700 hover:bg-blue-100 text-gray-500 ' onClick={authenticate}>
            Authenticate
          </button>
        </div>
        <div className='mt-2 w-full flex justify-center items-center'>
          <button className='bg-white px-6 py-2 mx-2 rounded-md font-extrabold duration-300 hover:border-red-700 hover:text-red-700 hover:bg-red-100 text-gray-500 ' onClick={reset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Container;
