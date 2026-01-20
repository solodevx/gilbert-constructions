import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
const Logo = () => {
  return (
    <Link href="">
        {/* Solve logo visibility later */}
        <Image src="assets/logo.svg" width={100} height={100} alt=""/>
    </Link>
  )
}

export default Logo 