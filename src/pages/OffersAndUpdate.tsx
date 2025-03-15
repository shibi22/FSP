import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, AlertCircle, LogIn } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

interface Offer {
  id: string;
  title: string;
  description: string;
  discount: string;
  validUntil: string;
  code: string;
  image: string;
  category: string;
}

export default function OffersUpdates() {
  const { isAuthenticated } = useAuth();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [claimedOffers, setClaimedOffers] = useState<string[]>([]);
  const [activeOffer, setActiveOffer] = useState<Offer | null>(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const offers: Offer[] = [
    {
      id: '1',
      title: 'Resume Design Special',
      description: 'Get 20% off on all resume design services',
      discount: '20% OFF',
      validUntil: '2025-06-30',
      code: 'RESUME20',
      image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=800',
      category: 'Resume'
    },
    {
      id: '2',
      title: 'Portfolio Bundle',
      description: 'Portfolio creation with 3 months of hosting included',
      discount: 'FREE HOSTING',
      validUntil: '2025-07-15',
      code: 'PORTBUNDLE',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80&w=800',
      category: 'Portfolio'
    },
    {
      id: '3',
      title: 'LinkedIn Optimization',
      description: 'Complete LinkedIn profile optimization at a special price',
      discount: '15% OFF',
      validUntil: '2025-08-01',
      code: 'LINKEDIN15',
      image: 'https://images.unsplash.com/photo-1616469829581-73993eb86b02?auto=format&fit=crop&q=80&w=800',
      category: 'LinkedIn'
    },
    {
      id: '4',
      title: 'Web Development Deal',
      description: 'Custom web development with free SEO setup',
      discount: 'FREE SEO',
      validUntil: '2025-09-30',
      code: 'WEBSEO',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800',
      category: 'Development'
    },
    {
      id: '5',
      title: 'New Client Special',
      description: 'First-time clients receive a discount on any service',
      discount: '10% OFF',
      validUntil: '2025-12-31',
      code: 'NEWCLIENT10',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800',
      category: 'Special'
    }
  ];

  const handleClaimOffer = (offer: Offer) => {
    if (!isAuthenticated) {
      setActiveOffer(offer);
      setShowLoginModal(true);
      return;
    }

    // If authenticated, mark as claimed
    setClaimedOffers(prev => [...prev, offer.id]);
    setActiveOffer(offer);
    setShowSuccessModal(true);

    // Auto-hide success modal after 3 seconds
    setTimeout(() => {
      setShowSuccessModal(false);
    }, 3000);
  };

  const closeLoginModal = () => {
    setShowLoginModal(false);
    setActiveOffer(null);
  };

  const closeSuccessModal = () => {
    setShowSuccessModal(false);
    setActiveOffer(null);
  };

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-accent-olive mb-4">Special Offers & Updates</h1>
          <p className="text-xl text-primary-teal max-w-2xl mx-auto">
            Discover exclusive deals and stay updated with our latest services and promotions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="relative h-48">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-0 right-0 bg-accent-peach text-accent-olive px-4 py-2 rounded-bl-lg font-bold">
                  {offer.discount}
                </div>
                {claimedOffers.includes(offer.id) && (
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white rounded-full p-3">
                      <Check className="w-10 h-10 text-green-500" />
                    </div>
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-accent-olive">{offer.title}</h3>
                  <span className="text-xs font-medium bg-primary-mint text-primary-teal px-2 py-1 rounded-full">
                    {offer.category}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{offer.description}</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-gray-500">
                    Valid until: {formatDate(offer.validUntil)}
                  </span>
                  <span className="text-sm font-medium text-primary-teal">
                    Code: {offer.code}
                  </span>
                </div>
                <button
                  onClick={() => handleClaimOffer(offer)}
                  disabled={claimedOffers.includes(offer.id)}
                  className={`w-full py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center gap-2 ${
                    claimedOffers.includes(offer.id)
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-accent-peach text-accent-olive hover:bg-accent-sand'
                  }`}
                >
                  {claimedOffers.includes(offer.id) ? 'Claimed' : 'Claim Offer'}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Login Required Modal */}
        <AnimatePresence>
          {showLoginModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-xl p-6 max-w-md w-full"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <AlertCircle className="w-6 h-6 text-primary-teal" />
                    <h3 className="text-xl font-bold text-accent-olive">Login Required</h3>
                  </div>
                  <button
                    onClick={closeLoginModal}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <p className="text-gray-600 mb-6">
                  To avail this offer, you need to log in. Please sign in to your account to continue.
                </p>
                <div className="flex gap-4">
                  <button
                    onClick={closeLoginModal}
                    className="flex-1 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-300"
                  >
                    Cancel
                  </button>
                  <Link
                    to="/login"
                    className="flex-1 bg-primary-teal text-white py-2 rounded-lg font-semibold hover:bg-accent-olive transition-colors duration-300 flex items-center justify-center gap-2"
                  >
                    <LogIn className="w-4 h-4" />
                    Login
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Success Modal */}
        <AnimatePresence>
          {showSuccessModal && activeOffer && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-xl p-6 max-w-md w-full"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <Check className="w-5 h-5 text-green-500" />
                    </div>
                    <h3 className="text-xl font-bold text-accent-olive">Offer Claimed!</h3>
                  </div>
                  <button
                    onClick={closeSuccessModal}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <p className="text-gray-600 mb-4">
                  You've successfully claimed the "{activeOffer.title}" offer.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <p className="text-sm text-gray-600 mb-2">Use this code during checkout:</p>
                  <div className="bg-white border border-gray-200 rounded-lg p-3 text-center font-mono text-lg font-semibold text-primary-teal">
                    {activeOffer.code}
                  </div>
                </div>
                <button
                  onClick={closeSuccessModal}
                  className="w-full bg-accent-peach text-accent-olive py-3 rounded-lg font-semibold hover:bg-accent-sand transition-colors duration-300"
                >
                  Done
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}