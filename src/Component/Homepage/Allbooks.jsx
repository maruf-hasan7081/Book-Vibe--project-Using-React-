import React, { use } from 'react';
import { FaRegStar } from 'react-icons/fa';
import { Link } from 'react-router';

const booksData = fetch('/booksData.json').then(res => res.json());

const Allbooks = () => {

    const data = use(booksData);

    console.log(data);



    return (
        <div>
    <h1 className='font-bold text-3xl text-center mt-10'>Books</h1>

    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-11/12 mx-auto my-10'>
        {data.map(book => (
            <Link to={`/Bookdetails/${book.bookId}`} className="card w-full bg-base-100 shadow-sm rounded-2xl overflow-hidden">
                <figure className="px-5 pt-5">
                    <img
                        className='h-[220px] w-full object-cover rounded-xl'
                        src={book.image}
                        alt={book.bookName}
                    />
                </figure>

                <div className="card-body">
                    <div className='flex flex-wrap gap-2 mb-2'>
                        {book.tags.map((tag, index) => (
                            <div
                                className="badge badge-outline bg-success/10 text-success border-success px-3 py-3"
                                key={index}
                            >
                                {tag}
                            </div>
                        ))}
                    </div>

                    <h2 className='text-xl font-bold'>{book.bookName}</h2>
                    <p className='text-gray-500'>By: {book.author}</p>

                    <div className="border-t border-dashed my-2"></div>

                    <div className="card-actions justify-between items-center">
                        <div className='text-sm font-medium text-gray-600'>
                            {book.category}
                        </div>

                        <div className="text-lg font-bold flex items-center gap-1">
                            {book.rating}
                            <FaRegStar />
                        </div>
                    </div>
                </div>
            </Link>
        ))}
    </div>
</div>
    );
};

export default Allbooks;