import React from "react";

function page({ params }: { params: { username: string; id: string } }) {
  console.log("params", params);
  return (
    <div className="mt-40">
      page {params.username}
      {params.id}
    </div>
  );
}

export default page;
