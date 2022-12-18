import useLocalStorage from "./useLocalStorage";

const useToggle = (key, initValue) => {
  const [value, setValue] = useLocalStorage(key, initValue);

  const toggle = () => {
    setValue((prevValue) => {
      return typeof value === "booean" ? value : !prevValue;
    });
  };

  return [value, toggle];
};

export default useToggle;
