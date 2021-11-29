import React, { useState, Fragment } from 'react';
import { nanoid } from 'nanoid';
import data from './mockdata.json';
import ReadOnlyRow from './components/readOnlyRow';
import EditableRow from './components/editableRow';
import AddRow from './components/addRow';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';


const App = () => {


  const [books, setBooks] = useState(data);

  const [addFormData, setAddFormData] = useState({
    title: "",
    author: "",
    genre: "",
    progress: "",
    rating: "",
  });

  const [editFormData, setEditFormData] = useState({
    title: "",
    author: "",
    genre: "",
    progress: "",
    rating: "",
  });

  const [editBookId, setEditBookId] = useState(null);



  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);

  }

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    var defaultProgressValue = 'Want to read';
    var defaultRatingValue = '-';

    if (addFormData.progress === '') {
      addFormData.progress = defaultProgressValue;
    }

    if (addFormData.rating === '') {
      addFormData.rating = defaultRatingValue;
    }

    const newBook = {
      id: nanoid(),
      title: addFormData.title,
      author: addFormData.author,
      genre: addFormData.genre,
      progress: addFormData.progress,
      rating: addFormData.rating,
    }

    setAddRow(false);

    const newBooks = [...books, newBook];
    setBooks(newBooks);

  };


  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedBook = {
      id: editBookId,
      title: editFormData.title,
      author: editFormData.author,
      genre: editFormData.genre,
      progress: editFormData.progress,
      rating: editFormData.rating,
    }

    const newBooks = [...books];

    const index = books.findIndex((book) => book.id === editBookId);

    newBooks[index] = editedBook;

    setBooks(newBooks);
    setEditBookId(null);

  };

  const handleEditClick = (event, book) => {
    event.preventDefault();
    setEditBookId(book.id);

    const formValues = {
      title: book.title,
      author: book.author,
      genre: book.genre,
      progress: book.progress,
      rating: book.rating,
    }

    setEditFormData(formValues);
  }

  const onAddClick = () => setAddRow(true);

  const [showAddRow, setAddRow] = useState(false);

  const onCancelClick = () => setAddRow(false);

  const handleCancelClick = () => {
    setEditBookId(null);
  };


  const handleDeleteClick = (bookId) => {
    const newBooks = [...books];
    const index = books.findIndex((book) => book.id === bookId);

    newBooks.splice(index, 1);
    setBooks(newBooks);
  };


  return (
    <div className="container">
      <h1>My Books </h1>

      {showAddRow ? <AddRow
        handleAddFormChange={handleAddFormChange}
        handleAddFormSubmit={handleAddFormSubmit}
        onCancelClick={onCancelClick} /> : null}

      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Genre</th>
              <th>Progress</th>
              <th>Rating</th>
              <th className="plus">
                <button onClick={onAddClick}><AddOutlinedIcon /></button>
              </th>
            </tr>
          </thead>
          <tbody>
            {books.map(book => (
              <Fragment key={book.id}>
                {editBookId === book.id ?
                  (<EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}

                  />) :
                  (<ReadOnlyRow
                    book={book}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                  )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>
    </div>
  )
}

export default App;
