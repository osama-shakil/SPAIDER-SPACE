import React from 'react';

const KnowledgeGraphWindow = () => {
  return (
    <div className="flex flex-col h-[80vh] overflow-hidden  bg-github-secondary rounded shadow-md">
      <iframe
        src="/knowledge_graph.html" // Correct path starting from the public folder
        title="Knowledge Graph"
        style={{ width: '100%', height: '100%'}}
        frameBorder="0"
      />
    </div>
  );
}

export default KnowledgeGraphWindow;
