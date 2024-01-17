// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import Card from "/components/Card";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);
 
  return (
    < >
      {/* <h1 className="bg-stone-600 text-blue-900 rounded-md p-5">
        Tailwind is here
      </h1> */}

      {/* <div className="flex font-serif bg-green-300">

        <div classNameName="flex-none w-52 relative">
          <img
            src="https://images.pexels.com/photos/757889/pexels-photo-757889.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            classNameName="absolute inset-0 w-full h-full object-cover rounded-lg"
            loading="lazy"
          />
        </div>
        <form classNameName="flex-auto p-6">
          <div classNameName="flex flex-wrap items-baseline">
            <h1 classNameName="w-full flex-none mb-3 text-2xl leading-none text-slate-900">
              DogTooth Style Jacket
            </h1>
            <div classNameName="flex-auto text-lg font-medium text-slate-500">
              $350.00
            </div>
            <div classNameName="text-xs leading-6 font-medium uppercase text-slate-500">
              In stock
            </div>
          </div>
          <div classNameName="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
            <div classNameName="space-x-1 flex text-sm font-medium">
              <label>
                <input
                  classNameName="sr-only peer"
                  name="size"
                  type="radio"
                  value="xs"
                  checked
                />
                <div classNameName="w-7 h-7 rounded-full flex items-center justify-center text-slate-500 peer-checked:bg-blue-500  peer-checked:text-slate-900">
                  XS
                </div>
              </label>
              <label>
                <input
                  classNameName="sr-only peer"
                  name="size"
                  type="radio"
                  value="s"
                />
                <div classNameName="w-7 h-7 rounded-full flex items-center justify-center text-slate-500 peer-checked:bg-blue-500 peer-checked:text-slate-900">
                  S
                </div>
              </label>
              <label>
                <input
                  classNameName="sr-only peer"
                  name="size"
                  type="radio"
                  value="m"
                />
                <div classNameName="w-7 h-7 rounded-full flex items-center justify-center text-slate-500 peer-checked:bg-blue-500 peer-checked:text-slate-900">
                  M
                </div>
              </label>
              <label>
                <input
                  classNameName="sr-only peer"
                  name="size"
                  type="radio"
                  value="l"
                />
                <div classNameName="w-7 h-7 rounded-full flex items-center justify-center text-slate-500 peer-checked:bg-blue-500 peer-checked:text-slate-900">
                  L
                </div>
              </label>
              <label>
                <input
                  classNameName="sr-only peer"
                  name="size"
                  type="radio"
                  value="xl"
                />
                <div classNameName="w-7 h-7 rounded-full flex items-center justify-center text-slate-500 peer-checked:bg-blue-500 peer-checked:text-slate-900">
                  XL
                </div>
              </label>
            </div>
          </div>
          <div classNameName="flex space-x-4 mb-5 text-sm font-medium">
            <div classNameName="flex-auto flex space-x-4 pr-4">
              <button
                classNameName="flex-none w-1/2 h-12 uppercase font-medium tracking-wider bg-slate-900 text-white"
                type="submit"
              >
                Buy now
              </button>
              <button
                classNameName="flex-none w-1/2 h-12 uppercase font-medium tracking-wider border border-slate-200 text-slate-900"
                type="button"
              >
                Add to bag
              </button>
            </div>
            <button
              classNameName="flex-none flex items-center justify-center w-12 h-12 text-slate-300 border border-slate-200"
              type="button"
              aria-label="Like"
            >
              <svg
                width="20"
                height="20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                />
              </svg>
            </button>
          </div>
          <p classNameName="text-sm text-slate-500">
            Free shipping on all continental US orders.
          </p>
        </form>
      </div> */}
      {/* <div className="relative h-[400px] w-[300px] rounded-md">
        <img
          src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
          alt="AirMax Pro"
          className="z-0 h-full w-full rounded-md object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-left">
          <h1 className="text-lg font-semibold text-white">Delba</h1>
          <p className="mt-2 text-sm text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            debitis?
          </p>
          <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
            View Profile →
          </button>
        </div>
      </div> */}
      <div className="flex gap-6 flex-wrap " > 

      <Card cardName = "hamza" btnText= "Click ME"/>
      <Card cardName = "haris" />
      
      </div>
      {/* These are way to pass arguments to components:
      to pass a number: cardNumber = {34}
      to pass an array: cardArr ={[22,23,45,56]}
      to pass a string: cardString = "hamza"
      to pass an object: myObj = {{name:"hamza",age:23,}}
      to pass an array of objects: myArr = {[{name:"hamza",age:23,},{name:"hamza",age:23,}]}
      to pass a function: myFunc = {()=>{console.log("hello")}}
      to pass a string Variable: cardString = {myString}
      to pass a number variable: cardNumber = {myNumber}
      to pass a array variable: cardArr = {myArr}
      to pass a object variable: myObj = {myObj}
      to pass a function variable: myFunc = {myFunc}
      */}
      
    </>

  );
}

export default App;
