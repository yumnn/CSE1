import Link from 'next/link';

export default function FirstPost() {
    return (
        <>
            <h1>I love CSE! ...maybe</h1>
            <h2>
                <Link href="/">Back to home</Link>
            </h2>
        </>
    );
}