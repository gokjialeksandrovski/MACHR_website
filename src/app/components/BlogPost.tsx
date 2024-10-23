'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import BlogPostDetails from './BlogPostDetails';
import BlogComment from './BlogPostComment';
import { useLanguage } from './LanguageContext';

interface BlogPostData {
  id: number;
  title: {
    mk: string;
    en: string;
  };
  content: {
    mk: string;
    en: string;
  };
  sections: {
    title: {
      mk: string;
      en: string;
    };
    content: {
      mk: string;
      en: string;
    };
    tip?: {
      mk: string;
      en: string;
    };
  }[];
}

interface Reply {
  id: number;
  profileImage: string;
  profileName: string;
  timeUploaded: string;
  profileComment: string;
}

interface NewComment {
  id: string;
  profileImage: string;
  profileName: string;
  timeUploaded: string;
  profileComment: string;
  commentReplies: Reply[];
}

const BlogPost: React.FC = () => {
  const { language } = useLanguage();
  const [blogPost, setBlogPost] = useState<BlogPostData | null>(null);
  const [newCommentsList, setNewCommentsList] = useState<NewComment[]>([]);
  const [newComment, setNewComment] = useState<string>('');
  const [isCommentFocused, setIsCommentFocused] = useState<boolean>(false);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const getSessionValue = (key: string, defaultValue: string) => {
    if (typeof window !== 'undefined' && sessionStorage) {
      return sessionStorage.getItem(key) || defaultValue;
    }
    return defaultValue;
  };

  const [likeCount, setLikeCount] = useState<number>(
    parseInt(getSessionValue('likeCount', '365'))
  );
  const [heartCount, setHeartCount] = useState<number>(
    parseInt(getSessionValue('heartCount', '86'))
  );
  const [commentCount, setCommentCount] = useState<number>(
    parseInt(getSessionValue('commentCount', '552'))
  );

  const [liked, setLiked] = useState<boolean>(
    getSessionValue('liked', 'false') === 'true'
  );
  const [hearted, setHearted] = useState<boolean>(
    getSessionValue('hearted', 'false') === 'true'
  );

  useEffect(() => {
    const loadComments = async () => {
      const storedComments = getSessionValue('newCommentsList', '[]');
      let commentsFromSession: NewComment[] = storedComments
        ? JSON.parse(storedComments)
        : [];

      const fetchedComments = await fetchCommentsFromServer();
      setNewCommentsList([...fetchedComments, ...commentsFromSession]);

      const lastCommentId =
        [...fetchedComments, ...commentsFromSession].length > 0
          ? Math.max(
              ...[...fetchedComments, ...commentsFromSession].map((comment) =>
                parseInt(comment.id)
              )
            )
          : 2;

      if (typeof window !== 'undefined' && sessionStorage) {
        sessionStorage.setItem('lastCommentId', lastCommentId.toString());
      }
    };

    const fetchCommentsFromServer = async (): Promise<NewComment[]> => {
      try {
        const response = await fetch(
          'http://localhost:5000/theBlogPostComments'
        );
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error fetching comments from the server:', error);
        return [];
      }
    };

    const fetchBlogPost = async () => {
      try {
        const response = await fetch('http://localhost:5000/theBlogPost/1');
        const data = await response.json();
        setBlogPost(data);
      } catch (error) {
        console.error('Error fetching blog post:', error);
      }
    };

    fetchBlogPost();
    loadComments();
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined' && sessionStorage) {
      sessionStorage.setItem(
        'newCommentsList',
        JSON.stringify(newCommentsList)
      );
    }
  }, [newCommentsList]);

  useEffect(() => {
    if (typeof window !== 'undefined' && sessionStorage) {
      sessionStorage.setItem('likeCount', likeCount.toString());
    }
  }, [likeCount]);

  useEffect(() => {
    if (typeof window !== 'undefined' && sessionStorage) {
      sessionStorage.setItem('heartCount', heartCount.toString());
    }
  }, [heartCount]);

  useEffect(() => {
    if (typeof window !== 'undefined' && sessionStorage) {
      sessionStorage.setItem('commentCount', commentCount.toString());
    }
  }, [commentCount]);

  useEffect(() => {
    if (typeof window !== 'undefined' && sessionStorage) {
      sessionStorage.setItem('liked', liked.toString());
    }
  }, [liked]);

  useEffect(() => {
    if (typeof window !== 'undefined' && sessionStorage) {
      sessionStorage.setItem('hearted', hearted.toString());
    }
  }, [hearted]);

  const handleLikeClick = () => {
    if (liked) {
      setLikeCount((prevCount) => prevCount - 1);
    } else {
      setLikeCount((prevCount) => prevCount + 1);
    }
    setLiked(!liked);
  };

  const handleHeartClick = () => {
    if (hearted) {
      setHeartCount((prevCount) => prevCount - 1);
    } else {
      setHeartCount((prevCount) => prevCount + 1);
    }
    setHearted(!hearted);
  };

  const handleCommentClick = () => {
    textareaRef.current?.focus();
    setIsCommentFocused(true);
  };

  const handleAddComment = async () => {
    if (newComment.trim()) {
      const lastCommentId = parseInt(getSessionValue('lastCommentId', '2'));
      const nextId = (lastCommentId + 1).toString();

      const newAddedComment: NewComment = {
        id: nextId,
        profileImage: '/images/blog-post/blog-post-add-comment-image.png',
        profileName: 'Нов корисник',
        timeUploaded: 'Сега',
        profileComment: newComment,
        commentReplies: [],
      };

      setNewCommentsList((prevComments) => [newAddedComment, ...prevComments]);
      setNewComment('');
      setCommentCount((prevCount) => prevCount + 1);

      if (typeof window !== 'undefined' && sessionStorage) {
        sessionStorage.setItem('lastCommentId', nextId);
      }

      try {
        await fetch('http://localhost:5000/theBlogPostComments', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newAddedComment),
        });
      } catch (error) {
        console.error('Error adding comment to the server:', error);
      }
    }
  };

  const renderComments = (comment: NewComment) => {
    const commentId = parseInt(comment.id);
    const isOriginalComment = comment.id === '1' || comment.id === '2';

    const storedLikes = parseInt(
      getSessionValue(
        `commentLikes-${commentId}`,
        isOriginalComment ? '365' : '0'
      )
    );
    const storedReplies = parseInt(
      getSessionValue(
        `commentReplies-${commentId}`,
        isOriginalComment ? '552' : '0'
      )
    );

    return (
      <BlogComment
        key={`${commentId}-${Math.random()}`}
        id={commentId}
        likes={storedLikes}
        replies={storedReplies}
      />
    );
  };

  if (!blogPost) {
    return <p>Loading...</p>;
  }

  const renderContent = (content: { mk: string; en: string }) => {
    return content[language];
  };

  return (
    <div className="blog-post">
      <div className="blog-post-container">
        <div className="blog-post-mini-section">
          <h1 className="conference-title">{renderContent(blogPost.title)}</h1>
          <p>{renderContent(blogPost.content)}</p>
        </div>

        {blogPost.sections.map((section, index) => (
          <div className="blog-post-mini-section" key={index}>
            <h2 className="about-us-title">{renderContent(section.title)}</h2>
            <p>{renderContent(section.content)}</p>
            {section.tip && (
              <p className="tipP">
                <span>{language === 'mk' ? 'Совет' : 'Tip'}:&nbsp;</span>
                {renderContent(section.tip)}
              </p>
            )}
          </div>
        ))}

        <div className="blog-post-reactions">
          <div className="blog-post-reaction" onClick={handleLikeClick}>
            <Image
              src={
                liked
                  ? '/icons/thumbs-up/thumbs-up-clicked.png'
                  : '/icons/thumbs-up/thumbs-up.png'
              }
              alt="Like"
              width={34.17}
              height={32.46}
            />
            <span className="like-1">{likeCount}</span>
          </div>
          <div className="blog-post-reaction" onClick={handleHeartClick}>
            <Image
              src={
                hearted
                  ? '/icons/heart/heart-clicked.png'
                  : '/icons/heart/heart.png'
              }
              alt="Heart"
              width={34.17}
              height={31.35}
            />
            <span>{heartCount}</span>
          </div>
          <div className="blog-post-reaction" onClick={handleCommentClick}>
            <Image
              src={
                isCommentFocused
                  ? '/icons/comment/comment-clicked.png'
                  : '/icons/comment/comment-2.png'
              }
              alt="Comment"
              width={35}
              height={30.62}
            />
            <span>{commentCount}</span>
          </div>
        </div>

        <div className="social-share-buttons blog-post-share">
          <span>
            {language === 'mk'
              ? 'Ти се допаѓа овој блог? Сподели го!'
              : 'Do you like this blog? Share it!'}
          </span>
          <div className="social-icons">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/icons/social-media/facebook-white.png"
                alt="Facebook"
                width={23.25}
                height={22.25}
              />
            </a>
            <a
              href="https://x.com/?lang=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/icons/social-media/x-white.png"
                alt="X"
                width={22.25}
                height={22.25}
              />
            </a>
            <a
              href="https://mk.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/icons/social-media/linkedin-white.png"
                alt="LinkedIn"
                width={22.25}
                height={22.25}
              />
            </a>
          </div>
        </div>
        <div className="blog-post-add-comment">
          <div className="comment-input">
            <Image
              src="/images/blog-post/blog-post-add-comment-image.png"
              alt="Profile pic"
              width={69}
              height={64.5}
            />
            <textarea
              id="addComment"
              name="addComment"
              ref={textareaRef}
              value={newComment}
              onFocus={() => setIsCommentFocused(true)}
              onBlur={() => setIsCommentFocused(false)}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder={
                language === 'mk' ? 'Пиши коментар...' : 'Write a comment...'
              }
            />
          </div>
          <div
            className="blog-post-comments-attach"
            style={{
              backgroundImage: `url('/images/blog-post/blog-post-add-comment-dots.png')`,
            }}
          >
            <button onClick={handleAddComment}>
              {language === 'mk' ? 'Коментирај' : 'Comment'}
            </button>
          </div>
        </div>
        <div className="blog-post-comments">
          <h3 className="about-us-title">
            {language === 'mk' ? 'Коментари' : 'Comments'}
          </h3>
          {newCommentsList.map(renderComments)}
        </div>
      </div>
      <BlogPostDetails />

      <Image
        src="/images/blog-post-details/blog-post-details-dots.png"
        alt="Dot Background"
        width={590}
        height={352}
        className="blog-post-details-dots"
      />
      <Image
        src="/images/blog-post/blog-post-dots.png"
        alt="Dot Background"
        width={2053}
        height={418}
        className="blog-post-dots-1"
      />
      <Image
        src="/images/blog-post/blog-post-dots-2.png"
        alt="Dot Background"
        width={2053}
        height={433}
        className="blog-post-dots-2"
      />
    </div>
  );
};

export default BlogPost;
