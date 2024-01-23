import "./App.css";
import { useState, useEffect, useRef, useCallback } from "react";

function App() {
  // * Variables
  const [length, setLength] = useState(1);
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState(true);
  const [specialCharacters, setSpecialCharacters] = useState(false);
  const [upperCase, setUpperCase] = useState(false);
  const [lowerCase, setLowerCase] = useState(false);
  const passwordRef = useRef(null);

  // * Function to copy password to clipboard with useCallback hook and also with useRef hook to select the password for better UI
  const copyPassToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password);
    // console.log(1)
  }, [password]);

  // * Function to copy password to clipboard without useCallback hook
  // function copyPassToClipboard() {
  //   passwordRef.current?.select();
  //   passwordRef.current?.setSelectionRange(0,17)
  //   window.navigator.clipboard.writeText(password);
  // }
  //* Function to generate password with useCallback hook
  const passwordGenerator = useCallback(() => {
    let password = "";

    let str = "";
    if (upperCase) str += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (lowerCase) str += "abcdefghijklmnopqrstuvwxyz";
    if (number) str += "0123456789";
    if (specialCharacters) str += "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    for (let i = 1; i <= length; i++) {
      password += str.charAt(Math.floor(Math.random() * str.length + 1));
    }
    // console.log(1)
    setPassword(password);
  }, [length, number, specialCharacters, upperCase, lowerCase]);

  // * useRef hook to track the useCallback hook in passwordGenerator function
  // const testRef = useRef(null);
  // testRef.current = passwordGenerator;
  // console.log(testRef.current)

  // * Function to generate password withiout useCallback hook
  // function passwordGenerator() {
  //   let password = "";
  //   let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  //   if (number) str += "0123456789";
  //   if (specialCharacters) str += "!@#$%^&*()_+~`|}{[]:;?><,./-=";
  //   for (let i = 1; i <= length; i++) {
  //     password += str.charAt(Math.floor(Math.random() * str.length + 1));
  //   }
  //   setPassword(password);
  // }
  // * useEffect hook to generate password
  useEffect(() => {
    if (password != "") passwordGenerator();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [length, number, specialCharacters, upperCase, lowerCase, passwordGenerator]);

  return (
    <>
      <div className="bg-gray-900 w-full h-screen flex justify-center ">
        <div className="h-56 w-4/5 bg-slate-400 mt-44 rounded-xl">
          <h1 className="text-center font-serif text-4xl font-bold text-gray-900 mt-8">
            Password Generator
          </h1>
          <div className="flex mt-6">
            <input
              type="text"
              className="w-3/4 h-12 rounded-lg ml-10  text-gray-800 text-xl font-serif pl-3"
              placeholder="Password"
              value={password}
              readOnly
              ref={passwordRef}
            />
            <button
              className="h-12 rounded-lg py-3 ml-3 px-5  bg-gray-900 text-gray-200 text-sm font-serif"
              onClick={copyPassToClipboard}
            >
              Copy
            </button>
            <button
              className="h-12 rounded-lg py-3 mx-4 px-5  bg-gray-900 text-gray-200 text-sm font-serif"
              onClick={passwordGenerator}
            >
              generate
            </button>
          </div>
          {/* creating a input type range form 1 to 100 */}
          <div className="flex ml-6 mt-4 ">
            <input
              className=" rounded-lg mx-5 cursor-pointer"
              type="range"
              min={1}
              max={50}
              value={length}
              id="myRange"
              onChange={(e) => {
                setLength(e.target.value);
                // console.log(e);
              }}
            />
            <label
              htmlFor="myRange"
              className="text-gray-900 text-xl font-serif mx-5 "
            >
              Length:{length}
            </label>
            <input
              type="checkbox"
              id="number"
              className="mx-2"
              defaultChecked={number}
              onChange={() => {
                setNumber((prev) => !prev);
              }}
            />
            <label
              htmlFor="number"
              className="mx-1 text-gray-900 text-xl font-serif "
            >
              Numbers
            </label>
            <input
              type="checkbox"
              id="character"
              className="mx-2 "
              defaultChecked={specialCharacters}
              onChange={() => {
                setSpecialCharacters((prev) => !prev);
              }}
            />
            <label
              htmlFor="character"
              className="mx-1 text-gray-900 text-xl font-serif"
            >
              Symbols
            </label>
            <input
              type="checkbox"
              id="upperCase"
              className="mx-2 "
              defaultChecked={upperCase}
              onChange={() => {
                setUpperCase((prev) => !prev);
              }}
            />
            <label
              htmlFor="upperCase"
              className="mx-1 text-gray-900 text-xl font-serif"
            >
              Upper Case
            </label>
            <input
              type="checkbox"
              id="lowerCase"
              className="mx-2 "
              defaultChecked={lowerCase}
              onChange={() => {
                setLowerCase((prev) => !prev);
              }}
            />
            <label
              htmlFor="lowerCase"
              className="mx-1 text-gray-900 text-xl font-serif"
            >
              Lower Case
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
