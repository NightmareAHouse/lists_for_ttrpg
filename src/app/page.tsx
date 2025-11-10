import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <div className='flex min-h-screen justify-center flex-col text-center font-sans '>
            <div>This Page is not full ready.</div>

            <div>You can see a progress on another page section</div>

            <div className='w-full flex justify-center'>
                <div className='flex justify-center items-center bg-blue-600 rounded-3xl w-[160px] h-10'>
                    <Link href={'/campaign'}>Campaign page link</Link>
                </div>
            </div>
        </div>
    );
}
