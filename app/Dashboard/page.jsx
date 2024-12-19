'use client';
import VerticalTabs from '@/components/Tabbar/tabs';
import DashboardCard from '@/components/DashboardComponent/Card';

export default function DashboardPage() {
  return (
    <div className="min-h-screen flex items-center justify-left bg-white">
      <VerticalTabs>
        <DashboardCard />
      </VerticalTabs>
    </div>
  );
}
