import React, { useState, useEffect } from "react";
import "./SearchModal.css";
import Avatar1 from "../../assets/images/Avatar.png";
import Avatar2 from "../../assets/images/Avatar1.png";
import Product from "../../assets/images/Product.png";
import Engineering from "../../assets/images/Engineering.png";

function SearchModal() {
  const [name, setName] = useState("");
  const [isPerson, setIsPerson] = useState(true);
  const [isEntered, setIsEntered] = useState(false);

  useEffect(() => {
    if (name === "engineering" || name === "product") {
      setIsPerson(false);
    } else {
      setIsPerson(true);
    }
    console.log(isPerson);
  }, [name]);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleClick = (e) => {
    if (e.key === "Enter") {
      setIsEntered(true);
      console.log("isEntered", isEntered);
    }
  };

  return (
    <div className="search_modal">
      <div className=" px-3 py-2 border-bottom d-flex align-items-center justify-content-between copy_link">
        <input
          type="text"
          className="form-control search_field"
          placeholder={isEntered ? " " : "Search emails, names or groups"}
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          onChange={(e) => handleChange(e)}
          onKeyDown={(e) => handleClick(e)}
        />
        {isEntered ? (
          <div className="tag-item">
            <button type="button" className="button">
              Hello
            </button>
          </div>
        ) : (
          ""
        )}

        <div className="d-flex">
          <div className="d-flex align-items-center me-4">
            <p className="m-0 me-2 no_access text-muted">Full access </p>
            <i className="fa-solid fa-angle-down" />
          </div>
          <button className="btn btn_search">Invite</button>
        </div>
      </div>
      <div className="p-4 border-bottom ">
        {name.length === 0 ? (
          <>
            <div className="mb-4">
              <h6 className="mb-3 search_heading">Select a Person</h6>
              <div className="d-flex mb-3">
                <img src={Avatar1} alt="avatar 1" />
                <p className="m-0 ms-3 names">Wade Cooper</p>
              </div>
              <div className="d-flex">
                <img src={Avatar2} alt="avatar 1" />
                <p className="m-0 ms-3 names">Arlene Mccoy</p>
              </div>
            </div>
            <div className="">
              <h6 className="mb-3 search_heading">Select a group</h6>
              <div className="d-flex mb-3">
                <img src={Product} alt="avatar 1" />
                <p className="m-0 ms-3 names">Product</p>
              </div>
              <div className="d-flex">
                <img src={Engineering} alt="avatar 1" />
                <p className="m-0 ms-3 names">Engineering</p>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="mb-4">
              <h6 className="mb-3 search_heading">
                {isPerson ? "Select a Person" : "Select a group"}
              </h6>
              <div className="d-flex mb-3 p-2 copy_link rounded">
                <img src={isPerson ? Avatar1 : Engineering} alt="avatar 1" />
                <p className="m-0 ms-3 names">{name}</p>
              </div>
            </div>
          </>
        )}
      </div>
      <div className=" px-3 py-2  copy_link">
        <div className="d-flex align-items-center">
          <i className="fa-regular fa-circle-question" />
          <div className="ms-2">
            <p className="m-0 text-muted small">learn about sharing</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchModal;
