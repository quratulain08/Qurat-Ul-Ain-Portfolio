"use client"

import { PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer, Tooltip } from "recharts"

export type RadarDatum = {
  topic: string
  score: number
  fullMark: number
}

export function SkillsRadar({
  data,
  className,
}: {
  data: RadarDatum[]
  className?: string
}) {
  return (
    <div className={className}>
      <ResponsiveContainer width="100%" height={280}>
        <RadarChart data={data} outerRadius="80%">
          <PolarGrid stroke="hsl(var(--border))" />
          <PolarAngleAxis dataKey="topic" stroke="hsl(var(--muted-foreground))" />
          <Tooltip
            wrapperStyle={{
              borderRadius: 8,
              border: "1px solid hsl(var(--border))",
              background: "hsl(var(--popover))",
              color: "hsl(var(--popover-foreground))",
              boxShadow: "0 4px 16px hsl(var(--border))",
            }}
            contentStyle={{ background: "transparent", border: "none" }}
            labelStyle={{ color: "hsl(var(--muted-foreground))" }}
            itemStyle={{ color: "hsl(var(--popover-foreground))" }}
          />
          <Radar
            name="Proficiency"
            dataKey="score"
            stroke="hsl(var(--primary))"
            fill="hsl(var(--primary))"
            fillOpacity={0.25}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}
