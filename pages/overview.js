import Link from 'next/link'
import React from 'react'




export default function overview() {
    return (
        


        <header className="flex justify-between p-4 bg-green">
        <h2>
          cookie stand admin
        </h2>
        <Link href="/"><a className=' bg-green rounded-md'>return to home page</a></Link>
        
      </header>

        
    )
}