import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.warn("404 route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 px-6">
      <div className="text-center max-w-xl">
        <h1 className="text-5xl font-bold mb-4 text-white">404</h1>
        <p className="text-xl text-slate-300 mb-4">This page does not exist, or the link is no longer valid.</p>
        <a href="/" className="text-blue-400 hover:text-cyan-300 underline underline-offset-4">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
