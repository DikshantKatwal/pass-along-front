"use client"
import { formatDate } from "@/lib/utils";
import { memo } from "react"
import { mockItems } from "../../components/staticData";


const ExploreCard = () => {
    if (!mockItems || mockItems.length === 0) return null;
    return (
        <div className="relative overflow-hidden grid grid-cols-[repeat(auto-fit,minmax(20rem,1fr))]  sm:grid-cols-[repeat(auto-fit,minmax(30rem,1fr))] gap-5">
            {[...mockItems].map((item: TItem, index: number) => (
                <CardComponent key={index} item={item} />
            ))}

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
        <div className="flex bg-card sm:mx-4 gap-2 hover:bg-blue-400/20 border border-inactive  p-2 overflow-hidden box-content  h-[9rem] sm:h-[11rem] justify-start items-start  card group   transition-all duration-200">
            <div className="w-[7rem] sm:w-[9rem] flex-shrink-0">
                <div className="aspect-[4/3] w-[7rem] sm:w-[9rem] overflow-hidden rounded-2xl  flex items-center justify-center">
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
            <div className="h-[9rem] sm:h-[11rem]  max-sm:text-sm  sm:p-2 max-sm:pl-1 flex-1 min-w-0">
                <div className="">
                    <span className="font-normalfont-oswald underline-offset-2 underline">

                        {item.name}
                    </span>
                </div>
                <div className="font-nunito pt-[4px] sm:pt-[0.5rem]">
                    <div className="flex justify-between flex-col border-b border-inactive-foreground/50 h-[6.5rem]">

                        <div className="h-full">{item.description}</div>

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
export default ExploreCard