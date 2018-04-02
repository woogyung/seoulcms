import React, { Component } from 'react';
import './modal.css';

class Modal extends Component {
  render() {
    return (
      <div class="modal-wrap">
        <div class="modal-contents">
          <div class="modal-subtitle">
            <span>위치정보</span>
          </div>
          <div class="midal-maintitle">
            <h1>강남 세브란스</h1>
            <p class="icon-share">K</p>
          </div>
        </div>

        <div class="modal-contents">
          <ul class="details-data">
            <li><span>주소 :</span> 서울시 강남구</li>
            <li><span>운영시간 :</span> 09:00~18:00</li>
            <li><span>전화번호 :</span> 02-112-119</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Modal;
