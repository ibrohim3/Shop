import React from "react";
import "./Skeleton.css";

function SkeletonCard({ count = 5 }) {
  return (
    <div className="skeleton-wrapper">
      {[...Array(count)].map((_, i) => (
        <div className="skeleton-card" key={i}>
          <div className="skeleton-image"></div>
          <div className="skeleton-text short"></div>
          <div className="skeleton-text long"></div>
          <div className="skeleton-text long"></div>
        </div>
      ))}
    </div>
  );
}

export default SkeletonCard;
