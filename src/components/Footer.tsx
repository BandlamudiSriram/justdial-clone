import React from "react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted py-10">
      <div className="jd-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Popular Services</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm hover:text-primary transition-colors">Restaurants</Link></li>
              <li><Link href="/" className="text-sm hover:text-primary transition-colors">Hotels</Link></li>
              <li><Link href="/" className="text-sm hover:text-primary transition-colors">Wedding Planning</Link></li>
              <li><Link href="/" className="text-sm hover:text-primary transition-colors">Home Services</Link></li>
              <li><Link href="/" className="text-sm hover:text-primary transition-colors">Real Estate</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Popular Cities</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm hover:text-primary transition-colors">Mumbai</Link></li>
              <li><Link href="/" className="text-sm hover:text-primary transition-colors">Delhi</Link></li>
              <li><Link href="/" className="text-sm hover:text-primary transition-colors">Bangalore</Link></li>
              <li><Link href="/" className="text-sm hover:text-primary transition-colors">Hyderabad</Link></li>
              <li><Link href="/" className="text-sm hover:text-primary transition-colors">Chennai</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/" className="text-sm hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link href="/" className="text-sm hover:text-primary transition-colors">Careers</Link></li>
              <li><Link href="/" className="text-sm hover:text-primary transition-colors">Advertise</Link></li>
              <li><Link href="/" className="text-sm hover:text-primary transition-colors">Free Listing</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4 mb-4">
              <Link href="/" className="hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="/" className="hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="/" className="hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="/" className="hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="/" className="hover:text-primary transition-colors" aria-label="YouTube">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>

            <h3 className="text-lg font-semibold mb-4 mt-6">Download App</h3>
            <div className="flex flex-col sm:flex-row gap-2">
              <Link href="/" className="bg-black text-white rounded-md py-2 px-3 text-xs flex items-center justify-center sm:justify-start hover:bg-black/80 transition-colors" aria-label="Download from Google Play">
                <div className="mr-2">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                    <path fill="currentColor" d="M17.05,13.51l-.9-1.56,1.75-3.03a.59.59,0,0,0-.22-.81l-.11-.06L3.52,1.77a.55.55,0,0,0-.55,0A.59.59,0,0,0,2.69,2H2.69l2.5,4.35a.59.59,0,0,0,.8.22l.12-.07,7.67-4.45L9,10.34l4.8,8.34.09,0a.5.5,0,0,0,.21,0,.81.81,0,0,0,.31-.22h0l2.63-4.56a.59.59,0,0,0-.22-.81h0Z"></path>
                    <path fill="currentColor" d="M5,17.72l0,.06a.55.55,0,0,0,.56.25.58.58,0,0,0,.47-.37h0L9,10.34,5.19,3.66a.59.59,0,0,0-.8-.22l-.12.07L1.77,7.94a.55.55,0,0,0,0,.55A.59.59,0,0,0,2,8.77H2Z"></path>
                    <path fill="currentColor" d="M21.76,9a.45.45,0,0,0-.19-.47h0l-.14-.08L19,7.25a.59.59,0,0,0-.8.22l-.08.13-1.75,3.03a.26.26,0,0,0,.05.33h0l.1.09h0L19,14.15h0a.59.59,0,0,0,.81-.22l0,0,1.91-4.31A.62.62,0,0,0,21.76,9Z"></path>
                    <path fill="currentColor" d="M14.41,20h0L9,10.34,13.78,2A.59.59,0,0,0,13.56,1.2h0l-.1,0a.59.59,0,0,0-.65.12h0L3.52,1.77a.59.59,0,0,0-.83.21h0L9,10.34,13.79,19a.59.59,0,0,0,.52.33h.1Z"></path>
                  </svg>
                </div>
                <div>
                  <div className="text-[0.5rem] text-left">GET IT ON</div>
                  <div className="text-sm font-semibold leading-tight">Google Play</div>
                </div>
              </Link>
              <Link href="/" className="bg-black text-white rounded-md py-2 px-3 text-xs flex items-center justify-center sm:justify-start hover:bg-black/80 transition-colors" aria-label="Download from App Store">
                <div className="mr-2">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                    <path fill="currentColor" d="M19.03,8.46c-.11.08-1.92,1.1-1.94,3.27,0,2.55,2.28,3.45,2.31,3.45a9.62,9.62,0,0,1-2.36,4.71.81.81,0,0,1-.62.29c-.39,0-.77-.25-1.49-.25-.74,0-1.43.25-1.51.25a.8.8,0,0,1-.62-.27A10.2,10.2,0,0,1,9.69,15.6c0-3.21,2.76-4.91,2.76-4.91A3.63,3.63,0,0,1,10.98,7.4a3.16,3.16,0,0,1,0-.45,3.72,3.72,0,0,1,1.95-3.13c-.08,0,.05,0,.2,0a4.16,4.16,0,0,1,3.48,1.78A3.69,3.69,0,0,0,19.03,8.46Z"></path>
                    <path fill="currentColor" d="M16.4,3.43c-1.11.06-2.46.74-3.26,1.67-.71.83-1.32,2.07-1.15,3.24a3.15,3.15,0,0,0,.55.06A3.42,3.42,0,0,0,15.14,7.05a3.5,3.5,0,0,0,1.26-2.63,1.36,1.36,0,0,0,0-.15A1.22,1.22,0,0,0,16.4,3.43Z"></path>
                  </svg>
                </div>
                <div>
                  <div className="text-[0.5rem] text-left">Download on the</div>
                  <div className="text-sm font-semibold leading-tight">App Store</div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-xs text-muted-foreground mb-4 md:mb-0">
            © 2025 JustDial Clone. All Rights Reserved.
          </div>
          <div className="flex space-x-6">
            <Link href="/" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link href="/" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
