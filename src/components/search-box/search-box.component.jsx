import React from "react";

import "./search-box.styles.css"

export const SearchBox = ({placeholder, searchHandle}) =>(
    <input className="search" type="search" placeholder = {placeholder} onChange = {searchHandle}/>
)