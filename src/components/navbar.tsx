"use client";
import React, { useState } from "react";
export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div className="flex items-center justify-between border-b border-gray-400 p-6 sticky top-0 z-40 bg-slate-50">
      <a href="/" className="ml-1/5 text-sky-500 text-2xl">
        TruBuddies
        {/* <img src="https://designbygio.it/images/logo.png" alt="logo" /> */}
      </a>
      <nav>
        <section className="MOBILE-MENU flex 3xl:hidden">
          <div
            className="HAMBURGER-ICON space-y-2 mr-1/5"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-sky-500"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-sky-500"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-sky-500"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-4 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-sky-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex flex-col items-center justify-between min-h-[250px]">
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/">Home</a>
              </li>
              <li className="border-b border-gray-400 my-4 uppercase">
                <a href="/About">About</a>
              </li>
              <li className="border-b border-gray-400 my-4 uppercase">
                <a href="/contact">Contact</a>
              </li>
              <li className="border-b border-gray-400 my-4 uppercase">
                <a href="/chats">Chat</a>
              </li>
              <li className="border-b border-gray-400 my-4 uppercase">
                <a href="/diary">Diary</a>
              </li>
              <li className="border-b border-gray-400 my-4 uppercase">
                <a href="/articles">Article</a>
              </li>
              <li className="border-b border-gray-400 my-4 uppercase">
                <a href="/todo">ToDo</a>
              </li>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 3xl:flex">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  );
}
