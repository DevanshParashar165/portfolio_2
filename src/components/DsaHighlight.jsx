import React from 'react';
import './DsaHighlight.css';

const DsaHighlight = () => {
  const dsaTopics = [
    { name: 'Arrays', desc: 'Linear structures, sliding window, two pointers' },
    { name: 'Strings', desc: 'Pattern matching, hashing, manipulation' },
    { name: 'Recursion', desc: 'Backtracking, divide & conquer, search space' },
    { name: 'Dynamic Programming', desc: 'Memoization, tabulation, optimization problems' },
    { name: 'Trees', desc: 'Binary search trees, traversals, depth/breadth first search' },
    { name: 'Graphs', desc: 'Adjacency lists, BFS/DFS, shortest paths, spanning trees' },
    { name: 'Greedy Algorithms', desc: 'Interval scheduling, optimal choices, sorting strategies' }
  ];

  return (
    <section className="section dsa-section reveal">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Problem Solving</span>
          <h2 className="section-title">Data Structures &amp; Algorithms</h2>
        </div>

        <div className="dsa-grid">
          {/* Big Stat display */}
          <div className="dsa-stat-card card">
            <div className="dsa-stat-circle">
              <span className="dsa-stat-number">500+</span>
              <span className="dsa-stat-label">Problems Solved</span>
            </div>
            
            <div className="dsa-stat-details">
              <h3>Technical Competence</h3>
              <p>
                Solved 500+ algorithmic challenges across LeetCode and other competitive coding platforms, demonstrating proficiency in complexity analysis, memory optimization, and structured debugging.
              </p>
              <div className="dsa-platforms-strip">
                <span className="platform-tag">LeetCode</span>
                <span className="platform-tag">HackerRank</span>
              </div>
            </div>
          </div>

          {/* Visual pipeline of topics */}
          <div className="dsa-topics-timeline">
            <h3>Covered Domains &amp; Concepts</h3>
            <div className="pipeline-container">
              {dsaTopics.map((topic, idx) => (
                <div key={idx} className="pipeline-node">
                  <div className="node-marker">
                    <span className="node-index">{idx + 1}</span>
                    {idx < dsaTopics.length - 1 && <span className="node-line"></span>}
                  </div>
                  <div className="node-content card">
                    <h4>{topic.name}</h4>
                    <p>{topic.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DsaHighlight;
