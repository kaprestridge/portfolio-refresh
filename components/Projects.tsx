import { projectData } from "../data/projects";
import Image from "next/dist/client/image";
import { FunctionComponent } from "react";

export interface ProjectProps {
  data: {
    id: number;
    name: string;
    image: string;
    description: string;
    url: string;
  }[];
}

export const Projects: FunctionComponent<ProjectProps> = ({ data }) => {
  return (
    <>
      <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="absolute inset-0">
          <div className="bg-white h-1/3 sm:h-2/3"></div>
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <span className="m-5 block  text-center tracking-wide text-5xl font-extrabold text-indigo-700">
              Past Projects
            </span>
          </div>
          <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            {data.map(item => (
              <div className="" key={item.id}>
                <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                  <div className="flex-shrink-0">
                    <Image
                      className="h-48 w-full object-cover"
                      height={192}
                      width={512}
                      src={item.image}
                      alt={item.name + "cover image"}
                    />
                  </div>
                  <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-indigo-600">
                        <a href={item.url} className="hover:underline">
                          View this project
                        </a>
                      </p>
                      <a href="#" className="block mt-2">
                        <p className="text-xl font-semibold text-gray-900">
                          {item.name}
                        </p>
                        <p className="mt-3 text-base text-gray-500">
                          {item.description}
                        </p>
                      </a>
                    </div>
                    <div className="mt-6 flex items-center">
                      <div className="flex-shrink-0"></div>
                      <div className="ml-3">
                        <div className="flex space-x-1 text-sm text-gray-500"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
