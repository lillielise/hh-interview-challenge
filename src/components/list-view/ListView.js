import React, { useState } from 'react'
import Pagination from '../pagination/Pagination'
import ColorSwatch from '../color-swatch/ColorSwatch'

function ListView(props) {

  console.log(props.location.state.comingFromFamilies, props.colors)
  
  const [currentPage, setCurrentPage] = useState(1)
  const [colorsPerPage] = useState(12)
  const indexOfLastPost = currentPage * colorsPerPage;
  const indexOfFirstPost = indexOfLastPost - colorsPerPage;
  let currentColors;

  if(props.location.state.comingFromFamilies) {
    currentColors = ["#ff0000", "#ff0000", "#ff0000","#ff0000","#ff0000","#ff0000","#ff0000","#ff0000","#ff0000","#ff0000","#ff0000"];
  } else {
    currentColors = props.colors.slice(indexOfFirstPost, indexOfLastPost);
  }

  const paginate = pageNumber => {
    setCurrentPage(pageNumber);
  }

  return (
    <div>
      <ColorSwatch currentColors={currentColors} />
      <Pagination
        colorsPerPage={colorsPerPage}
        totalColors={props.colors.length}
        paginate={paginate}
      />
    </div>
  )
}

export default ListView
