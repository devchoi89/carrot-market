import { useEffect, useState } from "react";

interface UseCoordState {
  latitude: number | null;
  longitude: number | null;
}

export default function useCoords() {
  const [coords, setCorrds] = useState<UseCoordState>({
    latitude: null,
    longitude: null,
  });
  const onSuccess = ({
    coords: { latitude, longitude },
  }: GeolocationPosition) => {
    setCorrds({ latitude, longitude });
  };
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(onSuccess);
  }, []);
  return coords;
}
