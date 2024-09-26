import React, { useState } from 'react';
import Modal from 'react-modal';
import VideoPrev from "../../images/screen-video.webp";

Modal.setAppElement('#root'); // Для корректной работы с React

const VideoModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');

  const videoItems = [
    {
      id: 1,
      thumbnail: VideoPrev,
      videoUrl: 'https://www.youtube.com/embed/K4TOrB7at0Y', // YouTube video link
    },
  ];

  const openModal = (url) => {
    setVideoUrl(url);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setVideoUrl(''); // Очищаем URL после закрытия
  };

  return (
    <div>
      {videoItems.map((video) => (
        <div class="video__link"> 
          <img
            class="video__screen"
            key={video.id}
            src={video.thumbnail}
            alt={`Thumbnail ${video.id}`}
            style={{margin: '10px', cursor: 'pointer' }}
            
            onClick={() => openModal(video.videoUrl)}
          />
        </div>
      ))}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Video Modal"
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '80%',
            height: '80%',
            backgroundColor: '#000',
            borderRadius: '10px',
            padding: '0',
          },
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            zIndex: 1000,
          },
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
          <iframe
            width="100%"
            height="100%"
            src={videoUrl}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded video"
          ></iframe>
        </div>
      </Modal>
    </div>
  );
};

export default VideoModal;
