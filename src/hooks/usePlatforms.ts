import useHttp from "./useHttp";

interface Platform {
  id: number;
  name: string;
}
const usePlatforms = () => useHttp<Platform>("/platforms/lists/parents");

export default usePlatforms;
