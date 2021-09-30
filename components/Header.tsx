import React, { FunctionComponent } from "react";
// import Image from 'next/image'

export interface HeaderProps {
  id: number;
  title: string;
  link: string;
}

export interface HeaderArray {
  data: HeaderProps[];
}

export const Header: FunctionComponent<HeaderArray> = ({ data }) => {
  return (
    <>
      <header className="bg-white">
        <nav
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          aria-label="Top"
        >
          <div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
            <div className="flex items-center">
              <div className="hidden ml-10 space-x-8 lg:block">
                <a
                  href="#"
                  className="text-base font-medium text-indigo-700 hover:text-indigo-900"
                  key="Solutions"
                >
                  <span className="text-base font-extrabold text-indigo-700">
                    KATHRYN
                  </span>
                  <span className="text-base font-extrabold text-indigo-900">
                    PRESTRIDGE
                  </span>
                </a>
              </div>
            </div>
            <div className="ml-10 space-x-6">
              {data.map(item => (
                <a
                  href={item.link}
                  className="text-base font-medium text-indigo-700 hover:text-indigo-900"
                  key={item.id}
                >
                  {item.title}
                </a>
              ))}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
