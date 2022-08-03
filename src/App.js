import "photoswipe/dist/photoswipe.css";
import "photoswipe/dist/default-skin/default-skin.css";

import { Gallery, Item } from "react-photoswipe-gallery";

function App() {
  return (
    <Gallery>
      <Item
        original="https://picsum.photos/1024/768?image=2"
        thumbnail="https://picsum.photos/200/300?image=2"
        width="1024"
        height="768"
      >
        {({ ref, open }) => (
          <img
            ref={ref}
            onClick={open}
            src="https://picsum.photos/200/300?image=2"
          />
        )}
      </Item>
    </Gallery>
  );
}

export default App;