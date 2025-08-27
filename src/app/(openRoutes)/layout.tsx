import Footer from "@/components/modules/Shared/Footer";
import Navbar from "@/components/modules/Shared/Navbar";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-[1440px] mx-auto px-4 lg:px-[100px]">
      <div className="">
        <Navbar />
      </div>
      <main className="min-h-[calc(100vh-200px)] "> {children}</main>
      <Footer/>
    </div>
  );
};

export default CommonLayout;
