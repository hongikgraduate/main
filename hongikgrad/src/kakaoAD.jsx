import { useEffect } from "react"

export default function KakaoAd({ unit, width, height }) {
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "//t1.daumcdn.net/kas/static/ba.min.js"
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <ins
      className="kakao_ad_area"
      style={{ display: "block" }}
      data-ad-unit={unit}
      data-ad-width={width}
      data-ad-height={height}
    />
  )
}