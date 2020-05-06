import React from 'react';

const Actions = ({
  cartQuantity,
  userLoggedin,
  activateLoginModal,
  activateCartModal,
  hideAllModals
}) => (
  <div className="navActions">
    <div className="actionItemsAccount" onClick={activateLoginModal}>
      <img
        src={`https://hrla35-fec-teamferrari-eric.s3.us-east-2.amazonaws.com/Images/Other/navTBox.png`}
        alt="Image of a person"
      />
      {userLoggedin ? <div>MY ACCOUNT</div> : <div>SIGN IN</div>}
    </div>
    <div className="actionItemsLocation" onClick={hideAllModals}>
      <img
        src={`https://hrla35-fec-teamferrari-eric.s3.us-east-2.amazonaws.com/Images/Other/navTBox.png`}
        alt="Image of a location pin"
      />
      <div>STORES</div>
    </div>
    <div
      className="actionItemsCart"
      onClick={hideAllModals}
      onMouseEnter={() => {
        if (cartQuantity > 0) {
          activateCartModal();
        }
      }}
    >
      <img
        src={`https://hrla35-fec-teamferrari-eric.s3.us-east-2.amazonaws.com/Images/Other/navTBox.png`}
        alt="Image of a cart"
      />
      {cartQuantity > 0 ? (
        <div className="cartQuantity">{cartQuantity}</div>
      ) : null}
      <div>CART</div>
    </div>
  </div>
);

module.exports = Actions;
