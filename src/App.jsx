import { useState } from "react";
import "./App.css";
import Bookmarks from "./Components/Bookmarks";
import Main from "./Components/Main.jsx";
function App() {
   const [bookmarks, setBookmarks] = useState([]);

   const handleSetBookmark = (actor) => {
      const newBookmarks = [...bookmarks, actor];
      setBookmarks(newBookmarks);
   };

   return (
      <div className="flex gap-10">
         <Main handleSetBookmark={handleSetBookmark}></Main>
         <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>
   );
}

export default App;
