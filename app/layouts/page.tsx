'use client';
import React, { useState, useEffect } from 'react';
import { ExternalLink } from '#/ui/external-link';
import MonitorSVG from './monitorSVG';
import InfoSVG from './infoSVG';
import ModalContent from './ModalContent'; // Import your existing ModalContent component
import MusicModal from './MusicModal'; // Import the new MusicModal component

export default function Page() {
  const [isMusicModalOpen, setIsMusicModalOpen] = useState(false);
  const [isLineAModalOpen, setIsLineAModalOpen] = useState(false);
  const [isLineCModalOpen, setIsLineCModalOpen] = useState(false);
  const [isMSModalOpen, setIsMSModalOpen] = useState(false);
  const [isPipelineModalOpen, setIsPipelineModalOpen] = useState(false);

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
      </ul>

      <ul className="list-none">
        <li className="mt-2 flex items-center gap-2">
          {' '}
          <InfoSVG />{' '}
          <span className="m-0">
            Оператор выявил по системе SCADA что положения клапана FCV – 2901 не
            в штатном положение.{' '}
          </span>{' '}
        </li>
        <li className="mt-2 flex items-center gap-2">
          {' '}
          <InfoSVG />{' '}
          <span className="m-0">
            Оператор проверяет на открытия / закрытия клапана FCV – 2901
            удалённо.
          </span>{' '}
        </li>
        <li className="mt-2 flex items-center gap-2">
          {' '}
          <InfoSVG />{' '}
          <span className="m-0">
            {' '}
            Сообщает дежурному персоналу о положение клапана FCV – 2901 и
            просить осмотреть на месте
          </span>{' '}
        </li>
        <li className="mt-2 flex items-center gap-2">
          {' '}
          <InfoSVG />{' '}
          <span className="m-0"> И сообщает о сложившимся ситуации в ЦДУ.</span>
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
            imageSrc="https://ik.imagekit.io/ATG/Modal/Lab1/Line%20C%20original.jpg?updatedAt=1692166503859"
          />
        </div>
      )}

      {isLineCModalOpen && (
        <div className="bg-gray-1100 bg-vc-border-gradient fixed left-1/2 top-1/2 z-50 -translate-x-1/2  -translate-y-1/2 transform  rounded-lg border p-20 shadow-lg shadow-black/20">
          <ModalContent
            closeModal={closeLineCModal}
            imageSrc="https://ik.imagekit.io/ATG/Modal/Lab1/WKC-1-%20overview.jpg?updatedAt=1692167110051"
          />
        </div>
      )}

      {isMSModalOpen && (
        <div className="bg-gray-1100 bg-vc-border-gradient fixed left-1/2 top-1/2 z-50 -translate-x-1/2  -translate-y-1/2 transform  rounded-lg border p-20 shadow-lg shadow-black/20">
          <ModalContent
            closeModal={closeMSModal}
            imageSrc="https://ik.imagekit.io/ATG/Modal/Lab1/WKC1%20-%20Overview%20Problem%20Condition.jpg?updatedAt=1692166504261"
          />
        </div>
      )}
      {isPipelineModalOpen && (
        <div className="bg-gray-1100 bg-vc-border-gradient fixed left-1/2 top-1/2 z-50 -translate-x-1/2  -translate-y-1/2 transform  rounded-lg border p-20 shadow-lg shadow-black/20">
          <ModalContent
            closeModal={closePipelineModal}
            imageSrc="https://ik.imagekit.io/ATG/Modal/Lab1/Pipeline%20Parameter%20List.jpg?updatedAt=1692166504144"
          />
        </div>
      )}

      {/* {isLineAModalOpen && (
        <div className="bg-gray-1100 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  p-20 border  z-50 bg-vc-border-gradient rounded-lg shadow-lg shadow-black/20">
          <ModalContent closeModal={closeLineAModal} />
        </div>
      )} */}

      <div className="flex gap-2">
        <ExternalLink href="https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts">
          Docs
        </ExternalLink>
        <ExternalLink href="https://github.com/vercel/app-playground/tree/main/app/layouts">
          Code
        </ExternalLink>
      </div>
    </div>
  );
}
