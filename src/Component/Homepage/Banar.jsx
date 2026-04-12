import React from 'react';

const Banar = () => {
    return (
        <div>
            <div className="hero bg-base-200 h-[500px] w-11/12 mx-auto my-10 rounded-lg p-10 ">
                <div className="hero-content flex-col lg:flex-row-reverse ">
                    <img
                        src="/book.png"
                        className="max-w-sm rounded-lg "
                    />
                    <div>
                        <h1 className="text-5xl font-bold">Books to freshen up </h1>
                         <h1 className="text-5xl font-bold">your bookshelf</h1>
                       
                        <button className="btn btn-success mt-10">View The List</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banar;