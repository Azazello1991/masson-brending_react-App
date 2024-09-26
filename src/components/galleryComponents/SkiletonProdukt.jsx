import React from "react"
import ContentLoader from "react-content-loader"

const SkiletonProdukt = (props) => (
  <ContentLoader 
    speed={2}
    width={260}
    height={400}
    viewBox="0 0 260 400"
    backgroundColor="#ebe6c6"
    foregroundColor="#f8f7f7"
    {...props}
  >
    <rect x="6" y="400" rx="9" ry="9" width="90" height="30" /> 
    <rect x="20" y="252" rx="9" ry="9" width="210" height="40" /> 
    <rect x="106" y="229" rx="9" ry="9" width="1" height="0" /> 
    <rect x="148" y="333" rx="9" ry="9" width="0" height="1" /> 
    <rect x="20" y="19" rx="9" ry="9" width="210" height="220" /> 
    <rect x="21" y="303" rx="9" ry="9" width="210" height="40" /> 
    <rect x="74" y="352" rx="9" ry="9" width="103" height="33" />
  </ContentLoader>
)

export default SkiletonProdukt

