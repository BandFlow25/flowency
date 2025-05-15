import { Link } from "wouter";

export default function Header() {
  return (
    <header className="bg-primary text-primary-foreground p-4 md:p-6">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/">
              <a className="text-2xl md:text-3xl font-bold">bndy</a>
            </Link>
            <span className="ml-2 md:ml-4 text-sm md:text-base font-medium bg-electric text-electric-foreground px-2 py-1 rounded">
              IntentOps
            </span>
          </div>
          <nav>
            <ul className="flex space-x-4 md:space-x-6">
              <li>
                <Link href="/">
                  <a className="hover:text-electric transition-colors">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <a className="hover:text-electric transition-colors">Services</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="hover:text-electric transition-colors">About</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="hover:text-electric transition-colors">Contact</a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
