
import React, { useState } from 'react';
import { 
  Wifi, 
  ChevronRight, 
  Heart, 
  Settings, 
  HelpCircle, 
  FileText, 
  LogOut,
  Shield,
  Smartphone,
  User as UserIcon
} from 'lucide-react';

const ProfilePage = () => {
  const [isGuest, setIsGuest] = useState(true);

  const handleLogin = () => {
    setIsGuest(false);
  };

  const handleLogout = () => {
    setIsGuest(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      {/* Header with Hotspot Info */}
      <div className="bg-gradient-to-r from-teal-800 to-purple-600 text-white p-4">
        
        
        <div className="text-center py-4">
          {isGuest ? (
            <>
              <div className="w-20 h-20 bg-white/20 rounded-full mx-auto mb-3 flex items-center justify-center">
                <UserIcon className="h-10 w-10" />
              </div>
              <h1 className="text-xl font-bold">Guest User</h1>
              <p className="text-sm opacity-90 mt-1">Sign in to access all features</p>
            </>
          ) : (
            <>
              <div className="w-20 h-20 bg-white rounded-full mx-auto mb-3"></div>
              <h1 className="text-xl font-bold">John Doe</h1>
              <p className="text-sm opacity-90 mt-1">john@example.com</p>
            </>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="p-4">
        {/* Guest User Banner */}
        {isGuest ? (
          <div className="bg-white rounded-xl shadow-sm p-4 mb-4 border border-gray-200">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <UserIcon className="h-6 w-6 text-teal-800" />
                </div>
              </div>
              <div className="ml-3 flex-1">
                <h2 className="font-semibold text-gray-800">A Guest Account</h2>
                <p className="text-sm text-gray-600 mt-1">
                  Sign in to save your wishlist, access seller features, and get personalized recommendations.
                </p>
                <button 
                  onClick={handleLogin}
                  className="mt-3 w-full bg-gradient-to-r from-teal-800 to-purple-600 text-white py-3 rounded-lg font-medium text-sm flex items-center justify-center hover:opacity-90 transition-opacity"
                >
                  <Shield className="h-4 w-4 mr-2" />
                  SIGN IN TO CONTINUE
                </button>
                
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <button className="w-full bg-green-500 text-white py-3 rounded-lg font-medium text-sm flex items-center justify-center hover:bg-green-600 transition-colors">
                    <Smartphone className="h-4 w-4 mr-2" />
                    Sign In with WhatsApp
                  </button>
                  <p className="text-xs text-gray-500 text-center mt-2">
                    Quick & secure verification
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-sm p-4 mb-4 border border-gray-200">
            <div className="text-center py-2">
              <p className="text-green-600 font-medium mb-2">✓ You are signed in</p>
              <p className="text-sm text-gray-600">Access all features now</p>
            </div>
          </div>
        )}

        {/* Account Section */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-4">
          <div className="px-4 py-3 border-b border-gray-100">
            <h2 className="font-semibold text-gray-800">ACCOUNT</h2>
          </div>
          
          <div className="divide-y divide-gray-100">
            {/* My Wishlist */}
            <button className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center mr-3">
                  <Heart className="h-5 w-5 text-red-500" />
                </div>
                <div className="text-left">
                  <p className="font-medium text-gray-800">My Wishlist</p>
                  <p className="text-sm text-gray-500">Items you saved</p>
                </div>
              </div>
              <ChevronRight className="h-5 w-5 text-gray-400" />
            </button>

            {/* Settings */}
            <button className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mr-3">
                  <Settings className="h-5 w-5 text-blue-500" />
                </div>
                <div className="text-left">
                  <p className="font-medium text-gray-800">Settings</p>
                  <p className="text-sm text-gray-500">Preferences & account</p>
                </div>
              </div>
              <ChevronRight className="h-5 w-5 text-gray-400" />
            </button>

            {/* Help & Support */}
            <button className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center mr-3">
                  <HelpCircle className="h-5 w-5 text-green-500" />
                </div>
                <div className="text-left">
                  <p className="font-medium text-gray-800">Help & Support</p>
                  <p className="text-sm text-gray-500">Chat with us on WhatsApp</p>
                </div>
              </div>
              <ChevronRight className="h-5 w-5 text-gray-400" />
            </button>

            {/* Privacy Policy */}
            <button className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center mr-3">
                  <FileText className="h-5 w-5 text-purple-500" />
                </div>
                <div className="text-left">
                  <p className="font-medium text-gray-800">Privacy Policy</p>
                  <p className="text-sm text-gray-500">Terms and conditions</p>
                </div>
              </div>
              <ChevronRight className="h-5 w-5 text-gray-400" />
            </button>

            {/* Logout/Login Button */}
            {isGuest ? (
              <button 
                onClick={handleLogin}
                className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors text-teal-800"
              >
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mr-3">
                    <UserIcon className="h-5 w-5 text-blue-500" />
                  </div>
                  <div className="text-left">
                    <p className="font-medium">Sign In</p>
                    <p className="text-sm">Access your account</p>
                  </div>
                </div>
                <ChevronRight className="h-5 w-5" />
              </button>
            ) : (
              <button 
                onClick={handleLogout}
                className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors text-red-600"
              >
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center mr-3">
                    <LogOut className="h-5 w-5 text-red-500" />
                  </div>
                  <div className="text-left">
                    <p className="font-medium">Logout</p>
                    <p className="text-sm">Sign out of your account</p>
                  </div>
                </div>
                <ChevronRight className="h-5 w-5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;