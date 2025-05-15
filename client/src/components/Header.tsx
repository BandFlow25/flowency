import { Link } from "wouter";

export default function Header() {
  return (
    <header className="bg-primary text-primary-foreground p-4 md:p-6">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/">
              <div className="flex items-center">
                <div className="bg-accent text-white p-1 rounded mr-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 4L4 12L9 20H15V12H9V4Z" fill="currentColor" />
                  </svg>
                </div>
                <span className="text-2xl md:text-3xl font-bold">Flowency</span>
              </div>
            </Link>
            <span className="ml-2 md:ml-4 text-sm md:text-base font-medium bg-electric text-electric-foreground px-2 py-1 rounded">
              IntentOps
            </span>
          </div>
          <nav>
            <ul className="flex space-x-4 md:space-x-6">
              <li>
                <Link href="/">
                  <span className="hover:text-electric transition-colors cursor-pointer">Home</span>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <span className="hover:text-electric transition-colors cursor-pointer">Services</span>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <span className="hover:text-electric transition-colors cursor-pointer">About</span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="hover:text-electric transition-colors cursor-pointer">Contact</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
