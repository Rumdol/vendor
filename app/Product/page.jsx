'use client';

import PrimarySearchAppBar from '@/components/Appbar/AppBar';
import VerticalTabs from '@/components/Tabbar/tabs';
import ProductTable from '@/components/Product/Producttable';

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-white">
      <PrimarySearchAppBar />
      <div className="flex">
        <VerticalTabs className="w-1/4" />
        <div className="flex-grow">
          <ProductTable />
        </div>
      </div>
    </div>
  );
}
