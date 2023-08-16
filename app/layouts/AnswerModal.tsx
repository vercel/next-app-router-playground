import React, { useEffect } from 'react';
import InfoSVG from './infoSVG';


interface AnswerModalProps {
  closeModal: () => void; // Define the type of closeModal prop
}

export default function AnswerModal({
  closeModal,
}: AnswerModalProps) {
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



  return (
    <div id="modal" className="modal-overlay flex items-center justify-center">
      <div className="modal relative w-[500px] h-[300px] rounded shadow">
        <div style={{ position: 'absolute', top: '10px', right: '0px' }}>
          <button onClick={closeModal} className="text-2xl">
            &times;
          </button>
        </div>
        <div className="modal-content flex h-full items-center justify-center">
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
        </div>
      </div>
    </div>
  );
}
