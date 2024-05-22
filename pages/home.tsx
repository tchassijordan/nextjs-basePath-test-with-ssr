export const getServerSideProps = async () => {
  return {
    props: {},
  };
};

export default function HomePage() {
  return (
    <>
      <div>This page will be pre-rendered on the server</div>
    </>
  );
}
