import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Download, Gift } from 'lucide-react';

interface Notification {
  id: number;
  type: 'download' | 'claim' | 'signup';
  message: string;
  location?: string;
}

const notifications: Notification[] = [
  {
    id: 1,
    type: 'download',
    message: 'just downloaded the AI Chat Application',
    location: 'Chennai , Koyambedu'
  },
  {
    id: 2,
    type: 'claim',
    message: 'claimed the Resume Design offer',
    location: 'Bangalore'
  },
  {
    id: 3,
    type: 'signup',
    message: 'joined our community',
    location: 'Delhi'
  }
];

const names = [
  'Rahul', 'Priya', 'Amit', 'Neha', 'Vikram', 'Anjali', 'Deepak', 'Pooja',
  'Rajesh', 'Meera', 'Suresh', 'Kavitha', 'Arun', 'Divya', 'Sanjay', 'Anita'
];

export default function SocialProof() {
  const [currentNotification, setCurrentNotification] = useState<Notification | null>(null);

  useEffect(() => {
    const showRandomNotification = () => {
      const randomName = names[Math.floor(Math.random() * names.length)];
      const randomNotification = notifications[Math.floor(Math.random() * notifications.length)];
      
      setCurrentNotification({
        ...randomNotification,
        id: Date.now(),
        message: `${randomName} ${randomNotification.message}`
      });

      setTimeout(() => {
        setCurrentNotification(null);
      }, 4000);
    };

    const interval = setInterval(showRandomNotification, 8000);
    showRandomNotification(); // Show first notification immediately

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {currentNotification && (
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          className="fixed bottom-4 left-4 bg-white rounded-lg shadow-lg p-4 max-w-sm flex items-center gap-3"
        >
          <div className="bg-primary-mint rounded-full p-2">
            {currentNotification.type === 'download' && <Download className="w-5 h-5 text-primary-teal" />}
            {currentNotification.type === 'claim' && <Gift className="w-5 h-5 text-primary-teal" />}
            {currentNotification.type === 'signup' && <User className="w-5 h-5 text-primary-teal" />}
          </div>
          <div>
            <p className="text-sm text-gray-800">{currentNotification.message}</p>
            {currentNotification.location && (
              <p className="text-xs text-gray-500">from {currentNotification.location}</p>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}