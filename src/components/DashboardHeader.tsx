
import { Coffee, Menu, Bell, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const DashboardHeader = ({ onMenuClick }: { onMenuClick: () => void }) => {
  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-coffee-200 px-6 py-4 sticky top-0 z-40">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={onMenuClick}
            className="lg:hidden hover:bg-coffee-100"
          >
            <Menu className="h-5 w-5" />
          </Button>
          
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-coffee-600 to-coffee-700 rounded-xl shadow-lg">
              <Coffee className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-coffee-900">Código com Café</h1>
              <p className="text-sm text-coffee-600">Dashboard</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="hover:bg-coffee-100">
            <Bell className="h-5 w-5 text-coffee-700" />
          </Button>
          <Button variant="ghost" size="icon" className="hover:bg-coffee-100">
            <Settings className="h-5 w-5 text-coffee-700" />
          </Button>
          <Avatar className="w-9 h-9 border-2 border-coffee-200">
            <AvatarImage src="/api/placeholder/32/32" alt="Usuário" />
            <AvatarFallback className="bg-coffee-100 text-coffee-700 text-sm font-semibold">
              CC
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
