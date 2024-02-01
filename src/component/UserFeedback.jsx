import React from "react";

const UserFeedback = ({ username, comment, shadow }) => {
  const stars = Array(5)
    .fill(0)
    .map((_, index) => (
      <span key={index} className="star">
        &#9733;
      </span>
    ));

  const figureClass = `userFeedback ${shadow ? "shadow" : ""}`;

  return (
    <figure className={figureClass}>
      <figcaption>
        {stars}
        <p>{comment}</p>
        <div className="userInfo">
          <img src="path_to_user_icon.png" alt="User Icon" />
          <span>{username}</span>
        </div>
      </figcaption>
    </figure>
  );
};

export default UserFeedback;
