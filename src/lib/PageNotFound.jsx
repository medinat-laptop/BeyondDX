import { Link, useLocation } from "react-router-dom";

export default function PageNotFound() {
  const { pathname } = useLocation();
  const pageName = pathname.slice(1);

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 p-6">
      <div className="max-w-md text-center">
        <p className="text-7xl font-light text-slate-300">404</p>
        <h1 className="mt-4 text-2xl font-medium text-slate-800">Page not found</h1>
        <p className="mt-3 text-slate-600">
          The page <span className="font-medium text-slate-700">"{pageName}"</span> could not be
          found.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50"
        >
          Go home
        </Link>
      </div>
    </main>
  );
}
