import { useState } from "react";

const Box = () => {
  const [arr, setArr] = useState(["", "", "", "", "", "", "", "", ""]);

  const [chance, setChance] = useState(true);

  const [winner, setWinner] = useState("");

  const checkWinner = (a) => {
    if (a[0] === a[1] && a[1] === a[2] && a[0] !== "0") {
      if (a[0] === "X") {
        setWinner("PLAYER 1");
      } else if (a[0] === "O") {
        setWinner("PLAYER 2");
      }
    } else if (a[3] === a[4] && a[4] === a[5] && a[3] !== "0") {
      if (a[3] === "X") {
        setWinner("PLAYER 1");
      } else if (a[3] === "O") {
        setWinner("PLAYER 2");
      }
    } else if (a[6] === a[7] && a[7] === a[8] && a[6] !== "0") {
      if (a[6] === "X") {
        setWinner("PLAYER 1");
      } else if (a[6] === "O") {
        setWinner("PLAYER 2");
      }
    } else if (a[0] === a[3] && a[3] === a[6] && a[0] !== "0") {
      if (a[0] === "X") {
        setWinner("PLAYER 1");
      } else if (a[0] === "O") {
        setWinner("PLAYER 2");
      }
    } else if (a[1] === a[4] && a[4] === a[7] && a[1] !== "0") {
      if (a[1] === "X") {
        setWinner("PLAYER 1");
      } else if (a[1] === "O") {
        setWinner("PLAYER 2");
      }
    } else if (a[2] === a[5] && a[5] === a[8] && a[2] !== "0") {
      if (a[2] === "X") {
        setWinner("PLAYER 1");
      } else if (a[2] === "O") {
        setWinner("PLAYER 2");
      }
    } else if (a[0] === a[4] && a[4] === a[8] && a[0] !== "0") {
      if (a[0] === "X") {
        setWinner("PLAYER 1");
      } else if (a[0] === "O") {
        setWinner("PLAYER 2");
      }
    } else if (a[2] === a[4] && a[4] === a[6] && a[2] !== "0") {
      if (a[2] === "X") {
        setWinner("PLAYER 1");
      } else if (a[2] === "O") {
        setWinner("PLAYER 2");
      }
    }
  };

  const handleClick = (index) => {
    if (winner !== "" || arr[index] !== "") {
      return;
    }
    const a = arr.map((x, i) => {
      if (i === index) {
        if (chance) {
          return "X";
        } else {
          return "O";
        }
      } else {
        return x;
      }
    });
    setArr(a);
    checkWinner(a);
    setChance(!chance);
  };

  const handleClear = () => {
    setWinner("");
    setChance(true);
    const a = arr.map((x) => {
      return "";
    });
    setArr(a);
  };

  return (
    <div className="main-box">
      <h1 className="heading">Winner:{winner}</h1>
      <div className="box">
        {arr.map((x, index) => {
          return (
            <button
              className="btn"
              key={index}
              onClick={() => handleClick(index)}
            >
              {x}
            </button>
          );
        })}
      </div>
      <button onClick={handleClear} className="reset">
        Reset
      </button>
    </div>
  );
};
export default Box;
