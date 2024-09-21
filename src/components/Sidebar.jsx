// src/components/Sidebar.jsx
import React from 'react';
import { FiSettings, FiUpload, FiX } from 'react-icons/fi'; // Import the close icon
import './Sidebar.css';

const Sidebar = ({ title, setTitle, description, setDescription, buttonText, setButtonText, image, setImage, onCloseClick }) => {
    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="sidebar">
            <div className="close-button" onClick={onCloseClick}>
                <FiX className="close-icon" />
            </div>
            <div className="settings-header">
                <FiSettings className="settings-icon" />
                <span>Settings</span>
            </div>
            <div className="input-group">
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="sidebar-input"
                />
            </div>
            <div className="input-group">
                <label htmlFor="description">Description:</label>
                <input
                    type="text"
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="sidebar-input"
                />
            </div>
            <div className="input-group">
                <label htmlFor="button-text">Button Text:</label>
                <input
                    type="text"
                    id="button-text"
                    value={buttonText}
                    onChange={(e) => setButtonText(e.target.value)}
                    className="sidebar-input"
                />
            </div>
            <button
                className="upload-button"
                onClick={() => document.getElementById('file-upload').click()} // Trigger the hidden file input
            >
                <FiUpload className="upload-icon" />
                Upload
            </button>
            <input
                type="file"
                id="file-upload"
                accept="image/*"
                onChange={handleImageUpload}
                style={{ display: 'none' }} // Hide the default file input
            />
        </div>
    );
};

export default Sidebar;
