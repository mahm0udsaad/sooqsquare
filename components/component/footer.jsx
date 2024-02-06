"use client"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Image from "next/image";

export default function Footer() {
  return (
    (<footer className="w-full border-t-[1px] bg-gray-950 dark:bg-zinc-950 mt-4 text-white py-12">
      <div
        className="container mx-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-8 px-4">
        <div>
          <h3 className="font-bold text-lg mb-3">About Us</h3>
          <p className="text-sm">
            We are a leading car marketplace committed to connecting car buyers with trusted sellers. Our mission is to
            make car buying and selling a hassle-free experience.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-3">Explore</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <Link className="hover:underline" href="#">
                Sedans
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="#">
                SUVs
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="#">
                Trucks
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="#">
                Vans
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-3">Follow Us</h3>
          <div className="flex space-x-3">
            <Link href="#">
              <FacebookIcon className="h-6 w-6" />
            </Link>
            <Link href="#">
              <TwitterIcon className="h-6 w-6" />
            </Link>
            <Link href="#">
              <InstagramIcon className="h-6 w-6" />
            </Link>
          </div>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-3">Legal</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <Link className="hover:underline" href="#">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="#">
                Terms of Use
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="#">
                Disclaimer
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-3">Subscribe</h3>
          <form className="flex space-x-2">
            <Input name="email" id="email" className="flex-1" placeholder="Enter your email" type="email" />
            <Button type="submit" className="main-bg">Subscribe</Button>
          </form>
        </div>
      </div>
      <div className="mt-12 border-t border-gray-700 pt-8 flex justify-end px-4">
        <Link className="flex items-center" href="#">
          <Image alt="Logo" width={200} height={200} src="/icons/dr-en-logo.svg" />
        </Link>
      </div>
    </footer>)
  );
}
function FacebookIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>)
  );
}
function TwitterIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>)
  );
}
function InstagramIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>)
  );
}

