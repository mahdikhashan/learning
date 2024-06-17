import useAxios from '../use-axios';

const useAPI = () => {
  const POST = ({ url, params }) => {
    const [post, error, loading, handler] = useAxios();

    (() => {
      handler({
        method: 'POST',
        url,
        requestConfig: {
          data: params
        }
      });
    })();

    return {
      post,
      error,
      loading
    };
  };

  const GET = () => {};

  return {
    POST,
    GET
  };
};

export default useAPI;
