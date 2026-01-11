import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
const Logo = () => {
  return (
    <Link href="">
        {/* Solve logo visibility later */}
        <Image src="assets/logo.svg" width={50} height={50} alt=""/>
    </Link>
  )
}

export default Logo 