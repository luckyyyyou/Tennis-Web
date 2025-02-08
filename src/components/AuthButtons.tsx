'use client';

import { useState } from 'react';
import { AuthModal } from './AuthModal';

export function AuthButtons() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<'login' | 'register'>('login');

  const handleOpenModal = (mode: 'login' | 'register') => {
    setModalMode(mode);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="flex gap-4">
        <button 
          onClick={() => handleOpenModal('login')}
          className="px-4 py-2 text-blue-600 hover:text-blue-700"
        >
          登录
        </button>
        <button 
          onClick={() => handleOpenModal('register')}
          className="px-4 py-2 text-white bg-blue-600 rounded-full hover:bg-blue-700"
        >
          注册
        </button>
      </div>

      <AuthModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        mode={modalMode}
      />
    </>
  );
} 