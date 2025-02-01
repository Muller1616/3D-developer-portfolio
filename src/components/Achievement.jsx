import React, { useState } from "react";
import { motion } from "framer-motion";
import { certificates } from "../constants"; // Ensure the certificates data is imported

const Achievements = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  console.log(certificates);

  return (
    <section className="py-16 px-6 ">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white">Achievements</h2>
        <p className="text-secondary mt-2">Here are some certificates I have been awarded from different platforms.</p>
      </div>

      <div className="mt-10 flex justify-center items-center flex-wrap gap-20">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-tertiary p-4 rounded-lg shadow-lg cursor-pointer"
            onClick={() => setSelectedCert(cert)}
          >
            <img src={cert.image} alt={cert.title} className="w-full h-48 object-cover rounded-lg" />
            <h3 className="text-lg font-semibold mt-3 text-white">{cert.title}</h3>
            <p className="text-sm text-secondary">{cert.platform}</p>
          </motion.div>
        ))}
      </div>

      {selectedCert && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4">
          <div className="bg-tertiary p-6 rounded-lg relative max-w-lg">
            <button className="absolute top-2 right-2 text-white text-xl" onClick={() => setSelectedCert(null)}>×</button>
            <img src={selectedCert.image} alt={selectedCert.title} className="w-full rounded-lg" />
            <h3 className="text-xl font-semibold mt-3 text-white">{selectedCert.title}</h3>
            <p className="text-sm text-secondary">{selectedCert.platform}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Achievements;
