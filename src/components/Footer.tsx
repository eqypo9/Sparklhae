export default function Footer() {
  return (
    <footer className='bottom-0 left-0 w-full bg-gradient-to-b from-gray-200 to-gray-100 text-black py-6 flex items-center justify-center text-center z-10'>
      <p>&copy; {new Date().getFullYear()} SparkleHae. All rights reserved.</p>
    </footer>
  );
}
