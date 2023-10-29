import Link from "next/link";

export default function Home() {
  return (
    <div className="h-[80vh] flex flex-col justify-center gap-10 m-10">
      <div className="text-5xl sm:text-7xl font-bold space-y-2">
        <p>Hi!</p>
        <p>I am Krishnakanta Naik</p>
        <p>a web developer</p>
      </div>
      <div className="flex gap-x-7 gap-y-5 flex-wrap font-bold">
        <Link href="/skills" className="underline underline-offset-4">
          skills
        </Link>
        <Link href="/projects" className="underline underline-offset-4">
          projects
        </Link>
        <Link href="/education" className="underline underline-offset-4">
          education
        </Link>
        <Link href="/certifications" className="underline underline-offset-4">
          certifications
        </Link>
      </div>
    </div>
  );
}
