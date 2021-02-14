export async function getEdgeProps({ params, event }) {
  const { bio } = params;
  // const post = await getSomeRemotePost({ slug });
  const data = await cool_bio_profiles.get(bio, "json");
  console.log("data called", data);
  console.log("server", bio);
  // return event.respondWith(handleRequest());
  return Response.redirect('https://cool.bio')
  return {
    props: {
      bio,
      data,
      event
    },
  };
}

export default function Post({ bio, data, event }) {
  console.log("slugslug", bio, data, event);
  return <div>I'm the {bio}</div>;
}
