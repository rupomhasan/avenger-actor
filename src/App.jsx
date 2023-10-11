import { useState } from "react";
import "./App.css";
import Bookmarks from "./Components/Bookmarks";
import Main from "./Components/Main.jsx";
function App() {
   const [bookmarks, setBookmarks] = useState([]);
   const [cost ,setCost] = useState(0)
   const handleSetBookmark = (actor) => {
      const isExist = bookmarks.find((item) => item.id === actor.id);
      const newBookmarks = [...bookmarks, actor];
      let amount = actor.salary;

      console.log(amount);
      isExist ? alert("Already Exist") : setBookmarks(newBookmarks);
      bookmarks.forEach((item) => {
         amount = amount + item.salary;
      });
      if (amount > 30000)
      {
         alert('You can not buy more actor')
      }
      else {
         setCost(amount)
      }
   };

   return (
      <div className="flex gap-10">
         <Main handleSetBookmark={handleSetBookmark}></Main>
         <Bookmarks totalCost= {cost} bookmarks={bookmarks}></Bookmarks>
      </div>
   );
}

export default App;
