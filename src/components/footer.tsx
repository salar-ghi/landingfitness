const Footer: React.FC = () => {
    return (
      <footer className="bg-primary text-white p-4 mt-8">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Fitness AI App. All rights reserved.</p>
          <div className="mt-4">
            <a href="#" className="mx-2 hover:text-secondary">
              Privacy Policy
            </a>
            <a href="#" className="mx-2 hover:text-secondary">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;