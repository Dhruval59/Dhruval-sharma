import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex min-h-screen bg-slate-100 dark:bg-gray-600 text-black dark:text-white">
      {/* Left Side - Text Section */}
      <div className="flex items-center justify-center w-1/2 p-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-6">Hey There!</h1>
          <p className="text-2xl font-bold mb-2">
            I am Dhruval
            </p>
        <p className="text-xl ">
            SRE/DevOps Engineer
          </p>
        </div>
      </div>

      {/* Right Side - Image Section */}
      <div className="flex items-center justify-center w-1/2 p-6">
        <div className="w-full max-w-sm">
          <Image 
            src="/Dhruvalnew.jpg" 
            alt="Dhruval Sharma" 
            width={400} 
            height={400} 
            className="rounded-full shadow-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
}
