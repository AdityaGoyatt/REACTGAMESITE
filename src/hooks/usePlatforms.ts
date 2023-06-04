import useHttp from "./useHttp";

export interface PlatformListItem {
  id: number;
  name: string;
  slug: string;
}
const usePlatforms = () =>
  useHttp<PlatformListItem>("/platforms/lists/parents");

export default usePlatforms;
