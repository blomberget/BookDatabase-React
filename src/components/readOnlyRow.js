import React from 'react';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

const ReadOnlyRow = ({ book, handleEditClick, handleDeleteClick }) => {
    return (
        <tr>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.genre}</td>
            <td>{book.progress}</td>
            <td>{book.rating}</td>
            <td>
                <button type="button" id="penna" onClick={(event) => handleEditClick(event, book)}><EditOutlinedIcon /></button>
                <button type="button"
                    onClick={() => handleDeleteClick(book.id)}><DeleteOutlinedIcon /></button>


            </td>
        </tr>
    )
}

export default ReadOnlyRow;



