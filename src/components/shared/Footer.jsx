import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-[#0a0f0d] border-t border-[#1c2f26] text-[#9ca3af]">

            <div className=" mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

                {/* Brand */}
                <div>
                    <h2 className="text-xl font-bold text-[#10b981]">
                        Book Hive
                    </h2>
                    <p className="mt-3 text-sm">
                        A modern digital library platform where you can explore, borrow,
                        and manage your favorite books seamlessly.
                    </p>
                </div>

                {/* Links */}
                <div>
                    <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <Link href={'/'}>
                            <li className="hover:text-[#10b981] cursor-pointer">Home</li>
                        </Link>
                        <Link href={'/all-books'}>
                            <li className="hover:text-[#10b981] cursor-pointer">All Books</li></Link>
                        <Link href={'/my-profile'}>
                            <li className="hover:text-[#10b981] cursor-pointer">My Profile</li>
                        </Link>
                    </ul>
                </div>

                {/* Social */}
                <div>
                    <h3 className="text-white font-semibold mb-4">Follow Us</h3>

                    <div className="flex gap-4">

                        {/* Facebook */}
                        <a href="https://www.facebook.com/hasan.shardar.1" className="p-2 rounded-full bg-[#15221c] hover:bg-[#10b981] hover:text-black transition">
                            <FaFacebookF size={18} />
                        </a>

                        {/* Twitter */}
                        <a href="#" className="p-2 rounded-full bg-[#15221c] hover:bg-[#10b981] hover:text-black transition">
                            <FaTwitter size={18} />
                        </a>

                        {/* LinkedIn */}
                        <a href="https://www.linkedin.com/in/mahdi-hasan-web" className="p-2 rounded-full bg-[#15221c] hover:bg-[#10b981] hover:text-black transition">
                            <FaLinkedinIn size={18} />
                        </a>

                    </div>
                </div>

            </div>

            {/* Bottom */}
            <div className="border-t border-[#1c2f26] text-center py-4 text-xs text-[#6b7280]">
                © {new Date().getFullYear()} Book Hive All right reserve
            </div>

        </footer>
    );
}