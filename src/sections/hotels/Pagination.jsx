import React from "react";

function Pagination() {
  const handleMore = () => {
    console.log("working");
  };

  return (
    <>
      <div className="flex justify-center py-10">
        <button className="border-2 px-5 py-3 m-auto" onClick={handleMore}>
          Load More
        </button>
      </div>
    </>
  );
}

export default Pagination;
