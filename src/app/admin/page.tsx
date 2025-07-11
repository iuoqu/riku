'use client';

import { useState, useEffect } from 'react';

interface Artwork {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  dimensions: string;
  price: string;
  available: boolean;
  featured: boolean;
  dateCreated: string;
}

interface SiteContent {
  hero: {
    title: string;
    subtitle: string;
    buttonText: string;
    image: string;
  };
  about: {
    title: string;
    description: string;
    image: string;
  };
  contact: {
    email: string;
    phone: string;
    location: string;
    galleryImage: string;
  };
  featuredSection: {
    title: string;
    showCount: number;
  };
}

export default function AdminPage() {
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [siteContent, setSiteContent] = useState<SiteContent | null>(null);
  const [activeTab, setActiveTab] = useState('artworks');
  const [editingArtwork, setEditingArtwork] = useState<Artwork | null>(null);

  // Load data on component mount
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      // In a real app, these would be API calls
      // For now, we'll load from the JSON files directly
      const artworksResponse = await fetch('/api/artworks');
      const siteContentResponse = await fetch('/api/site-content');
      
      if (artworksResponse.ok) {
        const artworksData = await artworksResponse.json();
        setArtworks(artworksData);
      }
      
      if (siteContentResponse.ok) {
        const contentData = await siteContentResponse.json();
        setSiteContent(contentData);
      }
    } catch (error) {
      console.error('Error loading data:', error);
    }
  };

  const handleSaveArtwork = async (artwork: Artwork) => {
    try {
      const response = await fetch('/api/artworks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(artwork),
      });

      if (response.ok) {
        loadData(); // Reload data
        setEditingArtwork(null);
        alert('Artwork saved successfully!');
      }
    } catch (error) {
      console.error('Error saving artwork:', error);
      alert('Error saving artwork');
    }
  };

  const handleDeleteArtwork = async (id: number) => {
    if (confirm('Are you sure you want to delete this artwork?')) {
      try {
        const response = await fetch(`/api/artworks/${id}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          loadData();
          alert('Artwork deleted successfully!');
        }
      } catch (error) {
        console.error('Error deleting artwork:', error);
        alert('Error deleting artwork');
      }
    }
  };

  const handleSaveSiteContent = async () => {
    if (!siteContent) return;

    try {
      const response = await fetch('/api/site-content', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(siteContent),
      });

      if (response.ok) {
        alert('Site content saved successfully!');
      }
    } catch (error) {
      console.error('Error saving site content:', error);
      alert('Error saving site content');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">RiKU Ceramics CMS</h1>
          <div className="text-sm text-gray-600 bg-green-50 px-3 py-2 rounded-lg border border-green-200">
            <span className="font-medium text-green-800">✓ Local Development Mode</span>
            <div className="text-xs mt-1">Changes save locally • Push to GitHub to publish</div>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab('artworks')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'artworks'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Artworks
            </button>
            <button
              onClick={() => setActiveTab('content')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'content'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Site Content
            </button>
          </nav>
        </div>

        {/* Artworks Tab */}
        {activeTab === 'artworks' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Manage Artworks</h2>
              <button
                onClick={() => setEditingArtwork({
                  id: Date.now(),
                  title: '',
                  category: 'vases',
                  image: '',
                  description: '',
                  dimensions: '',
                  price: '',
                  available: true,
                  featured: false,
                  dateCreated: new Date().toISOString().split('T')[0]
                })}
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                Add New Artwork
              </button>
            </div>

            {/* Artworks List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {artworks.map((artwork) => (
                <div key={artwork.id} className="bg-white rounded-lg shadow p-6">
                  <h3 className="font-semibold text-lg mb-2">{artwork.title}</h3>
                  <p className="text-gray-600 text-sm mb-2">Category: {artwork.category}</p>
                  <p className="text-gray-600 text-sm mb-2">Price: {artwork.price}</p>
                  <div className="flex items-center gap-2 mb-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      artwork.available ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {artwork.available ? 'Available' : 'Sold'}
                    </span>
                    {artwork.featured && (
                      <span className="px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800">
                        Featured
                      </span>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setEditingArtwork(artwork)}
                      className="flex-1 bg-gray-100 text-gray-700 px-3 py-2 rounded text-sm hover:bg-gray-200"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteArtwork(artwork.id)}
                      className="flex-1 bg-red-100 text-red-700 px-3 py-2 rounded text-sm hover:bg-red-200"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Site Content Tab */}
        {activeTab === 'content' && siteContent && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Manage Site Content</h2>
              <button
                onClick={handleSaveSiteContent}
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                Save Changes
              </button>
            </div>

            <div className="space-y-8">
              {/* Hero Section */}
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-semibold mb-4">Hero Section</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                    <input
                      type="text"
                      value={siteContent.hero.title}
                      onChange={(e) => setSiteContent({
                        ...siteContent,
                        hero: { ...siteContent.hero, title: e.target.value }
                      })}
                      className="w-full border border-gray-300 rounded-md px-3 py-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Subtitle</label>
                    <textarea
                      value={siteContent.hero.subtitle}
                      onChange={(e) => setSiteContent({
                        ...siteContent,
                        hero: { ...siteContent.hero, subtitle: e.target.value }
                      })}
                      className="w-full border border-gray-300 rounded-md px-3 py-2"
                      rows={3}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Button Text</label>
                    <input
                      type="text"
                      value={siteContent.hero.buttonText}
                      onChange={(e) => setSiteContent({
                        ...siteContent,
                        hero: { ...siteContent.hero, buttonText: e.target.value }
                      })}
                      className="w-full border border-gray-300 rounded-md px-3 py-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Hero Image Path</label>
                    <input
                      type="text"
                      value={siteContent.hero.image}
                      onChange={(e) => setSiteContent({
                        ...siteContent,
                        hero: { ...siteContent.hero, image: e.target.value }
                      })}
                      className="w-full border border-gray-300 rounded-md px-3 py-2"
                      placeholder="/images/hero/hero.jpg"
                    />
                  </div>
                </div>
              </div>

              {/* About Section */}
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-semibold mb-4">About Section</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                    <input
                      type="text"
                      value={siteContent.about.title}
                      onChange={(e) => setSiteContent({
                        ...siteContent,
                        about: { ...siteContent.about, title: e.target.value }
                      })}
                      className="w-full border border-gray-300 rounded-md px-3 py-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                    <textarea
                      value={siteContent.about.description}
                      onChange={(e) => setSiteContent({
                        ...siteContent,
                        about: { ...siteContent.about, description: e.target.value }
                      })}
                      className="w-full border border-gray-300 rounded-md px-3 py-2"
                      rows={5}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Edit Artwork Modal */}
        {editingArtwork && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md max-h-screen overflow-y-auto">
              <h3 className="text-lg font-semibold mb-4">
                {editingArtwork.id === Date.now() ? 'Add New Artwork' : 'Edit Artwork'}
              </h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                  <input
                    type="text"
                    value={editingArtwork.title}
                    onChange={(e) => setEditingArtwork({
                      ...editingArtwork,
                      title: e.target.value
                    })}
                    className="w-full border border-gray-300 rounded-md px-3 py-2"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                  <select
                    value={editingArtwork.category}
                    onChange={(e) => setEditingArtwork({
                      ...editingArtwork,
                      category: e.target.value
                    })}
                    className="w-full border border-gray-300 rounded-md px-3 py-2"
                  >
                    <option value="vases">Vases</option>
                    <option value="tea-sets">Tea Sets</option>
                    <option value="sculptures">Sculptures</option>
                    <option value="plates">Plates</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Image Path</label>
                  <input
                    type="text"
                    value={editingArtwork.image}
                    onChange={(e) => setEditingArtwork({
                      ...editingArtwork,
                      image: e.target.value
                    })}
                    className="w-full border border-gray-300 rounded-md px-3 py-2"
                    placeholder="/images/artworks/category/image.jpg"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                  <textarea
                    value={editingArtwork.description}
                    onChange={(e) => setEditingArtwork({
                      ...editingArtwork,
                      description: e.target.value
                    })}
                    className="w-full border border-gray-300 rounded-md px-3 py-2"
                    rows={3}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Dimensions</label>
                  <input
                    type="text"
                    value={editingArtwork.dimensions}
                    onChange={(e) => setEditingArtwork({
                      ...editingArtwork,
                      dimensions: e.target.value
                    })}
                    className="w-full border border-gray-300 rounded-md px-3 py-2"
                    placeholder="H: 30cm, W: 15cm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Price</label>
                  <input
                    type="text"
                    value={editingArtwork.price}
                    onChange={(e) => setEditingArtwork({
                      ...editingArtwork,
                      price: e.target.value
                    })}
                    className="w-full border border-gray-300 rounded-md px-3 py-2"
                    placeholder="$1,200"
                  />
                </div>

                <div className="flex items-center space-x-4">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={editingArtwork.available}
                      onChange={(e) => setEditingArtwork({
                        ...editingArtwork,
                        available: e.target.checked
                      })}
                      className="mr-2"
                    />
                    Available
                  </label>
                  
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={editingArtwork.featured}
                      onChange={(e) => setEditingArtwork({
                        ...editingArtwork,
                        featured: e.target.checked
                      })}
                      className="mr-2"
                    />
                    Featured
                  </label>
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <button
                  onClick={() => handleSaveArtwork(editingArtwork)}
                  className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                >
                  Save
                </button>
                <button
                  onClick={() => setEditingArtwork(null)}
                  className="flex-1 bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Publishing Instructions */}
        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-3">📢 How to Publish Changes</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="flex items-start space-x-3">
              <div className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center font-bold text-xs">1</div>
              <div>
                <div className="font-medium text-blue-900">Make Changes</div>
                <div className="text-blue-700">Edit content using the forms above</div>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center font-bold text-xs">2</div>
              <div>
                <div className="font-medium text-blue-900">Test Locally</div>
                <div className="text-blue-700">Check <a href="/" className="underline" target="_blank">your website</a> looks good</div>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center font-bold text-xs">3</div>
              <div>
                <div className="font-medium text-blue-900">Publish</div>
                <div className="text-blue-700">Run git commands to go live</div>
              </div>
            </div>
          </div>
          <div className="mt-4 bg-white rounded border p-3">
            <div className="font-medium text-gray-900 mb-2">Terminal Commands:</div>
            <code className="text-sm text-gray-700 block">
              git add .<br/>
              git commit -m "Update content"<br/>
              git push origin main
            </code>
          </div>
        </div>
      </div>
    </div>
  );
} 