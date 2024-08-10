import dynamic from 'next/dynamic'
import React from 'react'
const Navbar = dynamic(() => import("@/components/Navbar"), {
    ssr:false,
});

const page = () => {
  return (
    <div>
      <Navbar/>
      <h1>explore</h1>
    </div>
  )
}

export default page
