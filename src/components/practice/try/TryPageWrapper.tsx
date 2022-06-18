/* eslint-disable import/extensions */
import { OnlyChildrenProps } from "interface/general"
import React from "react"
import PracticeSubTitle from "../common/PracticeSubTitle"

const TryPageWrapper: React.FC<OnlyChildrenProps> = ({ children }) => {
  return (
    <div className="text-center">
      <PracticeSubTitle>React.Children.map()の練習</PracticeSubTitle>
      <div className=" mb-5 text-lg text-left">
        親CompのOrderedListの中でReact.Children.map(ReactNode型,JSX.Element型)メソッドを使って、子要素をそれぞれListItemでラップしてmapで回す
      </div>
      {children}
    </div>
  )
}

export default TryPageWrapper
