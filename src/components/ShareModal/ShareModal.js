import React, { useState } from "react";
import World from "../../assets/images/Icon.png";
import OSlash from "../../assets/images/Oslash.png";
import Share from "../../assets/images/Vector.png";
import { useNavigate } from "react-router-dom";

import "./ShareModal.css";

function ShareModal() {
  const [isShareModal, setIsShareModal] = useState(false);
  let navigate = useNavigate();

  const handleClick = () => {
    navigate("search", { replace: true });
  };

  return (
    <>
      <button
        className="d-flex btn btn-dark align-items-center mb-2"
        onClick={() => setIsShareModal(true)}>
        <p className="m-0 me-1">Share</p>
        <img src={Share} alt="share" />
      </button>
      {isShareModal && (
        <div className="share_modal">
          <div className=" p-3 border-bottom d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <img src={World} alt="world" width={32} height={32} />
              <div className="ms-2">
                <p className="m-0">Share to Web</p>
                <p className="text-muted small m-0">
                  Publish and share link with anyone
                </p>
              </div>
            </div>

            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
          </div>
          <div className="px-3 pt-3">
            <div className="input-group mb-3 ">
              <input
                type="text"
                className="form-control"
                placeholder="People, emails, groups"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                onClick={() => handleClick()}
              />
              <div className="input-group-append">
                <button className="btn btn_invite" type="button">
                  Invite
                </button>
              </div>
            </div>
          </div>
          <div className="pb-3 px-3 border-bottom d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <img
                src={OSlash}
                alt="world"
                width={40}
                height={40}
                className="oslash"
              />
              <div className="ms-2">
                <p className="m-0">Everyone at OSlash</p>
                <p className="text-muted small m-0">25 workspace members</p>
              </div>
            </div>

            <div className="d-flex align-items-center me-2">
              <p className="m-0 me-2 no_access text-muted">No access </p>
              <i className="fa-solid fa-angle-down" />
            </div>
          </div>
          <div className=" p-3 d-flex align-items-center justify-content-between copy_link">
            <div className="d-flex align-items-center">
              <i className="fa-regular fa-circle-question" />
              <div className="ms-2">
                <p className="m-0 text-muted small">learn about sharing</p>
              </div>
            </div>

            <div className="d-flex align-items-center me-2">
              <i className="fas fa-link me-2" />
              <p className="m-0 small">Copy link</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ShareModal;
