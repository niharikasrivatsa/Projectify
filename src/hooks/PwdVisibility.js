import React, { useState } from 'react';
export const PwdVisibility = () => {
    const [passwordVisibility, setPasswordVisibility] = useState(true);
    const [rightIcon, setRightIcon] = useState('visibility');
  
    const handlePasswordVisibility = () => {
      if (rightIcon === 'visibility') {
        setRightIcon('visibility-off');
        setPasswordVisibility(!passwordVisibility);
      } else if (rightIcon === 'visibility-off') {
        setRightIcon('visibility');
        setPasswordVisibility(!passwordVisibility);
      }
    };
  
    return {
      passwordVisibility,
      rightIcon,
      handlePasswordVisibility
    };
  };