import { useEffect, useState } from 'react';
export default function useVideoTypes() {
  const [videoTypes, setVideoTypes] = useState<any[]>([]);
  useEffect(() => {
    fetch('/static/data/import-video.json')
      .then(function (response) {
        return response.json();
      })
      .then((myJson) => {
        console.log(myJson);
        setVideoTypes(
          myJson.sort((typeA: any, typeB: any) =>
            typeA.name.localeCompare(typeB.name)
          )
        );
      });
  }, []);
  return { videoTypes };
}
