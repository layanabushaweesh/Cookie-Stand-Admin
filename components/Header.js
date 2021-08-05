import Link from 'next/link'
export default function Header(props){
    return(
        <header className="bg-green-50">
        <h1 className='text-3xl'>
          Cookie Stand Admin
        </h1>
        <Link href="/overview">
             <a className='m-5 bg-green '>Overview</a>
        </Link>
        
      </header>
    )

  }