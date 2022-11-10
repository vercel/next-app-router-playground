'use client';

import { Routes, Route, Outlet, Link } from 'react-router-dom';

export default function App() {
  return (
    <div className="text-white">
      <h1>Basic Example</h1>

      <p>
        This example demonstrates some of the core features of React Router
        including nested <code>&lt;Route&gt;</code>s,{' '}
        <code>&lt;Outlet&gt;</code>s, <code>&lt;Link&gt;</code>s, and using a
        "*" route (aka "splat route") to render a "not found" page when someone
        visits an unrecognized URL.
      </p>

      {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <nav>
        <ul>
          <li className="text-white underline">
            <a href="/">Home</a>
          </li>
          <li className="text-white underline">
            <Link to="/about">About</Link>
          </li>
          <li className="text-white underline">
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li className="text-white underline">
            <Link to="/nothing-here">Nothing Here</Link>
          </li>
        </ul>
      </nav>

      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <div className="space-y-4">
        <Outlet />
      </div>
    </div>
  );
}

function Home() {
  return (
    <div className="text-xl font-medium text-gray-500">
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div className="text-xl font-medium text-gray-500">
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="text-xl font-medium text-gray-500">
      <h2>Dashboard</h2>
    </div>
  );
}

function NoMatch() {
  return (
    <div className="text-xl font-medium text-gray-500">
      <h2>Nothing to see here!</h2>
      <p className="text-white underline">
        <a href="/">Go to the home page</a>
      </p>
    </div>
  );
}
