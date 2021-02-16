export async function getEdgeProps({ params, event }) {
  const { bio } = params;
  // const post = await getSomeRemotePost({ slug });
  const data = await cool_bio_profiles.get(bio, "json");
  console.log("data called", data);
  console.log("server", bio);
  // return event.respondWith(handleRequest());
  if(!data) {
    return {
      redirect: {
        destination: 'https://cool.bio',
        permanent: false,
      },
    }
  }
  return {
    props: {
      bio,
      data,
      event
    },
  };
}

export default function Post({ bio, data, event }) {
  console.log("slug slug", bio, data, event);
  return <div>I'm the new {bio}</div>;
}
