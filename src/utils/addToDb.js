import { toast } from "react-toastify";

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
        toast.error('Already added to book list');
        return false;
    }

    storedBookList.push(id);
    localStorage.setItem('read-list', JSON.stringify(storedBookList));
    toast.success('Added to book list');

    return true;
};

export { addToStoredBookList, getStoredBookList };