import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function VoteLanding() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleVoteClick = () => {
    setLoading(true);

    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-600 text-white">
         <div className="flex justify-center pb-6">
    
    </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-white/10 backdrop-blur-xl p-10 rounded-3xl shadow-2xl max-w-md text-center m-1"
      >
        {/* 🔥 Competition Logo */}
        <motion.div
          initial={{ y: -15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center mb-4"
        >
       
        </motion.div>

        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-3xl font-bold mb-4"
        >
          🌍 International Model Competition
        </motion.h1>

     <p className="text-white/90 mb-6">
  Vote for your favorite model and enter for a chance to win an exclusive award presented to the Best Arabic Model.
</p>


        <motion.button
          whileHover={!loading ? { scale: 1.05 } : {}}
          whileTap={!loading ? { scale: 0.95 } : {}}
          onClick={handleVoteClick}
          disabled={loading}
          className="w-full py-3 rounded-full bg-white text-purple-600 font-semibold shadow-lg flex items-center justify-center"
        >
          {loading ? (
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 border-2 border-purple-600 border-t-transparent rounded-full animate-spin"></div>
              Loading...
            </div>
          ) : (
            "Vote for your favorite model"
          )}
        </motion.button>
      </motion.div>
    </div>
  );
}
