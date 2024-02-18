import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import the fontawesome icons */
import {
  faPencil,
  faAngleRight,
  faRightFromBracket,
  faCaretRight,
  faPlay,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
// import { fas } from '@fortawesome/free-solid-svg-icons' // import all of icons

/* import specific icons */
// import { all } from '@awesome.me/kit-KIT_CODE'

/* add icons to the library */
// library.add(...all)
// library.add(fas) // all of icons
library.add(
  faPencil,
  faAngleRight,
  faRightFromBracket,
  faCaretRight,
  faPlay,
  faArrowRight
);

// default exportable: a function or an object
export default (app) => {
  app.component("font-awesome-icon", FontAwesomeIcon);
  app.component("FontAwesomeIcon", FontAwesomeIcon);
  app.component("FA", FontAwesomeIcon);
};
