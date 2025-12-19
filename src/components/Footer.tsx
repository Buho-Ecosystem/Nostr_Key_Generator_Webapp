import { Github, Heart, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative z-10 mt-16 border-t border-slate-200/50 bg-white/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Left side - Branding */}
          <div className="flex items-center space-x-3">
            <img
              src="https://github.com/DoktorShift/images/blob/main/buho_logo.png?raw=true"
              alt="Buho Logo"
              className="w-8 h-8"
            />
            <div className="text-sm">
              <div className="font-bold text-slate-800">Buho</div>
              <div className="text-slate-600">Nostr Identity Tool</div>
            </div>
          </div>

          {/* Center - Links */}
          <div className="flex items-center space-x-6 text-sm">
            <a
              href="https://nostr.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-green-600 transition-colors flex items-center space-x-1"
            >
              <Globe className="w-4 h-4" />
              <span>About Nostr</span>
            </a>
            <a
              href="https://github.com/Buho-Ecosystem/Nostr_Key_Generator"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-green-600 transition-colors flex items-center space-x-1"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a
              href="https://nostrapps.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-green-600 transition-colors"
            >
              Explore Apps
            </a>
          </div>

          {/* Right side - Credits */}
          <div className="text-sm text-slate-600 flex items-center space-x-1">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>by</span>
            <a
              href="https://home.mybuho.de"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-slate-800 hover:text-green-600 transition-colors"
            >
              Buho
            </a>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-6 pt-6 border-t border-slate-200/50 text-center text-xs text-slate-500">
          <p>
            Your keys are generated locally in your browser. We never see or store your private keys.
          </p>
        </div>
      </div>
    </footer>
  );
}
