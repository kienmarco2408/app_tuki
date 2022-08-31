import { View, Text, Modal, Animated, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';

const PopupInfor = ({ visible, children }) => {
  const [showModal, setShowModal] = React.useState(visible);

  React.useEffect(() => {
    toggleModal();
  }, [visible]);
  const toggleModal = () => {
    if (visible) {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  };
  return (
    <Modal transparent visible={showModal}>
      <View
        style={{
          flex: 1,
          backgroundColor: 'rgba(0,0,0,0.4)',
          justifyContent: 'center',
          alignItems: 'center ',
        }}
      >
        <View
          style={{
            width: 315,
            height: 517,
            borderRadius: 10,
            backgroundColor: '#447DB9',
            marginLeft: 50,
          }}
        >
          {children}
        </View>
      </View>
    </Modal>
  );
};

export default PopupInfor;
