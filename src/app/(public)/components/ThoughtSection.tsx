"use client"
import apiService from "@/lib/api";
import { formatDate } from "@/lib/utils";
import { ArrowLongUpIcon, ArrowTurnRightUpIcon, ShareIcon } from "@heroicons/react/24/solid";
import { useQuery } from "@tanstack/react-query";
import { CornerRightUp, Forward, Share, View } from "lucide-react";
import { Fragment, memo, useEffect, useRef, useState } from "react"
import { mockItems, mockReview } from "./staticData";


const ThoughtSection = () => {
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
        <div ref={ref} className="relative overflow-hidden py-5">
            {visible && (
                <div className="bg-background mask-gradient ">
                    <div className="card-scroll-container">
                        <div className="card-scroll-content h-full p-2  animate-slide-rtl">
                            {[...mockReview, ...mockReview].map((item: TReview, index: number) => (
                                <CardComponent key={index} item={item} />
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
export type TReview = {
    id: string
    title: string
    description: string;
    user: {
        email: string
        id: string
        username: string
        first_name: string
        last_name: string
    },
}

const CardComponent = memo(({ item }: { item: TReview }) => {
    return (
        <div className="tracking-wider flex bg-card card w-[25rem] sm:mx-4 gap-2 hover:bg-blue-400/20 border border-inactive  p-2 overflow-hidden box-content  h-[11rem] justify-start items-start group transition-all duration-200">

            <div className="h-[11rem] p-2 w-[20rem] grow-2">
                <div className="">
                    <span className="font-normal text-success font-oswald">
                        {item.title}
                    </span>
                </div>
                <div className="font-nunito pt-[0.5rem]">
                    <div className="flex justify-between flex-col border-b border-inactive-foreground/50 h-[6.5rem]">
                        <div className="  h-full">{item.description}</div>
                    </div>
                    <div className="text-xs pt-1 h-[2rem]">
                        {item.user.first_name} {item.user.last_name}

                    </div>
                </div>


            </div>
        </div>
    );
})
export default ThoughtSection
