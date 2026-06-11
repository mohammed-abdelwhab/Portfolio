import React, { useState, useEffect } from 'react';
import { ExternalLink, Code2 } from 'lucide-react';

const LivePreview = ({ url, name, repoUrl }) => {
  const [iframeState, setIframeState] = useState('loading'); // 'loading', 'success', 'error'
  
  // Some URLs like GitHub repos cannot be embedded due to X-Frame-Options.
  // We'll use a timeout to detect if it failed or if it's a known non-embeddable URL.
  const isGithubRepo = url && url.includes('github.com');
  
  useEffect(() => {
    if (!url || url === '#' || isGithubRepo) {
      setIframeState('error');
      return;
    }
    
    setIframeState('loading');
    
    // Fallback timeout: if it hasn't loaded successfully in 5 seconds, assume error
    const timer = setTimeout(() => {
      if (iframeState === 'loading') {
        setIframeState('error');
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [url, isGithubRepo]);

  const handleIframeLoad = () => {
    setIframeState('success');
  };

  return (
    <div className="w-full h-full flex flex-col rounded-xl overflow-hidden bg-[#1e1e1e] shadow-2xl border border-outline">
      {/* Browser Chrome */}
      <div className="h-10 bg-charcoal border-b border-outline flex items-center px-4 gap-4">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
        </div>
        <div className="flex-1 bg-board-dark rounded-md px-3 py-1 text-xs font-mono text-gray-400 text-center overflow-hidden whitespace-nowrap text-ellipsis">
          {url && url !== '#' ? url : repoUrl}
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 relative bg-board-dark">
        {iframeState === 'loading' && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-bebas text-2xl text-electric-lime animate-pulse">WARMING UP...</span>
          </div>
        )}
        
        {iframeState !== 'error' && (
          <iframe
            src={url}
            title={`${name} Live Preview`}
            className="w-full h-full border-none bg-white"
            sandbox="allow-scripts allow-same-origin allow-forms"
            onLoad={handleIframeLoad}
            style={{ opacity: iframeState === 'success' ? 1 : 0, transition: 'opacity 0.3s' }}
          />
        )}

        {iframeState === 'error' && (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-charcoal border-2 border-dashed border-outline rounded-lg m-4">
            <div className="w-20 h-20 rounded-full border border-electric-lime flex items-center justify-center mb-6 bg-[#1a1a1a]">
              <Code2 size={32} className="text-electric-lime" />
            </div>
            <h3 className="font-bebas text-3xl mb-2 text-white">PROJECT READY</h3>
            <p className="font-inter text-gray-400 mb-8 max-w-sm">
              This project is best experienced in a full browser tab. Click below to view the live deployment or source code.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              {url && url !== '#' && !isGithubRepo && (
                <a href={url} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-electric-lime text-charcoal font-bebas text-xl flex items-center gap-2 hover:bg-white transition-colors">
                  OPEN LIVE <ExternalLink size={20} />
                </a>
              )}
              {repoUrl && repoUrl !== '#' && (
                <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="px-6 py-3 border-2 border-electric-lime text-electric-lime font-bebas text-xl flex items-center gap-2 hover:bg-electric-lime hover:text-charcoal transition-colors">
                  VIEW CODE <Code2 size={20} />
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LivePreview;
