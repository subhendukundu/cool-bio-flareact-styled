export async function getEdgeProps({ params }) {
    const { bio } = params;
    // const post = await getSomeRemotePost({ slug });
    console.log("server", bio);
    return {
      props: {
        bio,
      },
    };
  }
  
  export default function Post({ bio }) {
    console.log("slugslug", bio);
    return <div>I'm the {bio} booking</div>;
  }
  