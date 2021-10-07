import Image from "next/dist/client/image";
import { FunctionComponent } from "react";

export interface TechnologyProps {
  data: {
    id: number;
    title: string;
    image: string;
    alt: string;
    blurb: string;
  }[];
}

export const Technologies: FunctionComponent<TechnologyProps> = ({ data }) => {
  return (
    <>
      <h1>
        <span className="m-5 block  text-center tracking-wide text-5xl font-extrabold text-indigo-700">
          {"Technical skill set"}
        </span>
      </h1>
      <div className=" mx-20 md:mx-20 lg:mx-auto lg:max-w-screen-xl rounded-lg bg-gray-200 overflow-hidden shadow divide-y divide-gray-200 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px">
        {data.map(item => (
          <div
            key={item.id}
            className="  sm:rounded-tr-none relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500"
          >
            <div>
              <span className="rounded-lg inline-flex p-3 bg-indigo-50 ring-4 ring-white">
                <Image src={item.image} width={20} height={20} alt={item.alt} />
              </span>
            </div>
            <div className="mt-8">
              <h3 className="text-lg font-medium">
                <a href="#" className="focus:outline-none">
                  {/* <!-- Extend touch target to entire panel --> */}
                  <span className="absolute inset-0" aria-hidden="true"></span>
                  {item.title}
                </a>
              </h3>
              <p className="mt-2 text-sm text-gray-500">{item.blurb}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
