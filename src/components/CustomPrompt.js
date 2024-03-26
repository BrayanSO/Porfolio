import React from 'react';
import '../Styles/CustomPrompt.css'

const CustomPrompt = ({ message, onConfirm, onCancel }) => {
  return (
    <div className="custom-prompt">
      <div className="prompt-content">
        <p>{message}</p>
        <div className="button-prompt">
          <button onClick={onConfirm}>Yes</button>
          <button onClick={onCancel}>No</button>
        </div>
      </div>
    </div>
  );
};

export default CustomPrompt;