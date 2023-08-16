import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface MusicModalProps {
  closeModal: () => void; // Define the type of closeModal prop
}

export default function MusicModal({ closeModal }: MusicModalProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = React.createRef<HTMLAudioElement>();

  useEffect(() => {
    if (isPlaying) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      const modal = document.getElementById('modal');
      if (modal && !modal.contains(event.target as Node)) {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('click', handleClickOutside);
    };
  }, [closeModal]);

  useEffect(() => {
    audioRef.current?.play();
  }, []);

  return (
    <div id="modal" className="modal-overlay">
      <div className="modal">
        <button
          onClick={closeModal}
          className="close-button absolute right-6 top-6 text-2xl text-gray-500 hover:text-gray-400 focus:outline-none"
        >
          &times;
        </button>
        <h2>Лабаратория № 1</h2>
        <p>
        Последствие: через некоторое время выходное температура после АВО газа резко значительно повысилось. Чтобы определить аварию на станции быстро найдите причину повышения температуры после АВО газа
        </p>
        <audio className="hidden" ref={audioRef} controls>
          <source
            src="https://ik.imagekit.io/ATG/Alarm%20Sound%20Effect.mp3?updatedAt=1691727201187"
            type="audio/mpeg"
          />
          Your browser does not support the audio element.
        </audio>
        <button onClick={() => setIsPlaying(!isPlaying)}>
          {isPlaying ? '' : ''}
        </button>
        <div className="max-w-full">
          <Image
            src="https://ik.imagekit.io/ATG/image_2023-08-12_11-22-30.png?updatedAt=1691821593178"
            alt="Image"
            layout="responsive"
            width={800}
            height={600}
          />
        </div>
      </div>
    </div>
  );
}
