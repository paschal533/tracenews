import React from 'react';
import { BackTop } from 'antd';
 

const style = {
  height: 60,
  width: 60,
  opacity: 0.3,
  lineHeight: '40px',
  borderRadius: 30,
  backgroundColor: '#1088e9',
  color: '#fff',
  textAlign: 'center',
  fontSize: 14,
};

const BackToTop = () => {
    return(
            <BackTop>
              <div style={style} className="fas fa-chevron-up">UP</div>
            </BackTop>
    )
}

export default BackToTop;