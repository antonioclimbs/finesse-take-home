import React from "react";
import Navbar from '@components/common/Navbar'

export const MainContainer: React.FC<{ pageProps: any; children: any }> = ({
  children,
  pageProps,
}) => {
  return (
    <div>
      <Navbar />
      Page
    </div>
  )
}