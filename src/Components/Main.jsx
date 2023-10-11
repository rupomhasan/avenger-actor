/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import React, { useEffect, useState } from "react";
import "../../public/actor.json";
import Card from "./Card";
const Main = ({handleSetBookmark}) => {
   const [actors, setActors] = useState([]);
   useEffect(() => {
      fetch("actor.json")
         .then((res) => res.json())
         .then((data) => setActors(data));
   }, []);
   return (
      <div className="grid md:grid-cols-2 gap-5 pt-20 w-2/3">
         {actors.map((actor, idx) => (
            <Card handleSetBookmark={handleSetBookmark} key={idx} actor={actor}></Card>
         ))}
      </div>
   );
};
Main.propTypes = {
   handleSetBookmark : PropTypes.func
}
export default Main;
