import { useState, useEffect } from 'react';
import { Storage } from 'aws-amplify';

export default function useFetchNavItems(pageConfig: any) {
  const [MainMenuItems, setMainMenuItems] = useState<any>(null);
  useEffect(() => {
    if (pageConfig.menuType === 'youth') {
      fetch('/static/data/YouthMenu.json')
        .then(function (response) {
          return response.json();
        })
        .then((myJson) => {
          setMainMenuItems(myJson);
        })
        .catch((e: any) => console.log(e));
    } else {
      const fetchNavItems = async () => {
        try {
          const url = await Storage.get('editor/navigation.json');
          const response = await fetch(url);
          const json = await response.json();
          if (json) {
            setMainMenuItems(json);
          }
        } catch (err) {
          console.log({ err });
        }
      };
      fetchNavItems(); // only fetches if there are items already in the nav, preferred for nav in auth flow
    }
  }, [pageConfig.menuType]);
  return { MainMenuItems };
}
