import { useBoardStore } from "../../store/boardStore"

export const Canvas = () => {
  const shapes = useBoardStore((s) => s.shapes)

  return (
    <div className="min-h-0 overflow-auto">
      <svg className="bg-slate-800 w-full h-full">
        {shapes.map((shape) => {
          if (shape.type === "rectangle") {
            return (
              <rect
                key={shape.id}
                x={shape.x}
                y={shape.y}
                width={shape.width}
                height={shape.height}
                fill="white"
                stroke="black"
              />
            )
          }

          if (shape.type === "circle") {
            return (
              <circle
                key={shape.id}
                cx={shape.x}
                cy={shape.y}
                r={shape.radius}
                fill="white"
                stroke="black"
              />
            )
          }

          return null
        })}
      </svg>
    </div>
  )
}