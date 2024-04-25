import * as React from "react"

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/inter/Inter-Bold.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="interFontBold"
    />,
    <link
      rel="preload"
      href="/fonts/inter/Inter-Light.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="interFontLight"
    />,
    <link
      rel="preload"
      href="/fonts/jetbrains-mono/JetbrainsMono-Regular.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="monoRegular"
    />,
  ])
}