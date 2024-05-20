import React, { useState } from 'react';

const LikeButton = ({ onLike }) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const handleLike = () => {
    setLiked(true);
    setLikeCount(likeCount + 1);
    onLike();
  };

  return (
    <div>
      <button onClick={handleLike} disabled={liked}>Like</button>
      <span>{likeCount}</span>
    </div>
  );
};

export default LikeButton;
