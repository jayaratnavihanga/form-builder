import React from 'react';
import { FiSettings, FiX } from 'react-icons/fi';
import './EmailSidebar.css';

const EmailSidebar = ({ email, setEmail, contactMessage, setContactMessage, additionalInfo, setAdditionalInfo, onCloseClick }) => {
    return (
        <div className="email-sidebar">
            <div className="close-button" onClick={onCloseClick}>
                <FiX />
            </div>
            <div className="settings-header">
                <FiSettings className="settings-icon" />
                <span>Email Settings</span>
            </div>
            <div className="input-group">
                <label htmlFor="email">Email:</label>
                <div
                    className="editable-text sidebar-input"
                    contentEditable={true}
                    suppressContentEditableWarning={true}
                    onInput={(e) => setEmail(e.target.innerText)}
                    placeholder="Enter your email"
                >
                    {email || "Enter your email"}
                </div>
            </div>
            <div className="input-group">
                <label htmlFor="contact-message">Contact Message:</label>
                <div
                    className="editable-text sidebar-input"
                    contentEditable={true}
                    suppressContentEditableWarning={true}
                    onInput={(e) => setContactMessage(e.target.innerText)}
                    placeholder="This will be used to contact you for the next steps"
                >
                    {contactMessage || "This will be used to contact you for the next steps"}
                </div>
            </div>
            <div className="input-group">
                <label htmlFor="additional-info">Additional Info:</label>
                <div
                    className="editable-text sidebar-input"
                    contentEditable={true}
                    suppressContentEditableWarning={true}
                    onInput={(e) => setAdditionalInfo(e.target.innerText)}
                    placeholder="Type here..."
                >
                    {additionalInfo || "Type here..."}
                </div>
            </div>
        </div>
    );
};

export default EmailSidebar;
