import React, { useState } from "react";

const big = {
  height: "200px",
};

export default function Converter(props) {
  const [text, setText] = useState("");
  const [word,setWord]=useState(0);

  const pressMe = function () {
    setText(text.toUpperCase());
  };

  const pressLow = function () {
    setText(text.toLowerCase());
  };

  const pressClear = function () {
    setText("");
    setWord(0);
  };

  const pressFirst = function () {
    let riskArr = [];
    let riskArr2 = [];
    let dota = "";
    riskArr = text.split(" ");
    for (let i = 0; i < riskArr.length; i++) {
      for (let j = 0; j < riskArr[i].length; j++) {
        if (j === 0) {
          let ata = riskArr[i][j].toUpperCase();
          dota = ata;
        } else if (j !== 0) {
          let ata = riskArr[i][j].toLowerCase();
          dota = dota + ata;
        }
      }

      riskArr2.push(dota);
    }

    let kString = "";
    kString = riskArr2.join(" ");
    setText(kString);
  };

  const pressLast = function () {
    let riskArr = [];
    let riskArr2 = [];
    let dota = "";
    riskArr = text.split(" ");
    for (let i = 0; i < riskArr.length; i++) {
      for (let j = 0; j < riskArr[i].length; j++) {
        if (j === 0) {
          let ata = riskArr[i][j].toLowerCase();
          dota = ata;
        } else if (j !== 0) {
          let ata = riskArr[i][j].toUpperCase();
          dota = dota + ata;
        }
      }

      riskArr2.push(dota);
    }

    let kString = "";
    kString = riskArr2.join(" ");
    setText(kString);
  };

  const pressAlter = function () {
    let riskArr = [];
    let riskArr2 = [];
    let dota = "";
    riskArr = text.split(" ");

    for (let i = 0; i < riskArr.length; i++) {
      for (let j = 0; j < riskArr[i].length; j++) {
        if (j === 0 || j % 2 === 0) {
          let ata = riskArr[i][j].toLowerCase();
          dota = dota + ata;
        } else if (j !== 0 || j % 2 !== 0) {
          let ata = riskArr[i][j].toUpperCase();
          dota = dota + ata;
        }
      }
      riskArr2.push(dota);
      dota = "";
    }

    let kString = "";
    kString = riskArr2.join(" ");
    setText(kString);
  };

  const pressOnChange = function (event) {
 
    setText(event.target.value);
    setWord(text.split(" ").length);
  };

  const inverseWords = function () {
    let dooArr = [];
    dooArr = text.split(" ");

    let dataString = "";
    dataString = dooArr.reverse().join(" ");

    setText(dataString);
  };
  const inverseChar = function () {
    let dooArr = [];
    let dooArr2 = [];
    dooArr = text.split(" ");

    let dataString = "";
    let revera = "";
    let rev = "";
    let x = dooArr.length;
    for (let i = 0; i < x; i++) {
      for (let j = 0; j < dooArr[i].length; j++) {
        rev = dooArr[i][dooArr[i].length - j - 1];
        revera = revera + rev;
      }
      dooArr2.push(revera);
      revera = "";
    }

    dataString = dooArr2.join(" ");

    setText(dataString);
  };

  const copyMe = function () {
    navigator.clipboard.writeText(text);
  };
  return (
    <>
      <div>
        <div className="container">
          <div className="container text-center">
            <h4 className="my-4">ENTER TEXT FOR ANALYSIS</h4>
          </div>
          <div className="form-group my-5">
            <label htmlFor="exampleFormControlTextarea1">
              {props.sideData}
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="8"
              value={text}
              onChange={pressOnChange}
            ></textarea>
          </div>

          {/* analysis data div starts here */}
          <div className="container">
            <span className="d-block p-2 text-bg-primary my-2" id="noOfChar">
              <p>The characters are {text.length}</p>
            </span>
            <span className="d-block p-2 text-bg-dark" id="noOfWords">
              <p>The words are {word}</p>
            </span>
            <div className="container">
              <h5 className="my-3 text-center">Preview</h5>
            </div>

            <span className="d-block p-2 text-bg-primary" style={big}>
              <p>{text}</p>
            </span>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-3 col-md-6">
                {" "}
                <button
                  className="btn btn-primary w-100 my-2"
                  onClick={pressMe}
                >
                  UpperCase
                </button>
              </div>
              <div className="col-12 col-lg-3 col-md-6">
                <button
                  className="btn btn-primary w-100 my-2"
                  onClick={pressLow}
                >
                  LowerCase
                </button>
              </div>
              <div className="col-12 col-lg-3 col-md-6">
                {" "}
                <button
                  className="btn btn-primary w-100 my-2"
                  onClick={pressFirst}
                >
                  First capital
                </button>
              </div>
              <div className="col-12 col-lg-3 col-md-6">
                {" "}
                <button
                  className="btn btn-primary w-100 my-2"
                  onClick={pressLast}
                >
                  First Not capital
                </button>
              </div>
            </div>

            <div className="row">
              <div className="col-12 col-lg-3 col-md-6">
                {" "}
                <button
                  className="btn btn-primary w-100 my-2"
                  onClick={pressAlter}
                >
                  Alter capital
                </button>
              </div>
              <div className="col-12 col-lg-3 col-md-6">
                {" "}
                <button
                  className="btn btn-primary w-100 my-2"
                  onClick={inverseWords}
                >
                  Inverse Words
                </button>
              </div>
              <div className="col-12 col-lg-3 col-md-6">
                {" "}
                <button
                  className="btn btn-primary w-100 my-2"
                  onClick={inverseChar}
                >
                  Inverse Characters
                </button>
              </div>
              <div className="col-12 col-lg-3 col-md-6">
                {" "}
                <button className="btn btn-primary w-100 my-2" onClick={copyMe}>
                  Copy
                </button>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <button
                  className="btn btn-primary w-100 my-2"
                  onClick={pressClear}
                >
                  Clear
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
