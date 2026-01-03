
import React, { useState } from 'react';
import { Home, MessageCircle, FileText, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const BottomNav = () => {
  const location = useLocation();
  
  const tabs = [
    { id: 'home', icon: Home, label: 'Home', path: '/' },
    { id: 'chats', icon: MessageCircle, label: 'Chats', path: '/chats', badge: 1 },
    { id: 'posts', icon: FileText, label: 'Posts', path: '/posts' },
    { id: 'profile', icon: User, label: 'Profile', path: '/profile' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-3 z-50">
      <div className="flex justify-around items-center">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = location.pathname === tab.path;

          return (
            <Link
              key={tab.id}
              to={tab.path}
              className="flex flex-col items-center relative"
            >
              <div className="relative">
                {/* Icon Container with Animation */}
                <div className={`
                  p-2 rounded-full transition-all duration-300
                  ${isActive 
                    ? 'bg-blue-50 scale-110' 
                    : 'hover:bg-gray-50 hover:scale-105'
                  }
                `}>
                  <Icon 
                    className={`
                      h-5 w-5 transition-all duration-300
                      ${isActive 
                        ? 'text-teal-800 scale-110' 
                        : 'text-gray-500 hover:text-blue-500'
                      }
                    `}
                  />
                </div>

                {/* Notification Badge */}
                {tab.badge && (
                  <div className={`
                    absolute -top-1 -right-1 bg-red-500 text-white 
                    text-xs rounded-full h-5 w-5 flex items-center justify-center
                    transition-all duration-300
                    ${isActive ? 'scale-110' : ''}
                  `}>
                    {tab.badge}
                  </div>
                )}
              </div>

              {/* Label with Animation */}
              <span className={`
                text-xs mt-1 transition-all duration-300
                ${isActive 
                  ? 'text-teal-800 font-semibold translate-y-0' 
                  : 'text-gray-500 translate-y-1 opacity-80'
                }
              `}>
                {tab.label}
              </span>

              {/* Active Indicator */}
              {isActive && (
                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2">
                  <div className="w-10 h-1 bg-teal-800 rounded-full"></div>
                </div>
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;