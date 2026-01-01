import React from "react";

type FooterLink = {
  label: string;
  href: string;
};

const footerSections: Record<string, FooterLink[]> = {
  Products: [
    { label: "All Products", href: "#" },
    { label: "New Arrivals", href: "#" },
    { label: "Best Sellers", href: "#" },
    { label: "Categories", href: "#" },
  ],
  Company: [
    { label: "About Us", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Press", href: "#" },
    { label: "Affiliates", href: "#" },
  ],
  Resources: [
    { label: "Blog", href: "#" },
    { label: "Help Center", href: "#" },
    { label: "Shipping Info", href: "#" },
    { label: "Returns", href: "#" },
  ],
  Contact: [
    { label: "Email Support", href: "#" },
    { label: "Live Chat", href: "#" },
    { label: "Phone: +1 (800) 000-0000", href: "#" },
    { label: "Locations", href: "#" },
  ],
};

const socialLinks: FooterLink[] = [
  { label: "Facebook", href: "#" },
  { label: "Twitter", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "YouTube", href: "#" },
];

const Footer: React.FC = () => {
  return (
    <>
      {/* Optional top CTA bar */}
      <div className="footer-cta">
        <span>Looking for custom products?</span>
        <button>Get a Quote</button>
      </div>

      <footer className="footer">
        <div className="footer-container">
          {Object.entries(footerSections).map(([title, links]) => (
            <div key={title} className="footer-column">
              <h3>{title}</h3>
              <ul>
                {links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social column */}
          <div className="footer-column">
            <h3>Follow Us</h3>
            <ul>
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>

            <div className="social-icons">
              {socialLinks.map((link) => (
                <a key={link.label} href={link.href} aria-label={link.label}>
                  {link.label[0]}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          © {new Date().getFullYear()} HydroSeal All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
