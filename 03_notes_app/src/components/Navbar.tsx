import Link from 'next/link'
import ThemeSwitch from './ThemeSwitch'
import { IoIosAdd } from 'react-icons/io'
import { Button } from './ui/button'

export function Navbar () {
  return (
    <nav className='container mx-auto flex justify-between items-center p-4'>
      <h1>NavBar</h1>

      <ul className='flex gap-4 items-center'>
        <li>
          <Button className='invert font-light' asChild>
            <Link
              className='flex items-center rounded-lg p-2'
              href='/new-note'
            >
              <IoIosAdd className='inline-block' />
              New Note
            </Link>
          </Button>
        </li>
        <li>
          <ThemeSwitch />
        </li>
      </ul>
    </nav>
  )
}
