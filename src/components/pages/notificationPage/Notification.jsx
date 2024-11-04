import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Notification.module.scss'; // Добавьте свои стили

const Notification = ({ message, duration, onClose }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onClose();
    }, duration);

    return () => clearTimeout(timer); // Очистка таймера при размонтировании
  }, [duration, onClose]);

  if (!visible) return null; // Не рендерим компонент, если он не видим

  return (
    <div className={styles.inner}>
      <div className={styles.notification}>
        {message}
      </div>
    </div>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  onClose: PropTypes.func.isRequired,
};


export default Notification;
