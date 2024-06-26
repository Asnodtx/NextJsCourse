import Link from 'next/link'
import React from 'react'

function Logo(){
  return (
  <Link href={"/"} 
    className="font-bold text-3xl bg-gradient-to-r from-yellow-300 to-orange-700 text-transparent 
      bg-clip-text hover:cursor-pointer"
        >PageForm
  </Link>
  );
}

export default Logo

