import React from "react";

function page({ params }: { params: { username: string } }) {
  return <section className="mt-20">{params.username}'s Page</section>;
}

export default page;
