//import { FaGithub, FaLinkedin, FaRegEnvelope } from 'react-icons/fa';
import Image from 'next/image';
import { VT323 } from "next/font/google";
import Link from 'next/link';
const vt = VT323({weight: '400', subsets: ['latin']});

export default function Header(){
    return(
        <header className="w-full py-5 px-6">
            <div className="flex justify-between items-center max-w-5xl mx-auto animate-fade">
                <Link href="/">
                    <Image 
                        className="mt-3"
                        src="/new_logo.png"
                        alt="logo"
                        width={150}
                        height={150}
                    />
                </Link>
                <Link href="/about">
                    <p className={`${vt.className} text-linkgreen font-bold text-2xl tracking-wider`}>About</p>
                </Link>
            </div>
        </header>
    )
}