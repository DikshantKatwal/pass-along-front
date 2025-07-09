"use client"

import { TrendingUp } from "lucide-react"
import { useState, useEffect } from "react"
import {
    Label,
    PolarGrid,
    PolarRadiusAxis,
    RadialBar,
    RadialBarChart,
} from "recharts"

import { ChartConfig, ChartContainer } from "@/components/ui/chart"

export const description = "A radial chart with text"

const chartData = [
    { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
]

const chartConfig = {
    visitors: {
        label: "Visitors",
    },
    safari: {
        label: "Safari",
        color: "var(--chart-2)",
    },
} satisfies ChartConfig

export function ChartRadialText() {
    const [dimensions, setDimensions] = useState({
        innerRadius: 25,
        outerRadius: 45,
        maxHeight: 200,
        textSize: 12,
        polarRadius: [22, 18]
    })
    useEffect(() => {
        const updateDimensions = () => {
            const width = window.innerWidth
            if (width >= 1280) { // xl
                setDimensions({
                    innerRadius: 50,
                    outerRadius: 80,
                    maxHeight: 150,
                    textSize: 18,
                    polarRadius: [55, 45]
                })
            } else if (width >= 1024) { // lg
                setDimensions({
                    innerRadius: 45,
                    outerRadius: 70,
                    maxHeight: 150,
                    textSize: 16,
                    polarRadius: [50, 40]
                })
            } else if (width >= 768) { // md
                setDimensions({
                    innerRadius: 40,
                    outerRadius: 60,
                    maxHeight: 150,
                    textSize: 14,
                    polarRadius: [45, 35]
                })
            } else if (width >= 640) { // sm
                setDimensions({
                    innerRadius: 35,
                    outerRadius: 55,
                    maxHeight: 250,
                    textSize: 13,
                    polarRadius: [40, 30]
                })
            } else { // default (xs)
                setDimensions({
                    innerRadius: 35,
                    outerRadius: 54,
                    maxHeight: 197,
                    textSize: 16,
                    polarRadius: [37, 32]
                })
            }
        }

        updateDimensions()
        window.addEventListener('resize', updateDimensions)
        return () => window.removeEventListener('resize', updateDimensions)
    }, [])

    return (
        <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square"
            style={{ maxHeight: `${dimensions.maxHeight}px` }}
        >

            <RadialBarChart
                data={chartData}
                startAngle={0}
                endAngle={310}
                innerRadius={dimensions.innerRadius}
                outerRadius={dimensions.outerRadius}
            >
                <PolarGrid
                    gridType="circle"
                    radialLines={false}
                    stroke="none"
                    className="first:fill-muted last:fill-background"
                    polarRadius={dimensions.polarRadius}
                />
                <RadialBar dataKey="visitors" background cornerRadius={10} />
                <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                    <Label
                        content={({ viewBox }) => {
                            if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                return (
                                    <text
                                        x={viewBox.cx}
                                        y={viewBox.cy}
                                        textAnchor="middle"
                                        dominantBaseline="middle"
                                    >
                                        <tspan
                                            x={viewBox.cx}
                                            y={viewBox.cy}
                                            className="fill-foreground font-bold"
                                            fontSize={dimensions.textSize}
                                        >
                                            {chartData[0].visitors.toLocaleString()}
                                        </tspan>
                                        <tspan
                                            x={viewBox.cx}
                                            y={(viewBox.cy || 0) + dimensions.textSize}
                                            className="fill-foreground/70"
                                            fontSize={dimensions.textSize - 5}
                                        >
                                            Monthly Goals
                                        </tspan>
                                    </text>
                                )
                            }
                        }}
                    />
                </PolarRadiusAxis>
            </RadialBarChart>
        </ChartContainer>
    )
}