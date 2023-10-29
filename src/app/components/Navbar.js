"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathName = usePathname();
  return (
    <>
      <div className="flex gap-x-7 gap-y-5 flex-wrap font-bold">
        <Link
          href="/skills"
          className={`underline-offset-4 ${
            pathName === "/skills" ? "underline" : null
          }`}
        >
          skills
        </Link>
        <Link
          href="/projects"
          className={`underline-offset-4 ${
            pathName === "/projects" ? "underline" : null
          }`}
        >
          projects
        </Link>
        <Link
          href="/education"
          className={`underline-offset-4 ${
            pathName === "/education" ? "underline" : null
          }`}
        >
          education
        </Link>
        <Link
          href="/certifications"
          className={`underline-offset-4 ${
            pathName === "/certifications" ? "underline" : null
          }`}
        >
          certifications
        </Link>
      </div>
    </>
  );
}
