import React from 'react';
import { useLoaderData } from 'react-router';
import { getStoredBookList } from '../../utils/addToDb';

const Book = () => {
    const books = useLoaderData();
    const storedBookList = getStoredBookList();

    const readBookList = books.filter(book => storedBookList.includes(book.bookId));

    return (
        <div className="w-11/12 mx-auto my-10">
            <h1 className="text-3xl font-bold text-center mb-8">Listed Books</h1>

            <div className="space-y-6">
                {readBookList.map(book => (
                    <div key={book.bookId} className="card card-side bg-base-100 shadow-sm border p-4">
                        <figure className="bg-gray-100 rounded-xl p-4">
                            <img
                                src={book.image}
                                alt={book.bookName}
                                className="w-[120px] h-[170px] object-cover"
                            />
                        </figure>

                        <div className="card-body">
                            <h2 className="card-title text-2xl">{book.bookName}</h2>
                            <p>By : {book.author}</p>

                            <div className="flex flex-wrap gap-2">
                                {book.tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm"
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-6 text-sm text-gray-600">
                                <p>Year of Publishing: {book.yearOfPublishing}</p>
                                <p>Publisher: {book.publisher}</p>
                                <p>Page {book.totalPages}</p>
                            </div>

                            <hr />

                            <div className="flex gap-3 flex-wrap">
                                <button className="btn btn-soft btn-info">
                                    Category: {book.category}
                                </button>
                                <button className="btn btn-soft btn-warning">
                                    Rating: {book.rating}
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Book;