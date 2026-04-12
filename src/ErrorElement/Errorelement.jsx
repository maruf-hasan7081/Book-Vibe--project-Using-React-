import React from 'react';
import { Link, useRouteError } from 'react-router';

const Errorelement = () => {
    const error = useRouteError();

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white px-4">

            <div className="text-center max-w-xl bg-white/10 backdrop-blur-lg border border-white/10 p-10 rounded-3xl shadow-2xl">

                {/* Title */}
                <h1 className="text-6xl font-extrabold text-red-500 mb-4">
                    Oops!
                </h1>

                <h2 className="text-2xl font-semibold mb-3">
                    Something went wrong
                </h2>

                <p className="text-gray-300 mb-6">
                    The page you are looking for doesn’t exist or an error has occurred.
                </p>

                {/* Error Message */}
                <div className="bg-black/30 p-4 rounded-xl mb-6 border border-white/10">
                    <p className="text-sm text-gray-400">Error:</p>
                    <p className="text-red-400 font-medium mt-1">
                        {error?.statusText || error?.message || "Unknown error"}
                    </p>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">

                    <Link
                        to="/"
                        className="px-6 py-3 bg-red-500 hover:bg-red-600 rounded-xl font-semibold transition"
                    >
                        Go Home
                    </Link>

                    <button
                        onClick={() => window.history.back()}
                        className="px-6 py-3 border border-white/20 rounded-xl hover:bg-white/10 transition"
                    >
                        Go Back
                    </button>

                </div>

            </div>
        </div>
    );
};

export default Errorelement;