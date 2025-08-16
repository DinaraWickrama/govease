import Image from 'next/image';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center" style={{ backgroundColor: '#A7C7E7' }}>
        <div className="flex flex-col items-center">
            <Image src="/Gove ease.png" alt="Gove ease logo" width={192} height={192} />
            <h1 className="text-4xl font-bold text-white mt-4">Sign in to your account</h1>
            <p className="text-white mt-2">
                Don't have an account?{' '}
                <Link href="/signup" className="font-bold underline">
                    Sign up
                </Link>
            </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full py-10" style={{ backgroundColor: 'black' }}>
        <div className="w-full max-w-md space-y-6">
            <div>
                <label htmlFor="email" className="sr-only">Email address</label>
                <input id="email" name="email" type="email" autoComplete="email" required className="block w-full px-3 py-2 text-white bg-gray-800 border border-gray-700 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Email" />
            </div>
            <div>
                <label htmlFor="password" className="sr-only">Password</label>
                <input id="password" name="password" type="password" autoComplete="current-password" required className="block w-full px-3 py-2 text-white bg-gray-800 border border-gray-700 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Password" />
            </div>
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <input id="remember-me" name="remember-me" type="checkbox" className="w-4 h-4 text-indigo-600 bg-gray-700 border-gray-600 rounded focus:ring-indigo-500" />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-400">
                        Remember me
                    </label>
                </div>
                <div className="text-sm">
                    <Link href="#" className="font-medium text-indigo-400 hover:text-indigo-300">
                        Forgot your password?
                    </Link>
                </div>
            </div>
            <div>
                <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Log in
                </button>
            </div>
            <p className="text-xs text-gray-500 text-center">
                By signing up you agree to the terms of service and data processing agreement
            </p>
        </div>
      </div>
    </main>
  );
}
