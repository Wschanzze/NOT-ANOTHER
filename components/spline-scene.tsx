"use client"

import Spline from "@splinetool/react-spline"
import { useEffect } from "react"

interface SplineSceneProps {
  scene: string
  className?: string
  style?: React.CSSProperties
}

export function SplineScene({ scene, className, style }: SplineSceneProps) {
  useEffect(() => {
    // Suppress internal Spline runtime version update logs
    const originalLog = console.log
    console.log = (...args: unknown[]) => {
      if (
        args.length >= 3 &&
        typeof args[0] === "string" &&
        args[0].includes("updating from")
      ) {
        return
      }
      originalLog(...args)
    }
    return () => {
      console.log = originalLog
    }
  }, [])

  return <Spline scene={scene} className={className} style={style} />
}
