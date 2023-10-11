/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import React from "react";
import Bookmark from "./Bookmark";
const Bookmarks = ({ bookmarks }) => {
   return (
      <div className="w-1/3 mt-20 py-3 px-5 rounded-xl bg-gray-100 h-fit ">
         <p className="text-3xl">Bookmark : {bookmarks.length} </p>

         {bookmarks.map((bookmark , idx) => (
            <Bookmark key={idx} bookmark={bookmark}></Bookmark>
         ))}
      </div>
   );
};
Bookmarks.propTypes = {
   bookmarks: PropTypes.array,
};
export default Bookmarks;
