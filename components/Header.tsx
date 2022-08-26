import Image from "next/image";
import React from "react";
import {
  Bars3Icon,
  BeakerIcon,
  ChevronDownIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  StarIcon,
} from "@heroicons/react/24/solid";
import {
  BellIcon,
  CloudIcon,
  GlobeAltIcon,
  PlusIcon,
  SparklesIcon,
  SpeakerWaveIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline";

import { signIn, signOut, useSession } from "next-auth/react";

function Header() {
  const { data: session } = useSession();
  return (
    <div className="sticky top-0 z-50 flex bg-white px-4 py-2 shadow-sm">
      <div className="relative h-20 w-20 flex-shrink-0 cursor-pointer">
        <Image
          objectFit="contain"
          src="data:image/png;base64,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"
          layout="fill"
        />
      </div>
      <div className="mx-7 flex items-center xl:min-w-[300px]">
        <HomeIcon className="h-5 w-5" />
        <p className="ml-2 hidden flex-1 lg:inline">Home </p>
        <ChevronDownIcon className="h-5 w-5" />
      </div>
      <form className="flex flex-1 items-center space-x-2 rounded-sm border border-gray-200 bg-gray-100 px-3 py-1">
        <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
        <input
          className="flex-1 bg-transparent outline-none"
          type="text"
          placeholder="Search Reddit"
        />
        <button type="submit" hidden />
      </form>

      <div className="mx-5 hidden items-center space-x-2 text-gray-500 lg:inline-flex">
        <BellIcon className="h-9 w-6 lg:w9 cursor-pointer rounded-sm lg:p-1 lg:hover:bg-gray-100" />
        <CloudIcon className="h-9 w-6 lg:w9 cursor-pointer rounded-sm lg:p-1 lg:hover:bg-gray-100" />
        <GlobeAltIcon className="h-9 w-6 lg:w9 cursor-pointer rounded-sm lg:p-1 lg:hover:bg-gray-100" />
        <hr className="h-10 border border-gray-100" />
        <PlusIcon className="h-9 w-6 lg:w9 cursor-pointer rounded-sm lg:p-1 lg:hover:bg-gray-100" />
        <SparklesIcon className="h-9 w-6 lg:w9 cursor-pointer rounded-sm lg:p-1 lg:hover:bg-gray-100" />
        <SpeakerWaveIcon className="h-9 w-6 lg:w9 cursor-pointer rounded-sm lg:p-1 lg:hover:bg-gray-100" />
        <VideoCameraIcon className="h-9 w-6 lg:w9 cursor-pointer rounded-sm lg:p-1 lg:hover:bg-gray-100" />
      </div>
      <div className="ml-5 flex items-center lg:hidden">
        <Bars3Icon className="h-9 w-6 lg:w9 cursor-pointer rounded-sm lg:p-1 lg:hover:bg-gray-100" />
      </div>

      {session ? (
        <div
          onClick={() => signOut()}
          className="hidden cursor-pointer items-center space-x-2 border border-gray-100 p-2 lg:flex"
        >
          <div className="flex-1 text-xs">
          <p className="truncaite">{session?.user?.name}</p>
          <p className="text-gray-400">1 Karma</p>
          </div>
          <ChevronDownIcon className="h-5 flex-shrink-0 text-gray-400" />
        </div>
      ) : (
        <div
          onClick={() => signIn()}
          className="hidden cursor-pointer items-center space-x-2 border border-gray-100 p-2 lg:flex"
        >
          <p className="text-gray-400">Sign Up</p>
        </div>
      )}
    </div>
  );
}

export default Header;
