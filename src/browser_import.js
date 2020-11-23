// ======= v.1 =======
// import { sayHello, sayBye } from './browser_export.js';

// sayHello();
// sayBye();

// ======= v.2 =======
// import * as utils from './browser_export.js';

// utils.sayHello();
// utils.sayBye();

// ======= v.3 =======
// import utils from './browser_export.js';

// utils.sayHello();
// utils.sayBye();

// ======= v.4 =======
import fn, { sayHello } from './browser_export.js';

fn();
sayHello();
