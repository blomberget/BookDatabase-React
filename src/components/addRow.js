import React from 'react'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';



const AddRow = ({ handleAddFormSubmit, handleAddFormChange, onCancelClick }) => {
    return (
        <div id="addRow">
            <h3>Add a book</h3>
            <form onSubmit={handleAddFormSubmit}>
                <input
                    type="text"
                    name="title"
                    required="required"
                    placeholder="Enter book title"
                    onChange={handleAddFormChange}
                />
                <input
                    type="text"
                    name="author"
                    required="required"
                    placeholder="Enter book author"
                    onChange={handleAddFormChange}
                />
                <input
                    type="text"
                    name="genre"
                    required="required"
                    placeholder="Enter book genre"
                    onChange={handleAddFormChange}
                />
                <select
                    type="text"
                    name="progress"
                    required="required"
                    placeholder="Enter your progress"
                    defaultValue="Want to read"
                    onChange={handleAddFormChange}
                >
                    <option value="Want to read">Want to read</option>
                    <option value="Reading">Reading</option>
                    <option value="Read">Read</option>
                </select>
                <select
                    type="text"
                    name="rating"
                    required="required"
                    placeholder="Enter your rating"
                    defaultValue="-"
                    onChange={handleAddFormChange}
                >
                    <option value="-">-</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <button type="submit" ><CheckOutlinedIcon /></button>
                <button type="submit" onClick={onCancelClick}> <CloseOutlinedIcon /></button>
            </form>
        </div>
    )
}

export default AddRow;