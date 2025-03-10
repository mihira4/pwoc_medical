// import React from "react";
// import { FaUserAlt } from "react-icons/fa";
// import Service1 from "../components/Patient_Service1";
// import Service2 from "../components/Patient_Service2";
// import Service3 from "../components/Patient_Service3";
// import { signOut, useSession } from "next-auth/react";
// import LoginPage from "../components/LoginPage.jsx";
// import Link from "next/link";

// const Patient_Login = () => {
//   const { data: session } = useSession();
//   if (session) {
//     return (
//       <>
//         <div className="bg-slate-50 w-full h-screen">
//           <div className="w-full px-2 bg-white flex justify-between items-center">
//             <div className="flex justify-between">
//               {/* <div className="text-black lowercase"> */}
//               {/* <img
//                   src={session?.user?.image}
//                   alt=""
//                   style={{ width: "80px", height: "80px" }}
//                 />
//               </div>
//               <div className="text-black uppercase p-5 text-lg font-medium mt-2">
//                 <a href="">MY PROFILE: {session?.user?.email}</a>
//               </div> */}
//               <div className="text-4xl font-semibold text-slate-800 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-700 p-5">
//                 MediCare
//               </div>
//             </div>
//             <div className="flex justify-center">
//               <ul className="flex justify-between space-x-8 text-black uppercase p-5 mr-12 font-sans">
//                 <li className="text-lg font-medium ml-10">
//                   <Link href="/">Home</Link>
//                 </li>
//                 <li className="text-lg font-medium ml-10">
//                   <Link href="/ListDoctors">Find Doctors</Link>
//                 </li>
//                 <li className="text-lg font-medium ml-10">
//                   <Link href="/Messenger">CHAT CONSULT</Link>
//                 </li>
//                 <li className="text-lg font-medium ml-10">
//                   <Link href={`/patientProfile/${session?.user?.email}`}>
//                     Profile
//                   </Link>
//                 </li>
//                 <li className="text-lg font-medium ml-10">
//                   <button onClick={() => signOut()}>SIGN OUT</button>
//                 </li>
//               </ul>
//             </div>
//           </div>
//           <Service1 />
//           <Service2 />
//           <Service3 />
//         </div>
//       </>
//     );
//   } else {
//     return (
//       <div>
//         <LoginPage />
//       </div>
//     );
//   }
// };

// export default Patient_Login;

import React, { useState } from "react"; 
import { FaUserAlt } from "react-icons/fa";
import Service1 from "../components/Patient_Service1";
import Service2 from "../components/Patient_Service2";
import Service3 from "../components/Patient_Service3";
import HelpChat from "@/components/HelpChat";
import HelpButton from "@/components/HelpButton";
import { signOut, useSession } from "next-auth/react";
import LoginPage from "../components/LoginPage.jsx";
import Link from "next/link";

const Patient_Login = () => {
  const { data: session } = useSession();
  const [showPopup, setShowPopup] = useState(false); 

  if (session) {
    return (
      <>
        <div className="bg-slate-50 w-full h-screen">
          <div className="w-full px-2 bg-white flex justify-between items-center">
            <div className="flex justify-between">
              <div className="text-4xl font-semibold text-slate-800 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-700 p-5">
                MediCare
              </div>
            </div>
            <div className="flex justify-center">
              <ul className="flex justify-between space-x-8 text-black uppercase p-5 mr-12 font-sans">
                <li className="text-lg font-medium ml-10">
                  <Link href="/">Home</Link>
                </li>
                <li className="text-lg font-medium ml-10">
                  <Link href="/ListDoctors">Find Doctors</Link>
                </li>
                <li className="text-lg font-medium ml-10">
                  <Link href="/Messenger">CHAT CONSULT</Link>
                </li>
                <li className="text-lg font-medium ml-10">
                  <Link href={`/patientProfile/${session?.user?.email}`}>
                    Profile
                  </Link>
                </li>
                <li className="text-lg font-medium ml-10">
                  <button onClick={() => signOut()}>SIGN OUT</button>
                </li>
              </ul>
            </div>
          </div>

          {/* Services */}
          <Service1 />
          <Service2 />
          <Service3 />

          {/* Help Button / Popup (Fixed to Bottom-Right) */}
          <div className="fixed bottom-5 right-5 z-50">
            {showPopup ? (
              <HelpChat onClose={() => setShowPopup(false)} />
            ) : (
              <HelpButton onClick={() => setShowPopup(true)} />
            )}
          </div>
        </div>
      </>
    );
  } else {
    return <LoginPage />;
  }
};

export default Patient_Login;


