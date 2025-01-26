import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-primary text-white p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Fitness AI App</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="hover:text-secondary">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-secondary">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/subscription" className="hover:text-secondary">
                Subscription
              </Link>
            </li>
            <li>
              <Link href="/generate-plan" className="bg-secondary px-4 py-2 rounded-full hover:bg-accent">
                Generate Plan
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;