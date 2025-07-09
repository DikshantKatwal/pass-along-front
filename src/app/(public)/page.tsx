import { ArrowLongUpIcon } from "@heroicons/react/24/solid";
import { Instagram, Facebook, Box } from 'lucide-react';
import CounterComponent from "./components/homeCounter";
import { Fragment } from "react";
import { getQueryClient } from "../get-query-client";
import serverApiService from "@/lib/serverApi";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import RecentItems from "./components/RecentItems";
import ThoughtSection from "./components/ThoughtSection";
export default async function Home() {
    const queryClient = getQueryClient();
    await queryClient.prefetchQuery({
        queryKey: ['items'],
        queryFn: () => serverApiService.get({ url: '/api/items' }),
    });

    return (
        <div>
            <div className="font-nunito overflow-hidden grid xl:grid-cols-[1fr_300px]  lg:grid-rows-1 grid-rows-[1fr_150px] sm:grid-rows-[1fr_200px]  gap-2 p-1 pt-10 sm:pt-2 w-full">
                <div className="grid grid-rows-1 lg:grid-rows-1 gap-2">
                    <div className="p-2 sm:p-5  grid xl:pl-20 grid-rows-[auto_1fr] overflow-hidden">
                        <div className="font-oswald flex  lg:hidden items-center  font-bold text-5xl tracking-tight ">Reduce waste, share joy, create a cycle of giving.</div>
                        <div className="grid lg:grid-cols-2 row-span-3 ">
                            <div className="relative overflow-hidden order-1 lg:order-2 ">
                                <div
                                    className="h-64 sm:h-80 lg:h-full bg-contain bg-center bg-no-repeat relative transform scale-125 sm:scale-110  transition-transform duration-300"
                                    style={{
                                        backgroundImage: "url('/no-bg.png')",
                                        maskImage: "linear-gradient(to left, rgba(0,0,0,1) 18%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0) 100%)",
                                        WebkitMaskImage: "linear-gradient(to left, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0) 100%)"
                                    }}
                                >
                                </div>
                            </div>

                            <div className=" tracking-wide md:tracking-widest lg:tracking-wide md:text-2xl text-xl  gap-4 grid grid-rows-[1fr_auto_auto_2fr] order-2 lg:order-1 ">
                                <div></div>
                                <div className="font-oswald hidden lg:flex  items-center  font-bold text-5xl tracking-tight ">Reduce waste, share joy, <br /> create a cycle of giving.</div>

                                <div className="font-semibold mt-auto mb-10 text-foreground/80">

                                    Pass it along today and make tomorrow a little brighter.<br />
                                    Share with purpose. Pass along what matters.<br />
                                    <span className="font-semibold rounded-xl hover:text-white/30">Sign up</span> to connect.

                                </div>

                                <div className="font-thin flex">
                                    <div className="rounded-full cursor-pointer relative border-2 flex sm:p-1 px-2 sm:px-3 group pr-10 sm:pr-3 sm:hover:pr-10 transition-all duration-500 h-10 sm:h-14 items-center">
                                        <span className="">
                                            View Items
                                        </span>
                                        <span className="transition-all overflow-hidden  absolute duration-500  rotate-45
                                            group-hover:opacity-100 right-2.5 sm:opacity-0">

                                            <ArrowLongUpIcon className="size-6" />

                                        </span>
                                    </div>
                                </div>
                                <div className="font-thin flex items-center gap-3">
                                    Follow us on:
                                    <Instagram className="size-5 cursor-pointer" />
                                    <Facebook className="size-5 cursor-pointer" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <CounterComponent />
            </div >
            <div className="mt-6 grid grid-rows-[60px_500px]  sm:grid-rows-[70px_500px] ">
                <div className=" flex items-center justify-center border-y border-inactive/50 mx-5">
                    <h1 className="font-bold font-oswald text-2xl">
                        Recent Passes
                    </h1>
                </div>
                <HydrationBoundary state={dehydrate(queryClient)}>
                    <RecentItems />
                </HydrationBoundary>

            </div>
            <div className="border-t xl:pl-20  border-inactive/50">
                <div className="flex  flex-col gap-5 p-2 sm:p-5 overflow-hidden">
                    <div className="font-oswald flex items-center font-bold text-5xl tracking-tight ">
                        Sharing is not just about giving—it’s about passing along hope and kindness.
                    </div>
                    <div className="font-nunito mt-5 flex items-center  font-thin text-lg tracking-widest ">
                        <span>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt voluptatem molestiae debitis corrupti sint, aut alias.
                            Fugiat voluptas nisi, natus cumque id inventore, eligendi necessitatibus odio ut maxime veniam ea!
                            <br />
                            <br />
                            Login to connect.<br /> Share with purpose.<br /> Pass along what matters.
                        </span>
                    </div>
                    <div className="font-thin flex  ">
                        <div className="cursor-pointer relative hover:border-inactive border-2 flex sm:p-1 px-2 sm:px-3 group pr-10 sm:pr-3 sm:hover:pr-10 transition-all duration-500 h-10 sm:h-14 items-center">
                            <span className="">
                                Click & PASS IT ALONG
                            </span>
                            <span className="transition-all overflow-hidden absolute duration-500 rotate-45
                                            group-hover:opacity-100 right-2.5 sm:opacity-0">
                                <Box className="size-6" />

                            </span>
                        </div>
                    </div>
                </div>


            </div>
            <div className="mt-6 grid grid-rows-[100px_auto]  sm:grid-rows-[60px_auto] ">
                <div className=" flex items-center justify-center border-y border-inactive/50">
                    <h1 className="font-bold font-oswald text-2xl">
                        Thought Section
                    </h1>
                </div>
                <HydrationBoundary state={dehydrate(queryClient)}>
                    <ThoughtSection />
                </HydrationBoundary>

            </div>
        </div >

    );
}