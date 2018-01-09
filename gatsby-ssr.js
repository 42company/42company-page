import React from 'react'
import { TypographyStyle, GoogleFont } from 'react-typography'
import typography from './src/utils/typography'

exports.onRenderBody = ({ setHeadComponents }, pluginOptions) => {
  setHeadComponents([
    <TypographyStyle key={`TypographyStyle`} typography={typography} />,
    <GoogleFont key={`GoogleFont`} typography={typography} />,
  ])
}
