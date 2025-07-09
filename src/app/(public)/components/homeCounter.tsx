"use client";
import CountUp from "react-countup";
import { ChartRadialText } from "@/components/radialChart";
import { useEffect, useRef, useState } from "react";

const CounterComponent = () => {
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
		<div ref={ref} className=" xl:border-l gap-2 font-oswald tracking-tight sm:tracking-normal grid-flow-col grid grid-cols-3 xl:grid-cols-1 xl:grid-rows-3">
			{visible && (
				<>
					<div className="box-container flex flex-col justify-center items-center">
						<span className="font-bold text-2xl" >

							<CountUp
								start={29000}
								end={30000}
								duration={3}
								separator=","
								suffix="+"
							/>
						</span>
						<span className="text-foreground/70 text-nowrap">
							Passers Worldwide
						</span>
					</div>
					<div className="box-container flex flex-col justify-center items-center max-xl:border-x p-4">
						<span className="fill-foreground font-bold text-2xl">
							<CountUp
								start={290000}
								end={300000}
								duration={3}
								separator=","
								suffix="+"
								useIndianSeparators
							/>
						</span>
						<span className="text-foreground/70 text-nowrap">Items passed</span>
					</div>
					<div className="box-container">
						<ChartRadialText />
					</div>
				</>
			)}

		</div>
	);
};
export default CounterComponent;
