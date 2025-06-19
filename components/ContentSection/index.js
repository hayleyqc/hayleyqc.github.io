import React from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import Vimeo from "../Vimeo";
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

const CodeBlock = {
  code({ node, inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || "");
    return !inline && match ? (
      <SyntaxHighlighter
        style={dracula}
        language={match[1]}
        PreTag="div"
        {...props}
      >
        {String(children).replace(/\n$/, "")}
      </SyntaxHighlighter>
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
};

const ContentSection = ({ content }) => {
  // Extract Vimeo components and replace them with placeholders
  const processContent = (content) => {
    return content.replace(
      /<Vimeo\s+id=["'](\d+)["']\s*\/>/g,
      (match, id) => `%%VIMEO_${id}%%`
    );
  };

  // Replace placeholders with Vimeo components
  const renderProcessedContent = (processedContent) => {
    const parts = processedContent.split(/(%%VIMEO_\d+%%)/);
    
    return parts.map((part, index) => {
      const match = part.match(/%%VIMEO_(\d+)%%/);
      if (match) {
        return <Vimeo key={index} id={match[1]} />;
      }
      return (
        <ReactMarkdown
          key={index}
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          components={CodeBlock}
        >
          {part}
        </ReactMarkdown>
      );
    });
  };

  const processedContent = processContent(content);
  
  return (
    <div className="markdown-class">
      {renderProcessedContent(processedContent)}
    </div>
  );
};

export default ContentSection;
