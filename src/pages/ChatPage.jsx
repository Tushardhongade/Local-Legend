
import React from 'react';
import { Shield, MessageSquare, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

const ChatPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="px-4 py-4">
          <h1 className="text-xl font-bold text-gray-800">Messages</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6">
        {/* Sign In Required Card */}
        <div className="bg-white rounded-xl shadow-md p-6 max-w-md mx-auto mt-8 border border-gray-200">
          <div className="flex flex-col items-center text-center">
            {/* Icon */}
            <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mb-4">
              <Lock className="h-10 w-10 text-red-500" />
            </div>
            
            {/* Title */}
            <h2 className="text-lg font-bold text-gray-800 mb-2">Sign In Required</h2>
            
            {/* Description */}
            <p className="text-gray-600 mb-6">
              Please sign in with your account to access messages and chat with sellers.
            </p>
            
            {/* Sign In Button */}
            <Link
              to="/profile"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold text-sm flex items-center justify-center hover:opacity-90 transition-opacity"
            >
              <Shield className="h-4 w-4 mr-2" />
              Sign In
            </Link>
            
            {/* Additional Info */}
            <div className="mt-6 pt-6 border-t border-gray-100 w-full">
              <div className="flex items-start space-x-3">
                <MessageSquare className="h-5 w-5 text-blue-500 mt-0.5" />
                <div className="text-left">
                  <p className="text-sm font-medium text-gray-700">Benefits of signing in:</p>
                  <ul className="text-xs text-gray-600 mt-1 space-y-1">
                    <li>• Chat with sellers directly</li>
                    <li>• View your message history</li>
                    <li>• Get notified about new messages</li>
                    <li>• Save important conversations</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Empty State Illustration */}
        <div className="text-center mt-8">
          <div className="inline-block p-4 bg-gray-100 rounded-full mb-3">
            <MessageSquare className="h-12 w-12 text-gray-400" />
          </div>
          <p className="text-gray-500 text-sm">Your messages will appear here once you sign in</p>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;