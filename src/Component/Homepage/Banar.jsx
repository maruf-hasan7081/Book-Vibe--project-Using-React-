import React from 'react';


const Banar = () => {
    return (
        <div>
            <div to="/books" className="hero bg-base-200 min-h-[400px] lg:min-h-[500px] w-11/12 mx-auto my-10 rounded-lg px-6 py-10 lg:px-12">
                <div className="hero-content flex-col lg:flex-row-reverse gap-8 lg:gap-16">
                    <img
                        src="/book.png"
                        className="w-[220px] sm:w-[280px] md:w-[320px] lg:w-[380px] rounded-lg"
                        alt="Book"
                    />

                    <div className="text-center lg:text-left">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug">
                            Books to freshen up
                        </h1>
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug">
                            your bookshelf
                        </h1>

                        <button className="btn btn-success mt-6 lg:mt-10">
                            View The List
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banar;