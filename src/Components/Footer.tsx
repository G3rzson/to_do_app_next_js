import React from "react";

export default function Footer() {
  return (
    <footer className="p-4 text-center border-t border-zinc-200">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Todo App. All rights reserved.
      </p>
    </footer>
  );
}
