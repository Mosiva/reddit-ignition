import { ArrowDownIcon, ArrowUpIcon, BookmarkIcon, ChatBubbleBottomCenterIcon, GifIcon, ShareIcon } from "@heroicons/react/24/solid";
import React from "react";
import ReactTimeago from "react-timeago";
import Avatar from "./Avatar";
type Props = {
  post: Post;
};

function Post({ post }: Props) {
  return (
    <div className="rouneded-md flex cursor-pointer border border-gray-300 bg-white shadow-sm hover:border hover:border-gray-600">
      <div className="flex flex-col items-center justify-start space-y-1 rounded-l-md bg-gray-50 p-4 text-gray-400">
        <ArrowUpIcon className="h-6 w-6 hover:bg-gray-200 p-1 rounded-md hover:text-red-400" />
        <p>0</p>
        <ArrowDownIcon className="h-6 w-6 hover:bg-gray-200 p-1 rounded-md hover:text-blue-400" />
      </div>
      <div className="p-3 pb-1">
        <div className="flex items-center space-x-2">
            <Avatar />
            <p className="text-xs text-gray-400">
              <span className="font- bold text-black hover:text-blue-400 hover:underline">r/ingnition</span>  Posted by u/test
            </p>
        </div>
        <div className="py-4">
            <h2 className="text-xl font-semibold"> Ignition TA</h2>
            <p className="mt-2 text-sm font-light"> Are you serios think that this TA for juniors?</p>
        </div>

        <img className="w-full" src="https://tenor.com/view/kanye-west-are-you-serious-right-now-seriously-pissed-annoyed-gif-4452376" alt=""/>
        <div className="flex space-x-4 text-gray-400">
        <div className=" flex items-center space-x-1 text-sm font-semibold p-2 hover:bg-gray-100 cursor-pointer rounded-sm
        ">
            <ChatBubbleBottomCenterIcon className="h-6 w-6"/>
            <p className=""> 0 Comments</p>
        </div>
        <div className="flex items-center space-x-1 text-sm font-semibold p-2 hover:bg-gray-100 cursor-pointer rounded-sm">
            <GifIcon  className="h-6 w-6"/>
            <p className="hidden sm-inline">Award</p>
        </div>
        <div className="flex items-center space-x-1 text-sm font-semibold p-2 hover:bg-gray-100 cursor-pointer rounded-sm">
            <ShareIcon className="h-6 w-6"/>
            <p className="hidden sm-inline">Share</p>
        </div>
        <div className="flex items-center space-x-1 text-sm font-semibold p-2 hover:bg-gray-100 cursor-pointer rounded-sm">
            <BookmarkIcon  className="h-6 w-6"/>
            <p className="hidden sm-inline">Save</p>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Post;
