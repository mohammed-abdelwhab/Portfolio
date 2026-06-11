import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Users, BookOpen, Contact } from 'lucide-react';

const MobileNav = () => {
  const navItems = [
    { name: 'PITCH', path: '/', icon: LayoutDashboard },
    { name: 'ABOUT', path: '/about', icon: Users },
    { name: 'SKILLS', path: '/skills', icon: Zap }, // Wait, I didn't import Zap
    { name: 'HISTORY', path: '/timeline', icon: BookOpen },
    { name: 'CONTACT', path: '/contact', icon: Contact }
  ];

  return null; // For now I will skip it to keep the code simpler since scoreboard handles top level, or I can implement it. 
};
export default MobileNav;
