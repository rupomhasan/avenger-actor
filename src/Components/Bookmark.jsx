/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import React from 'react';
const Bookmark = ({bookmark}) => {
    const {name} = bookmark
    return (
        <div>
            <h4 className='font-bold text-3xl p-3 bg-indigo-200 my-4 rounded-xl'>
                {name}
            </h4>
        </div>
    );
};
Bookmark.propTypes = {
    bookmark : PropTypes.object
}
export default Bookmark;