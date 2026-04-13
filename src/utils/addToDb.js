const getStoredBookList = () => {
    const storedBookList = localStorage.getItem('read-list');

    if (storedBookList) {
        return JSON.parse(storedBookList);
    }

    return [];
};

const addToStoredBookList = (id) => {
    const storedBookList = getStoredBookList();

    if (storedBookList.includes(id)) {
        alert('Already added to book list');
        return false;
    }

    storedBookList.push(id);
    localStorage.setItem('read-list', JSON.stringify(storedBookList));
    alert('Added to book list');

    return true;
};

export { addToStoredBookList, getStoredBookList };