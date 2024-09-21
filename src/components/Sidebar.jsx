// src/components/Sidebar.jsx
import React from 'react';
import './Sidebar.css'; // Import the CSS file

const Sidebar = ({ heading, setHeading, description, setDescription, buttonText, setButtonText, image, setImage }) => {
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
            <h2>Menu</h2>
            <div className="input-group">
                <label htmlFor="heading">Heading:</label>
                <input
                    type="text"
                    id="heading"
                    value={heading}
                    onChange={(e) => setHeading(e.target.value)}
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
            <div className="input-group">
                <label htmlFor="image-upload">Upload Image:</label>
                <input
                    type="file"
                    id="image-upload"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="sidebar-input"
                />
            </div>
        </div>
    );
};

export default Sidebar;
