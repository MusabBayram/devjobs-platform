import PostFeed from "../components/PostFeed";
import SidebarProfile from "../components/SidebarProfile";
import RightSidebar from "../components/RightSidebar";

export default function HomePage() {
  return (
    <main className="flex flex-col md:flex-row justify-center gap-6 p-4">
      <div className="hidden md:block w-full max-w-xs">
        <SidebarProfile />
      </div>
      <div className="flex-grow max-w-2xl w-full">
        <PostFeed />
      </div>
      <div className="hidden lg:block w-full max-w-xs">
        <RightSidebar />
      </div>
    </main>
  );
}
