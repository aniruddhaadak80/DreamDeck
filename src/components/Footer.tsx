
import React from 'react';
import { Star, Heart } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/aniruddha-adak',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    {
      name: 'GitHub',
      url: 'https://github.com/AniruddhaAdak',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    },
    {
      name: 'Twitter',
      url: 'https://x.com/aniruddhadak',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    },
    {
      name: 'Dev.to',
      url: 'https://dev.to/aniruddhaadak',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6.1v4.36h.48c.38 0 .66-.07.84-.23.18-.16.27-.42.27-.78v-2.34c0-.36-.09-.62-.27-.78zM0 4.94v14.12h24V4.94H0zM8.56 15.3c-.44.58-1.06.87-1.86.87H4.84V7.83h1.86c.8 0 1.42.29 1.86.87.44.58.66 1.32.66 2.22v1.36c0 .9-.22 1.64-.66 2.22zM13.25 15.3c-.44.58-1.06.87-1.86.87h-1.86V7.83h1.86c.8 0 1.42.29 1.86.87.44.58.66 1.32.66 2.22v1.36c0 .9-.22 1.64-.66 2.22zM18.54 10.05c-.18-.16-.46-.23-.84-.23h-.48v4.36h.48c.38 0 .66-.07.84-.23.18-.16.27-.42.27-.78v-2.34c0-.36-.09-.62-.27-.78z"/>
        </svg>
      )
    },
    {
      name: 'CodePen',
      url: 'https://codepen.io/aniruddhaadak',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.144 13.067v-2.134L16.55 12zm1.276 1.194a.628.628 0 01-.006.083l-.005.028-.011.053-.01.031c-.005.016-.01.031-.017.047l-.014.03a.78.78 0 01-.021.043l-.019.03a.57.57 0 01-.08.1l-.026.025a.602.602 0 01-.036.03l-.029.022-.01.008-6.782 4.522a.637.637 0 01-.708 0L4.87 14.28l-.01-.007a.628.628 0 01-.65-.65l-.005-.028a.627.627 0 01-.006-.083V9.739c0-.028.002-.055.006-.083l.005-.027.011-.054.01-.031c.005-.016.011-.031.017-.047l.014-.03a.78.78 0 01.021-.043l.019-.03a.57.57 0 01.08-.1l.026-.025a.602.602 0 01.036-.03l.029-.022.01-.008 6.782-4.521a.638.638 0 01.708 0l6.782 4.521.01.008.029.022.036.03.026.025a.57.57 0 01.08.1l.019.03a.78.78 0 01.021.043l.014.03c.007.016.012.031.017.047l.01.031.011.054.005.027a.628.628 0 01.006.083v4.522zm-1.276-2.194L16.55 12l1.594-1.067zm-4.961 7.332l-5.065-3.376 2.016-1.35 3.049 2.041zm.708-2.687l-2.26-1.516 2.26-1.516 2.26 1.516zm-.708-11.331l-3.049 2.041-2.016-1.35L15.183 2.7zm-4.961 1.705L5.4 9.427v2.146L7.856 12zm1.276 3.048L7.856 12l1.642-1.194zm4.961-1.705l3.049-2.041 2.016 1.35L8.817 21.3zm4.961-1.705L18.6 9.427v2.146L16.144 12z"/>
        </svg>
      )
    },
    {
      name: 'Portfolio',
      url: 'https://aniruddha-adak.vercel.app',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      )
    },
    {
      name: 'Email',
      url: 'mailto:aniruddhaadak80@gmail.com',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>
      )
    },
    {
      name: 'Telegram',
      url: 'https://t.me/aniruddhadak',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
        </svg>
      )
    },
    {
      name: 'LinkTree',
      url: 'https://linktr.ee/aniruddha.adak',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M7.953 15.066c-.08.163-.08.324-.08.486.08.517.528.897 1.052.809l1.572-.32c-.16-.486-.16-.973-.16-1.46--.16-.325-.322-.486-.486-.647l-.898.134zM15.066 8.06c.163-.081.324-.081.486-.081.517.081.897.529.809 1.053l-.32 1.572c-.486-.16-.973-.16-1.46-.16-.325-.16-.486-.322-.647-.486l.132-.898zM12.54 7.032c.405-3.656 4.061-4.707 7.555-2.588a6.21 6.21 0 0 1 1.863 8.244c-.405 3.656-4.061 4.707-7.555 2.588A6.21 6.21 0 0 1 12.54 7.032zM7.032 11.46c3.656-.405 4.707-4.061 2.588-7.555a6.21 6.21 0 0 0-8.244-1.863c-3.656.405-4.707 4.061-2.588 7.555A6.21 6.21 0 0 0 7.032 11.46z"/>
        </svg>
      )
    }
  ];

  const quickLinks = [
    { name: 'About DreamDeck', href: '#about' },
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Support', href: '#support' },
    { name: 'Privacy Policy', href: '#privacy' },
    { name: 'Terms of Service', href: '#terms' }
  ];

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-sunset rounded-xl flex items-center justify-center">
                <Star className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-display font-bold gradient-text">DreamDeck</h3>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Transform your dreams into reality with our comprehensive goal-setting and achievement platform. 
              Join thousands of successful dreamers on their journey to success.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <Heart className="w-4 h-4 text-red-400" />
              <span>Made with love by</span>
              <a 
                href="https://aniruddha-adak.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sunset hover:text-sunset-light transition-colors font-semibold"
              >
                Aniruddha Adak
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-sunset transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect with Creator */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Connect with Creator</h4>
            <div className="grid grid-cols-3 gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800 hover:bg-gradient-sunset rounded-lg flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300 hover:scale-110"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <div className="mt-6 text-sm text-gray-400">
              <p className="mb-2">Get in touch:</p>
              <a 
                href="mailto:aniruddhaadak80@gmail.com"
                className="text-sunset hover:text-sunset-light transition-colors"
              >
                aniruddhaadak80@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 DreamDeck by Aniruddha Adak. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <a href="#privacy" className="hover:text-sunset transition-colors">Privacy</a>
              <a href="#terms" className="hover:text-sunset transition-colors">Terms</a>
              <a href="#support" className="hover:text-sunset transition-colors">Support</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
