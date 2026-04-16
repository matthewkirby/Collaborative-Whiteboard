import { Canvas } from "../components/Canvas/Canvas"
import { Footer } from "../components/Footer/Footer"
import { Toolbar } from "../components/Toolbar/Toolbar"

export const Board = () => {
  return (
    <div className="grid h-screen overflow-hidden grid-rows-[auto_minmax(0,1fr)_auto]">
      <Toolbar />
      <Canvas />
      <Footer />
    </div>
  )
}