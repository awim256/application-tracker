import Sidebar from '@/ui/components/sidebar/sidebar';

export default function Layout({children}: { children: React.ReactNode }) {
    return (
        <div>
            <Sidebar/>
            <div className="flex-grow p-6 md:overflow-y-auto md:p-12 lg:ml-72">{children}</div>
        </div>
    );
}
