"use client";

// function Message() {
//   return (
//     <div className="h-[400px] w-[300px] bg-white rounded-[2rem]">
//       <div className="h-[80px] w-[300px] bg-gray-100 flex flex-col justify-center items-center rounded-t-[2rem]">
//         <img
//           className="h-10 w-10 rounded-full"
//           src="https://media.licdn.com/dms/image/C4D03AQHMXaKYQBS4xg/profile-displayphoto-shrink_800_800/0/1600825079945?e=2147483647&v=beta&t=xeLXLoLsiuuTO93byBQEg46kr9gkrFrUWoqJYEBrc2E"
//           alt="User Profile"
//         />
//         <p className="text-[0.8rem] mt-1">Akshaj</p>
//       </div>
//       <div className="mt-10 ml-4 h-[40px] w-[150px] bg-gray-100 rounded-[2rem] text-sm flex justify-center items-center">
//         <p className="text-gray-800 text-[0.7rem]">How can I help you?</p>
//       </div>

//       <div className="mt-48 ml-[5rem] h-[40px] w-[200px] bg-gray-200 rounded-[2rem] text-sm flex justify-center items-center relative">
//         <input className="w-full h-full px-4 border border-gray-300 rounded-[2rem]"></input>
//         <button className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 bg-blue-500 rounded-full flex justify-center items-center">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="white"
//             className="h-4 w-4"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M5 10l7-7m0 0l7 7m-7-7v18"
//             />
//           </svg>
//         </button>
//       </div>
//     </div>
//   );
// }

function Information() {
  return (
    <div className="h-[400px] w-[300px] bg-gray-100 rounded-[2rem] flex flex-col justify-center">
      <div className="flex justify-between items-center mb-10 mt-[-3rem] w-full px-4">
        <div></div>
        <p className="text-[0.8rem] text-black ml-7">4:20pm</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <rect
            x="1"
            y="6"
            rx="2"
            ry="2"
            width="16"
            height="12"
            style={{ fill: "#ccc" }}
          />
          <rect
            x="3"
            y="8"
            rx="1"
            ry="1"
            width="12"
            height="8"
            style={{ fill: "#4caf50" }}
          />
          <rect x="18" y="9" width="3" height="6" style={{ fill: "#ccc" }} />
        </svg>
      </div>
      <div className="space-y-4">
        <div className="flex flex-col items-center">
          <img
            className="h-20 w-20 rounded-full transition-transform ease-in-out duration-300 md:hover:scale-105"
            src="https://media.licdn.com/dms/image/C4D03AQHMXaKYQBS4xg/profile-displayphoto-shrink_800_800/0/1600825079945?e=2147483647&v=beta&t=xeLXLoLsiuuTO93byBQEg46kr9gkrFrUWoqJYEBrc2E"
            alt="User Profile"
          />
          <p className="text-xl mt-2 font-semibold">Akshaj Tyagi</p>
        </div>
        <div className="flex flex-col justify-center items-center space-y-2">
          <div className="flex flex-col justify-center items-center w-60 h-14 bg-white rounded-[1rem]">
            <p className="ml-[-11rem] text-[0.8rem] font-semibold">Phone</p>
            <a href="tel:(973)-307-7381">
              <p className="text-[1rem] text-blue-600 cursor-pointer transition-transform ease-in-out duration-300 md:hover:scale-105">
                (973)-307-7381
              </p>
            </a>
          </div>
          <div className="mt-8 flex flex-col justify-center items-center w-60 h-14 bg-white rounded-[1rem]">
            <p className="ml-[-11rem] text-[0.8rem] font-semibold">Email</p>
            <a href="mailto:ak@chataudio.com">
              <p className="text-[1rem] text-blue-600 cursor-pointer transition-transform ease-in-out duration-300 md:hover:scale-105">
                ak@chataudio.com
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Contact() {
  return (
    <section className="flex flex-col justify-center items-center px-4 py-8 bg-white mt-8">
      <div className="flex flex-col items-center w-full max-w-[70rem]">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-10 text-center">
          Contact Us
        </h2>
        <div className="flex flex-col lg:flex-row bg-gradient-to-b from-sky-300 via-blue-500 to-purple-500 p-8 md:p-10 rounded-[3rem] justify-center items-center">
          {/* <Message /> */}
          <Information />
        </div>
      </div>
    </section>
  );
}
