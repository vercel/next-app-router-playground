import React, { useEffect } from 'react';
import Image from 'next/image';

interface ModalContentProps {
  closeModal: () => void; // Define the type of closeModal prop
  imageSrc: string;
}

export default function ModalContent({
  closeModal,
  imageSrc,
}: ModalContentProps) {
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [closeModal]);

  // const closeButtonStyles = {
  //   fontSize: '24px',
  //   fontWeight: 'bold',
  //   color: '#333',
  //   cursor: 'pointer',
  //   padding: '10px', // Adding padding to make the button more visible
  // };

  return (
    <div id="modal" className="modal-overlay flex items-center justify-center">
      <div className="modal relative h-screen w-screen rounded shadow">
        <div style={{ position: 'absolute', top: '10px', right: '30px' }}>
          <button onClick={closeModal} className="text-2xl">
            &times;
          </button>
        </div>
        <div className="modal-content flex h-full items-center justify-center">
          <div className="max-w-full">
            <Image
              src={imageSrc} // Use the image source prop here
              alt="Image"
              layout="responsive"
              width={800}
              height={600}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
