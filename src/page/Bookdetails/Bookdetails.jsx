import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredBookList } from '../../utils/addToDb';

const Bookdetails = () => {
    const { id } = useParams();
    const books = useLoaderData();

    const book = books.find(book => book.bookId === parseInt(id));

    const handleMarkAsRead = (id) => {
        addToStoredBookList(id);
    };

    return (
        <div className="w-11/12 mx-auto my-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 bg-base-200 p-6 rounded-2xl">

                <div className="bg-gray-100 rounded-xl flex justify-center items-center p-6">
                    <img
                        src={book.image}
                        alt={book.bookName}
                        className="w-[250px] lg:w-[300px]"
                    />
                </div>

                <div>
                    <h1 className="text-3xl lg:text-4xl font-bold mb-2">
                        {book.bookName}
                    </h1>

                    <p className="text-gray-500 mb-3">
                        By : {book.author}
                    </p>

                    <p className="border-b pb-3 mb-4">
                        {book.category}
                    </p>

                    <p className="text-sm text-gray-600 mb-4">
                        <span className="font-bold">Review :</span> {book.review}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                        <span className="font-semibold mr-2">Tag</span>
                        {book.tags.map((tag, index) => (
                            <span
                                key={index}
                                className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>

                    <hr className="my-4" />

                    <div className="space-y-2 text-sm mb-6">
                        <p className="flex justify-between">
                            <span className="text-gray-500">Number of Pages:</span>
                            <span className="font-bold">{book.totalPages}</span>
                        </p>

                        <p className="flex justify-between">
                            <span className="text-gray-500">Publisher:</span>
                            <span className="font-bold">{book.publisher}</span>
                        </p>

                        <p className="flex justify-between">
                            <span className="text-gray-500">Year of Publishing:</span>
                            <span className="font-bold">{book.yearOfPublishing}</span>
                        </p>

                        <p className="flex justify-between">
                            <span className="text-gray-500">Rating:</span>
                            <span className="font-bold">{book.rating}</span>
                        </p>
                    </div>

                    <div className="flex gap-4">
                        <button
                            onClick={() => handleMarkAsRead(book.bookId)}
                            className="btn btn-outline"
                        >
                            Read
                        </button>

                        <button className="btn bg-[#50B1C9] text-white hover:bg-[#3aa0b8]">
                            Wishlist
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Bookdetails;