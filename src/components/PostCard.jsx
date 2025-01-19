import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-[#FAFAFF] rounded-lg p-4 shadow-lg border border-[#DADDD8] transition-transform transform hover:scale-105 duration-200">
        <div className="w-full mb-4">
          <img
            src={appwriteService.getFilePreview(featuredImage)}
            alt={title}
            className="rounded-lg object-cover w-full h-40"
          />
        </div>
        <h2 className="text-lg font-semibold text-[#1C1C1C]">{title}</h2>
      </div>
    </Link>
  );
}

export default PostCard;
