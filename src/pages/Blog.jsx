import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Bookmark, ExternalLink, MessageCircle, ThumbsDown, ThumbsUp } from "lucide-react";
import { GlassPanel, SectionHeading, fadeUp, stagger } from "../components/PremiumUI";
import { blogPosts, pageContent } from "../data/portfolioData";

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [saved, setSaved] = useState({});

  useEffect(() => {
    const savedVotes = JSON.parse(localStorage.getItem("vd_blog_votes") || "{}");
    const votedByUser = JSON.parse(localStorage.getItem("vd_blog_voted") || "{}");
    const bookmarks = JSON.parse(localStorage.getItem("vd_blog_bookmarks") || "{}");
    setSaved(bookmarks);
    setPosts(blogPosts.map((post) => ({
      ...post,
      agree: savedVotes[post.id]?.agree || 0,
      disagree: savedVotes[post.id]?.disagree || 0,
      userVote: votedByUser[post.id] || null,
      readTime: `${Math.max(1, Math.ceil(post.text.split(" ").length / 90))} min read`,
    })));
  }, []);

  function vote(id, type) {
    const votedByUser = JSON.parse(localStorage.getItem("vd_blog_voted") || "{}");
    if (votedByUser[id]) return;
    const next = posts.map((post) => post.id === id ? { ...post, [type]: post[type] + 1, userVote: type } : post);
    setPosts(next);
    localStorage.setItem("vd_blog_votes", JSON.stringify(Object.fromEntries(next.map((post) => [post.id, { agree: post.agree, disagree: post.disagree }]))));
    localStorage.setItem("vd_blog_voted", JSON.stringify({ ...votedByUser, [id]: type }));
  }

  function toggleBookmark(id) {
    const next = { ...saved, [id]: !saved[id] };
    setSaved(next);
    localStorage.setItem("vd_blog_bookmarks", JSON.stringify(next));
  }

  return (
    <section className="page">
      <div className="reading-progress" />
      <SectionHeading eyebrow={pageContent.blog.eyebrow} title={pageContent.blog.title} align="center">
        {pageContent.blog.description}
      </SectionHeading>

      <motion.div className="blog-grid-premium" variants={stagger} initial="hidden" animate="visible">
        {posts.map((post) => (
          <GlassPanel key={post.id} className="blog-card-premium" variants={fadeUp}>
            <div className="blog-meta">
              <span>{post.category}</span>
              <span>{post.readTime}</span>
              <span>{post.date}</span>
            </div>
            <h2>{post.title}</h2>
            <p>{post.text}</p>
            <div className="blog-actions">
              <button className={post.userVote === "agree" ? "active" : ""} onClick={() => vote(post.id, "agree")} disabled={!!post.userVote}>
                <ThumbsUp size={17} /> {post.agree}
              </button>
              <button className={post.userVote === "disagree" ? "active danger" : "danger"} onClick={() => vote(post.id, "disagree")} disabled={!!post.userVote}>
                <ThumbsDown size={17} /> {post.disagree}
              </button>
              <button className={saved[post.id] ? "active" : ""} onClick={() => toggleBookmark(post.id)}>
                <Bookmark size={17} /> Save
              </button>
              <span><MessageCircle size={17} /> 0</span>
              {post.readMoreLink && (
                <a href={post.readMoreLink} target="_blank" rel="noreferrer">
                  <ExternalLink size={17} /> Read More
                </a>
              )}
            </div>
          </GlassPanel>
        ))}
      </motion.div>
    </section>
  );
}
