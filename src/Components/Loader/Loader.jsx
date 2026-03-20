import React from "react";

const Loader = ({ text = "Loading..." }) => {
    return (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50">

            {/* Spinner */}
            <div className="w-16 h-16 border-4 border-t-transparent rounded-full animate-spin"
                style={{
                    borderImage: "linear-gradient(135deg, #632EE3, #9F62F2) 1"
                }}
            />

            {/* Text */}
            <p
                className="mt-4 text-sm"
                style={{ color: "#627382" }}
            >
                {text}
            </p>
        </div>
    );
};

export default Loader;