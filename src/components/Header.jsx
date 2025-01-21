import Link from 'next/link';
import DarkModeSwitch from './DarkModeSwitch';

export default function Header() {
  return (
    <div className='flex justify-between items-center p-3 max-w-6xlmx-auto'>
        <ul className='flex gap-4'>
            <li>
                <Link href="/sing-in">Sing in</Link>
            </li>
            <li className='hidden sm:block'>
                <Link href="/sing-in">Home</Link>
            </li>
            <li className='hidden sm:block'>
                <Link href="/sing-in">About</Link>
            </li>
        </ul>
        <div className='flex items-center gap-4'>
<DarkModeSwitch />
        
        <Link href="/" className='flex gap-1 items-center'>
        <span className='text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg'>
            IMDb
        </span>
        <span className='text-xl hidden sm:inline'>Clone</span>
        </Link>
        </div>
    </div>
  );
}