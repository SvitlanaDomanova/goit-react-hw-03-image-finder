import { RotatingLines } from 'react-loader-spinner';
const Loader = () => {
  return (
    <>
      <RotatingLines
        strokeColor="#3f51b5"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </>
  );
};

export default Loader;