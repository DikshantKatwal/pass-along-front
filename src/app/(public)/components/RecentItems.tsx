"use client"
import apiService from "@/lib/api";
import { formatDate } from "@/lib/utils";
import { ArrowLongUpIcon, ArrowTurnRightUpIcon, ShareIcon } from "@heroicons/react/24/solid";
import { useQuery } from "@tanstack/react-query";
import { CornerRightUp, Forward, Share, View } from "lucide-react";
import { Fragment, memo, useEffect, useRef, useState } from "react"
import { mockItems } from "./staticData";


const RecentItems = () => {
    const { data: recentItems, isFetching } = useQuery({
        queryKey: ['items'],
        queryFn: () => apiService.get('/api/items'),
    });
    if (!mockItems || mockItems.length === 0) return null;
    const mid = Math.ceil(mockItems.length / 2);
    const topItems = mockItems.slice(0, mid);
    const bottomItems = mockItems.slice(mid);

    const ref = useRef<HTMLDivElement | null>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.3 }
        );

        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    }, []);



    return (
        <div ref={ref} className="relative overflow-hidden pt-10">
            {visible && (
                <div className="bg-background mask-gradient">
                    <div className="card-scroll-container">
                        <div className="card-scroll-content h-full p-2  animate-slide-rtl">
                            {[...topItems, ...topItems].map((item: TItem, index: number) => (
                                <CardComponent key={index} item={item} />
                            ))}
                        </div>
                    </div>
                    <div className="card-scroll-container">
                        <div className="card-scroll-content h-full p-2  animate-slide-ltr">
                            {[...bottomItems, ...bottomItems].map((item: TItem, index: number) => (
                                <CardComponent key={index} item={item} />
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
export type TItem = {
    id: string
    name: string
    description: string;
    user: {
        email: string
        id: string
        username: string
        first_name: string
        last_name: string
    },
    created_at: Date;
    images: Array<any>
}

const CardComponent = memo(({ item }: { item: TItem }) => {
    return (
        <div className="flex bg-card w-full sm:mx-4 gap-2 hover:bg-blue-400/20 border border-inactive  p-2 overflow-hidden box-content  h-[11rem] justify-start items-start  card group   transition-all duration-200">
            <div className="w-[9rem] ">
                <div className="aspect-[4/3] w-[9rem] overflow-hidden rounded-2xl  flex items-center justify-center">
                    <img
                        className="h-full w-full object-cover"
                        alt="image"
                        src={`${item.images[0]?.image}`}
                    />
                </div>
                <div className="flex gap-2 items-center justify-center mt-[0.7rem] h-[2.5rem]">
                    {item.images.slice(1, 4).map((img, index) => (
                        <img
                            loading="lazy"
                            key={index}
                            className="h-[1.6rem] w-[1.6rem] max-w-full object-contain"
                            alt="image"
                            src={img.image}
                        />
                    ))}
                </div>
            </div>
            <div className="h-[11rem] p-2 w-[20rem] grow-2">
                <div className="">
                    <span className="font-normal font-oswald underline-offset-2 underline">

                        {item.name}
                    </span>
                </div>
                <div className="font-nunito pt-[0.5rem]">
                    <div className="flex justify-between flex-col border-b border-inactive-foreground/50 h-[6.5rem]">

                        <div className="  h-full">{item.description}</div>

                        <div className=" h-[2rem] flex justify-between  items-center text-xs">
                            <div className="">Kalanki, Kathmandu</div>
                            <div className=""> {formatDate(item.created_at)}</div>
                        </div>
                    </div>
                    <div className="text-xs pt-1 h-[2rem]">
                        {item.user.first_name} {item.user.last_name}
                    </div>
                </div>


            </div>
        </div>
    );
})
export default RecentItems
