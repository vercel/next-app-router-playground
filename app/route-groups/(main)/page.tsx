'use client';
import React, { useState, useEffect } from 'react';
import { ExternalLink } from '#/ui/external-link';
import MonitorSVG from './monitorSVG';
import ModalContent from './ModalContent'; // Import your existing ModalContent component
import MusicModal from './MusicModal'; // Import the new MusicModal component
import AnswerModal from './AnswerModal'; // Make sure to provide the correct path to the AnswerModal component


export default function Page() {
  const [isMusicModalOpen, setIsMusicModalOpen] = useState(false);
  const [isLineAModalOpen, setIsLineAModalOpen] = useState(false);
  const [isLineCModalOpen, setIsLineCModalOpen] = useState(false);
  const [isMSModalOpen, setIsMSModalOpen] = useState(false);
  const [isPipelineModalOpen, setIsPipelineModalOpen] = useState(false);
  const [isAnswerModalOpen, setIsAnswerModalOpen] = useState(false);


  useEffect(() => {
    setIsMusicModalOpen(true);
  }, []);

  const closeMusicModal = () => {
    setIsMusicModalOpen(false);
  };

  const openLineAModal = () => {
    setIsLineAModalOpen(true);
  };

  const closeLineAModal = () => {
    setIsLineAModalOpen(false);
  };

  const openPipelineModal = () => {
    setIsPipelineModalOpen(true);
  };

  const closePipelineModal = () => {
    setIsPipelineModalOpen(false);
  };

  const openLineCModal = () => {
    setIsLineCModalOpen(true);
  };

  const closeLineCModal = () => {
    setIsLineCModalOpen(false);
  };

  const openMSModal = () => {
    setIsMSModalOpen(true);
  };

  const closeMSModal = () => {
    setIsMSModalOpen(false);
  };

  const openAnswerModal = () => {
    setIsAnswerModalOpen(true);
  };
  
  const closeAnswerModal = () => {
    setIsAnswerModalOpen(false);
  };
  

  return (
    <div className="prose prose-sm prose-invert max-w-none">
      <ul className="list-none">
        <li className="mt-2 flex items-center gap-2">
          <MonitorSVG />
          <a href="#" className="linea m-0" onClick={openPipelineModal}>
            Pipeline Parameter List
          </a>
        </li>
        <li className="mt-2 flex items-center gap-2">
          <MonitorSVG />
          <a href="#" className="linea m-0" onClick={openLineAModal}>
            Pipeline C Parameter List
          </a>
        </li>

        <li className="mt-2 flex items-center gap-2">
          <MonitorSVG />
          <a href="#" className="m-0" onClick={openLineCModal}>
            WKC1 - Overview normal Condition
          </a>
        </li>
        <li className="mt-2 flex items-center gap-2">
          <MonitorSVG />
          <a href="#" className="m-0" onClick={openMSModal}>
            WKC1 - Overview Problem Condition
          </a>
        </li>
        <li className="mt-2 flex items-center gap-2">
          <MonitorSVG />
          <a href="#" className="m-0" onClick={openAnswerModal}>
          Answers
        </a>
        </li>
      </ul>

     

      {/* {isPopupOpen ? (
          <div className="bg-gray-1100 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  p-20 border  z-50 bg-vc-border-gradient rounded-lg shadow-lg shadow-black/20">
          <MusicModal closeModal={closePopup} />
        </div>
      ) : null} */}

      {isMusicModalOpen && (
        <div className="bg-gray-1100 bg-vc-border-gradient fixed left-1/2 top-1/2 z-50 -translate-x-1/2  -translate-y-1/2 transform  rounded-lg border p-20 shadow-lg shadow-black/20">
          <MusicModal closeModal={closeMusicModal} />
        </div>
      )}

      {/* Render Line A Modal using ModalContent when isLineAModalOpen is true */}
      {isLineAModalOpen && (
        <div className="bg-gray-1100 bg-vc-border-gradient fixed left-1/2 top-1/2 z-50 -translate-x-1/2  -translate-y-1/2 transform  rounded-lg border p-20 shadow-lg shadow-black/20">
          <ModalContent
            closeModal={closeLineAModal}
            imageSrc="https://ik.imagekit.io/ATG/Modal/Lab1/Line%20C%20(2).bmp?updatedAt=1692178988571"
          />
        </div>
      )}

      {isLineCModalOpen && (
        <div className="bg-gray-1100 bg-vc-border-gradient fixed left-1/2 top-1/2 z-50 -translate-x-1/2  -translate-y-1/2 transform  rounded-lg border p-20 shadow-lg shadow-black/20">
          <ModalContent
            closeModal={closeLineCModal}
            imageSrc="https://ik.imagekit.io/ATG/Modal/Lab1/WKC-1%20overview%20normal%20condition%20(2).bmp?updatedAt=1692178984922"
          />
        </div>
      )}

      {isMSModalOpen && (
        <div className="bg-gray-1100 bg-vc-border-gradient fixed left-1/2 top-1/2 z-50 -translate-x-1/2  -translate-y-1/2 transform  rounded-lg border p-20 shadow-lg shadow-black/20">
          <ModalContent
            closeModal={closeMSModal}
            imageSrc="https://ik.imagekit.io/ATG/Modal/Lab2/WKC-1%20overview%20problem%20condition%203.bmp?updatedAt=1692180383061"
          />
        </div>
      )}
      {isPipelineModalOpen && (
        <div className="bg-gray-1100 bg-vc-border-gradient fixed left-1/2 top-1/2 z-50 -translate-x-1/2  -translate-y-1/2 transform  rounded-lg border p-20 shadow-lg shadow-black/20">
          <ModalContent
            closeModal={closePipelineModal}
            imageSrc="https://ik.imagekit.io/ATG/Modal/Lab1/Line%20A%20B%20(2).bmp?updatedAt=1692178984744"
          />
        </div>
      )}

    {isAnswerModalOpen && (
      <div className="bg-gray-1100 bg-vc-border-gradient fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 transform rounded-lg border p-20 shadow-lg shadow-black/20">
        <AnswerModal closeModal={closeAnswerModal} />
      </div>
    )}

      {/* {isLineAModalOpen && (
        <div className="bg-gray-1100 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  p-20 border  z-50 bg-vc-border-gradient rounded-lg shadow-lg shadow-black/20">
          <ModalContent closeModal={closeLineAModal} />
        </div>
      )} */}

      {/* <div className="flex gap-2">
        <ExternalLink href="https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts">
          Docs
        </ExternalLink>
        <ExternalLink href="https://github.com/vercel/app-playground/tree/main/app/layouts">
          Code
        </ExternalLink>
      </div> */}
    </div>
  );
}
