import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useFetching = (actionCreator, args = null, condition = true) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (condition) {
      dispatch(actionCreator(args));
    }
  }, [actionCreator, dispatch, args, condition]);
};

export default useFetching;
