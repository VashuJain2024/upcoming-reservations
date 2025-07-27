import React from "react";
import { motion } from "framer-motion";
import reservations from "../data/reservations";

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.1,
            type: "spring",
            stiffness: 60,
        },
    }),
};

const Reservations = () => {
    const handleCancel = (id) => {
        console.log("Cancel reservation:", id);
    };

    return (
        <div className="max-w-4xl mx-auto p-4">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-bold mb-6 text-center"
            >
                Upcoming Reservations
            </motion.h2>

            <div className="grid gap-4">
                {reservations.map((res, i) => (
                    <motion.div
                        key={res.id}
                        custom={i}
                        initial="hidden"
                        animate="visible"
                        variants={cardVariants}
                        whileHover={{ scale: 1.02, boxShadow: "0px 8px 20px rgba(0,0,0,0.1)" }}
                        className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all duration-300"
                    >
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800">{res.venueName}</h3>
                            <p className="text-sm text-gray-600">
                                {res.date.trim()} at {res.time} • Party of {res.partySize}
                            </p>
                            <p className={`text-sm font-medium ${res.status === "Pending" ? "text-yellow-500" : "text-green-600"}`}>
                                {res.status}
                            </p>
                        </div>
                        <motion.button
                            whileTap={{ scale: 0.95 }}
                            onClick={() => handleCancel(res.id)}
                            className="bg-red-500 hover:bg-red-600 text-white py-2 px-5 rounded-md transition-colors"
                        >
                            Cancel
                        </motion.button>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Reservations;
