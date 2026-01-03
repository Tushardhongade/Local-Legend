
import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Filter, 
  Plus, 
  MoreVertical,
  Camera,
  Image,
  X,
  User
} from 'lucide-react';

const PostsPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [showPhotoModal, setShowPhotoModal] = useState(false);

  const posts = [
    {
      id: 1,
      username: 'User 2/58',
      time: '1h ago',
      content: 'Test',
      location: '',
      callable: false,
      hasImage: false
    },
    {
      id: 2,
      username: 'User 0503',
      time: '15h ago',
      content: 'I am full Stack developer and I am fresher so I want a job',
      location: '',
      callable: false,
      hasImage: false
    },
    {
      id: 3,
      username: 'Janani',
      time: '18h ago',
      content: 'Women denim shirts',
      location: '',
      callable: false,
      hasImage: true
    },
    {
      id: 4,
      username: 'User',
      time: '1d ago',
      content: 'Hello',
      location: '',
      callable: false,
      hasImage: false
    },
    {
      id: 5,
      username: 'User 4508',
      time: '23h ago',
      content: 'Web development service',
      location: 'Indrapuri, Bhopal, Madhya Pradesh',
      callable: false,
      hasImage: false
    },
    {
      id: 6,
      username: 'Mehak',
      time: '1d ago',
      content: 'Blog / Article writer. Anyone who is interested in research smooth in English speaking Ms word skill',
      location: 'Sodawala Lane, Borivali West, Mumbai, Maharashtra',
      callable: false,
      hasImage: false
    },
    {
      id: 7,
      username: 'Seema Yekhande',
      time: '16h ago',
      content: 'Sd',
      location: 'VMakrand Ghnekar Marg, Vile Parle, Mumbai...',
      callable: false,
      hasImage: false
    },
    {
      id: 8,
      username: 'Shalini',
      time: '17m ago',
      content: 'Late well News Paper distribution',
      location: 'Chitrakoot, Madhya Pradesh',
      callable: false,
      hasImage: false
    },
    {
      id: 9,
      username: 'Professional Title Options',
      time: '2d ago',
      content: 'Creative Graphic Designer & Video Editor Modern Graphic Design Template',
      location: '',
      callable: false,
      hasImage: false
    },
    {
      id: 10,
      username: 'Rohan Tution Classes',
      time: '2d ago',
      content: 'Hello Everyone, if you are looking for nearby home tution classes in gurgaon sector 27.',
      location: 'Location detected',
      callable: true,
      phone: '& Call',
      hasImage: false
    },
    {
      id: 11,
      username: 'User 8801',
      time: '1d ago',
      content: 'I need a web developer for my shop.',
      location: 'Dwarka, New Delhi, Delhi',
      callable: true,
      phone: '& Call',
      hasImage: false
    },
    {
      id: 12,
      username: 'User',
      time: '1h ago',
      content: 'CLASS 9 SCIENCE (NCERT)',
      location: 'Ghaziabad, Uttar Pradesh',
      callable: false,
      hasImage: false
    }
  ];

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'my-posts', label: 'My Posts' },
    { id: 'nearby', label: 'Nearby' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold text-gray-800">Posts</h1>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">12:36</span>
              <div className="w-6 h-6 bg-gray-300 rounded"></div>
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-1">Posts from nearby users</p>
        </div>

        {/* Filter Tabs */}
        <div className="px-4 pb-2">
          <div className="flex space-x-2 overflow-x-auto pb-2">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`
                  px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap
                  ${activeFilter === filter.id
                    ? 'bg-teal-800 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }
                `}
              >
                {filter.label}
              </button>
            ))}
            
            {/* Distance Filter */}
            <button className="flex items-center px-4 py-2 bg-gray-100 rounded-full text-sm font-medium hover:bg-gray-200">
              <Filter className="h-4 w-4 mr-1" />
              All Distances
            </button>
          </div>
        </div>
      </div>

      {/* Posts List */}
      <div className="p-4 space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            {/* Post Header */}
            <div className="p-4 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                    <User className="h-5 w-5 text-teal-800" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">{post.username}</h3>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-3 w-3 mr-1" />
                      {post.time}
                    </div>
                  </div>
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                  <MoreVertical className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Post Content */}
            <div className="p-4">
              <p className="text-gray-800 mb-3">{post.content}</p>
              
              {/* Location */}
              {post.location && (
                <div className="flex items-center text-sm text-gray-600 mb-3">
                  <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
                  <span className="truncate">{post.location}</span>
                </div>
              )}

              {/* Image Placeholder */}
              {post.hasImage && (
                <div className="w-full h-48 bg-gray-200 rounded-lg mb-3 flex items-center justify-center">
                  <div className="text-center">
                    <Image className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                    <span className="text-sm text-gray-500">Image Preview</span>
                  </div>
                </div>
              )}

              {/* Call Button */}
              {post.callable && (
                <button className="flex items-center justify-center w-full py-2 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 transition-colors">
                  <Phone className="h-4 w-4 mr-2" />
                  {post.phone}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Add Post Floating Button */}
      <button
        onClick={() => setShowPhotoModal(true)}
        className="fixed bottom-20 right-4 w-14 h-14 bg-teal-900 rounded-full shadow-lg flex items-center justify-center hover:bg-teal-700 transition-colors"
      >
        <Plus className="h-6 w-6 text-white" />
      </button>

      {/* Photo Modal */}
      {showPhotoModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-md overflow-hidden">
            {/* Modal Header */}
            <div className="p-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-lg">Add Photo</h3>
                <button
                  onClick={() => setShowPhotoModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <p className="text-sm text-gray-600 mt-1">Choose how to add a photo</p>
            </div>

            {/* Modal Options */}
            <div className="divide-y divide-gray-100">
              <button className="w-full p-4 text-red-500 font-medium text-center hover:bg-gray-50">
                CANCEL
              </button>
              
              <button className="w-full p-4 flex items-center justify-between hover:bg-gray-50">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center mr-3">
                    <Image className="h-5 w-5 text-teal-800" />
                  </div>
                  <span className="font-medium">CHOOSE FROM GALLERY</span>
                </div>
              </button>
              
              <button className="w-full p-4 flex items-center justify-between hover:bg-gray-50">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                    <Camera className="h-5 w-5 text-green-600" />
                  </div>
                  <span className="font-medium">TAKE PHOTO</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostsPage;