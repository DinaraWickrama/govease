export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="flex-grow flex items-center justify-center">
        {/* This is a placeholder for the logo */}
        <div className="w-48 h-48 bg-black rounded-full flex items-center justify-center shadow-2xl">
          <span className="text-white text-6xl font-bold">GE</span>
        </div>
      </div>
      <div className="pb-10">
        <p className="text-black text-lg">All Government services in one hand</p>
      </div>
    </main>
  );
}