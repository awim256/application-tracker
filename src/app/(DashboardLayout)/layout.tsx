import Sidebar from '@/ui/components/sidebar/sidebar';
import Header from "@/app/(DashboardLayout)/layout/header/header";

export default function Layout({children}: { children: React.ReactNode }) {
    return (
        <div className='flex min-h-full w-full'>
            <Sidebar/>
            <div className="flex flex-1 pb-16 flex-col z-1 bg-transparent">
                <Header />
                <div className='container mx-auto p-5'>
                {children}
                </div>
            </div>
        </div>
    );
}
