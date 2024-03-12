import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-teal-500 flex flex-col justify-center items-center">
      <h1 className="mb-8 px-5 py-4 bg-opacity-80 bg-gray-800 text-white text-3xl font-bold rounded-lg shadow-xl">
        Welcome to the Disaster Prevention Map!
      </h1>
      <Link
        href="/disaster_prevention_map"
        className="px-6 py-3 text-lg font-semibold text-gray-800 bg-white rounded-full shadow-md hover:bg-gray-100 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 active:scale-95"
      >
        Go to Disaster Prevention Map
      </Link>
    </div>
  );
}
