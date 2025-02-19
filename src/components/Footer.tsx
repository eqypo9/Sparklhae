export default function Footer() {
  return (
    <footer className='w-full bg-gradient-to-b from-gray-200 to-gray-100 text-black py-6 flex items-center justify-center text-center'>
      <p>&copy; {new Date().getFullYear()} Sparkle. All rights reserved.</p>
    </footer>
  );
}
