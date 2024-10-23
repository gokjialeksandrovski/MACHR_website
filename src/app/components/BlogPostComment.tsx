'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface BlogCommentProps {
  id: number;
  likes: number;
  replies: number;
}

interface Comment {
  id: number;
  profileImage: string;
  profileName: string;
  timeUploaded: string;
  profileComment: string;
  commentReplies: Reply[];
}

interface Reply {
  id: number;
  profileImage: string;
  profileName: string;
  timeUploaded: string;
  profileComment: string;
}

const updateSpecificRepliesTime = () => {
  const commentId = 1;
  const replyIds = [1, 2, 3];
  replyIds.forEach((replyId) => {
    const replyElement = document.querySelector(
      `.blog-comment-reply[data-comment-id="${commentId}"][data-reply-id="${replyId}"] .comment-time`
    );
    if (replyElement) {
      replyElement.textContent = 'Пред 9 минути';
    }
  });
};

const calculateTimeUploaded = (uploadedTime: string): string => {
  const uploadedDate = new Date(uploadedTime);
  const currentTime = new Date();
  const timeDifference = Math.floor(
    (currentTime.getTime() - uploadedDate.getTime()) / 60000
  );

  if (timeDifference < 2) {
    return 'Сега';
  }

  return `Пред ${timeDifference} минути`;
};

const BlogComment: React.FC<BlogCommentProps> = ({ id, likes, replies }) => {
  const [comment, setComment] = useState<Comment | null>(null);
  const [newReply, setNewReply] = useState<string>('');
  const [commentLikes, setCommentLikes] = useState<number>(likes);
  const [replyCount, setReplyCount] = useState<number>(replies);
  const [isLiked, setIsLiked] = useState<boolean>(
    sessionStorage.getItem(`isLiked-${id}`) === 'true'
  );
  const [showReplyAlert, setShowReplyAlert] = useState<boolean>(false);
  const [isCommentFocused, setIsCommentFocused] = useState<boolean>(false);
  const [visibleReplies, setVisibleReplies] = useState<number[]>([1, 2, 3]);

  useEffect(() => {
    const storedLikes = sessionStorage.getItem(`commentLikes-${id}`);
    const storedIsLiked = sessionStorage.getItem(`isLiked-${id}`);
    const storedReplies = sessionStorage.getItem(`commentReplies-${id}`);
    const storedVisibleReplies = sessionStorage.getItem(`visibleReplies-${id}`);

    if (storedLikes) {
      setCommentLikes(parseInt(storedLikes, 10));
    }

    if (storedIsLiked) {
      setIsLiked(storedIsLiked === 'true');
    }

    if (storedReplies) {
      setReplyCount(parseInt(storedReplies, 10));
    }

    if (storedVisibleReplies) {
      setVisibleReplies(JSON.parse(storedVisibleReplies));
    }
  }, [id]);

  useEffect(() => {
    const fetchComment = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/theBlogPostComments/${id}`
        );
        const data = await response.json();
        setComment(data);

        if (id === 1) {
          setReplyCount(
            parseInt(
              sessionStorage.getItem(`commentReplies-${id}`) || '552',
              10
            )
          );
        } else {
          setReplyCount(data.commentReplies.length);
        }
      } catch (error) {
        console.error('Error fetching comment:', error);
      }
    };

    fetchComment();
  }, [id]);

  useEffect(() => {
    sessionStorage.setItem(`commentLikes-${id}`, commentLikes.toString());
    sessionStorage.setItem(`isLiked-${id}`, isLiked.toString());
  }, [id, commentLikes, isLiked]);

  useEffect(() => {
    sessionStorage.setItem(`commentReplies-${id}`, replyCount.toString());
  }, [id, replyCount]);

  useEffect(() => {
    sessionStorage.setItem(
      `visibleReplies-${id}`,
      JSON.stringify(visibleReplies)
    );
  }, [id, visibleReplies]);

  useEffect(() => {
    updateSpecificRepliesTime();
  }, [comment?.commentReplies]);

  const handleLikeClick = () => {
    if (isLiked) {
      setCommentLikes((prevLikes) => prevLikes - 1);
    } else {
      setCommentLikes((prevLikes) => prevLikes + 1);
    }
    setIsLiked((prevIsLiked) => !prevIsLiked);
  };

  const handleCommentClick = () => {
    setShowReplyAlert(true);
    setIsCommentFocused(true);
  };

  const handleReplySubmit = async () => {
    const maxId =
      comment?.commentReplies.reduce(
        (max, reply) => Math.max(max, reply.id),
        0
      ) || 0;
    const newId = maxId + 1;

    const newCommentReply: Reply = {
      id: newId,
      profileImage: '/images/blog-post/blog-post-add-comment-image.png',
      profileName: 'Нов корисник',
      timeUploaded: new Date().toISOString(),
      profileComment: newReply,
    };

    setComment((prevComment) => ({
      ...prevComment!,
      commentReplies: [...prevComment!.commentReplies, newCommentReply],
    }));

    setNewReply('');
    setReplyCount((prevCount) => prevCount + 1);
    setShowReplyAlert(false);

    setVisibleReplies((prevReplies) => [...prevReplies, newId]);
    setIsCommentFocused(false);

    try {
      const updatedReplies = [...comment!.commentReplies, newCommentReply];

      await fetch(`http://localhost:5000/theBlogPostComments/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ commentReplies: updatedReplies }),
      });
    } catch (error) {
      console.error('Error updating replies on the server:', error);
    }
  };

  const handleSeeMoreReplies = () => {
    const lastVisibleId = visibleReplies[visibleReplies.length - 1];
    const newVisibleReplies = [
      lastVisibleId + 1,
      lastVisibleId + 2,
      lastVisibleId + 3,
    ];
    setVisibleReplies((prevReplies) => [...prevReplies, ...newVisibleReplies]);
  };

  if (!comment) {
    return <p>Loading...</p>;
  }

  return (
    <div className="blog-comment">
      <div className="blog-comment-profile">
        <Image
          src={comment.profileImage}
          alt={comment.profileName}
          width={92}
          height={86}
          className="blog-comment-profile-img"
        />
        <div className="blog-comment-profile-name-and-time">
          <h4>{comment.profileName}</h4>
          <span className="comment-time">{comment.timeUploaded}</span>
        </div>
      </div>
      <p className="blog-comment-text">{comment.profileComment}</p>
      <div className="blog-comment-reactions">
        <div className="blog-comment-reaction" onClick={handleLikeClick}>
          <Image
            src={
              isLiked
                ? '/icons/thumbs-up/thumbs-up-clicked.png'
                : '/icons/thumbs-up/thumbs-up-2.png'
            }
            alt="thumbs-up"
            width={30}
            height={28}
            className="thumbs-up-2"
          />
          <span>{commentLikes}</span>
        </div>
        <div className="blog-comment-reaction" onClick={handleCommentClick}>
          <Image
            src={
              isCommentFocused
                ? '/icons/comment/comment-clicked.png'
                : '/icons/comment/comment-3.png'
            }
            alt="comment"
            width={29}
            height={27}
            className="comment-3"
          />
          <span>{replyCount}</span>
        </div>
      </div>

      {showReplyAlert && (
        <div className="custom-alert">
          <Image
            src="/icons/x.png"
            alt="Close"
            className="close-icon"
            width={21}
            height={21}
            onClick={() => {
              setShowReplyAlert(false);
              setIsCommentFocused(false);
            }}
          />
          <textarea
            id="addReply"
            name="addReply"
            value={newReply}
            onChange={(e) => setNewReply(e.target.value)}
            placeholder="Пиши одговор на коментарот..."
            className="alert-textarea"
          />
          <button onClick={handleReplySubmit}>Коментирај</button>
        </div>
      )}

      <div className="blog-comment-replies">
        {comment.commentReplies
          .filter((reply) => visibleReplies.includes(reply.id))
          .map((reply) => (
            <div
              key={reply.id}
              className="blog-comment-reply"
              data-comment-id={comment.id}
              data-reply-id={reply.id}
            >
              <div className="blog-comment-profile blog-comment-profile-2">
                <Image
                  src={reply.profileImage}
                  alt={reply.profileName}
                  width={69}
                  height={64.5}
                  className="blog-comment-profile-img"
                />
                <div className="blog-comment-profile-name-and-time">
                  <h4 className="profile-name-2">{reply.profileName}</h4>
                  <span className="comment-time">
                    {calculateTimeUploaded(reply.timeUploaded)}
                  </span>
                </div>
              </div>
              <p className="blog-comment-text">{reply.profileComment}</p>
            </div>
          ))}
        {comment.commentReplies.length > 3 && (
          <span
            className="blog-comment-replies-see-more"
            onClick={handleSeeMoreReplies}
          >
            Види повеќе
          </span>
        )}
      </div>
    </div>
  );
};

export default BlogComment;
