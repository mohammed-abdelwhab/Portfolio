import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../../data/projects';
import LivePreview from './LivePreview';
import PlayerCard from './PlayerCard';

const SplitView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const found = projects.find(p => p.id === parseInt(id));
    if (found) {
      setProject(found);
    } else {
      // If not found, navigate back to pitch
      navigate('/');
    }
  }, [id, navigate]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 top-16 bg-board-dark z-30 flex flex-col md:flex-row overflow-hidden"
        initial={{ y: '100%', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: '100%', opacity: 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }} // spring-like ease
      >
        <div className="flex-[0.7] h-full p-4 md:p-8 flex items-center justify-center relative overflow-hidden">
          <LivePreview url={project.liveUrl} name={project.name} repoUrl={project.repoUrl} />
        </div>
        <div className="flex-[0.3] h-full border-t-2 md:border-t-0 md:border-l-2 border-outline bg-[#111] overflow-y-auto">
          <PlayerCard project={project} onBack={() => navigate('/')} />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SplitView;
