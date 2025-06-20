import Link from 'next/link'

export default function Header() {
  return (
    <header className='flex justify-between items-center p-4 text-center border-b border-zinc-200'>
      <Link href={"/"}>Todo App</Link>
      <div>
        <Link href={"/new"}>Új</Link>
      </div>
    </header>
  )
}
