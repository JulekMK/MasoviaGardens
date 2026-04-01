const Footer = () => {
  return (
    <footer className="bg-foreground py-10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-display text-lg font-bold text-background">
            Masovia Gardens
          </div>
          <div className="text-background/50 text-sm text-center">
            © {new Date().getFullYear()} Masovia Gardens. Wszystkie prawa zastrzeżone.
          </div>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/masviagardens"
              target="_blank"
              rel="noopener noreferrer"
              className="text-background/50 hover:text-background text-sm transition-colors"
            >
              Facebook
            </a>
            <a
              href="tel:504957783"
              className="text-background/50 hover:text-background text-sm transition-colors"
            >
              Telefon
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
