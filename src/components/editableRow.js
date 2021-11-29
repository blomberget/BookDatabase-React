import React from 'react';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';



const EditableRow = ({ editFormData, handleEditFormChange, handleCancelClick }) => {
    return (
        <tr>
            <td>
                <input
                    type="text"
                    name="title"
                    required="required"
                    placeholder="Enter book title"
                    value={editFormData.title}
                    onChange={handleEditFormChange}
                />
            </td>
            <td>
                <input
                    type="text"
                    name="author"
                    required="required"
                    placeholder="Enter book author"
                    value={editFormData.author}
                    onChange={handleEditFormChange}
                />
            </td>
            <td>
                <input
                    type="text"
                    name="genre"
                    required="required"
                    placeholder="Enter book genre"
                    value={editFormData.genre}
                    onChange={handleEditFormChange}
                />
            </td>
            <td>
                <select
                    type="text"
                    name="progress"
                    required="required"
                    placeholder="Enter your progress"
                    value={editFormData.progress}
                    onChange={handleEditFormChange}
                >
                    <option value="Want to read">Want to read</option>
                    <option value="Reading">Reading</option>
                    <option value="Read">Read</option>
                </select>

            </td>
            <td>
                <select
                    type="text"
                    name="rating"
                    placeholder="Enter your rating"
                    value={editFormData.rating}
                    onChange={handleEditFormChange}>
                    <option value="-">-</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </td>
            <td>
                <button type="submit"><CheckOutlinedIcon /></button>
                <button type="submit" onClick={handleCancelClick} ><CloseOutlinedIcon /></button>
            </td>
        </tr>
    )
}

export default EditableRow;