'use client';
import VerticalTabs from '@/components/Tabbar/tabs';
import PrimarySearchAppBar from '@/components/Appbar/AppBar';

export default function ThehomePage() {
  return (
    <div className="min-h-screen flex items-center justify-left bg-white">
      <PrimarySearchAppBar/>
      <VerticalTabs>
      </VerticalTabs>
    </div>
  );
}
