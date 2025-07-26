import React from 'react';
// Make sure this import path is correct and Icons.jsx exists
import { MessageSquareIcon } from './common/Icons.jsx';

const ChatButton = () => (
    <div className="fixed bottom-5 right-5 z-50">
        <button className="bg-accent text-white rounded-full p-4 shadow-lg hover:bg-blue-600 transition-transform transform hover:scale-110">
            {/* The MessageSquareIcon component expects to be a child of an Icon component, which is not present here. Let's wrap it. */}
            <span className="w-6 h-6">
                <MessageSquareIcon />
            </span>
        </button>
    </div>
);

// This line is crucial and fixes the error
export default ChatButton;
