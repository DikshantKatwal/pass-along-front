import Footer from "@/components/footer";
import Header from "@/components/header";
import { HeaderProvider } from "@/context/headerWrapper";



export default function PublicLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <HeaderProvider>
            <div className="w-full grid grid-rows-[1fr_auto] 
                md:grid-rows-[1fr_auto] 
                min-h-screen 
                ">
                <div className="p-1 sm:p-3  w-full grid grid-rows-[50px_1fr] 
                md:grid-rows-[60px_1fr] 
                min-h-screen">
                    <Header />
                    {children}
                </div>

                <Footer />

            </div>
        </HeaderProvider>
    );
}
// backdrop-blur-lg 
