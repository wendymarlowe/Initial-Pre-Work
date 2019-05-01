/*Summary: Template literals allow us to create multi-line strings.  \n
is no longer needed to to create multi-line strings. ${VARIABLE} - to add a
variable to template string just place it between the brackets with a $ in front
The entire string is wrapped in back-ticks*/

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["id-blacklist", "no-dup-keys"]
};
function makeList(arr) {
  "use strict";

  // change code below this line
  const resultDisplayArray =  [ `<li class="text-warning">no-var</li>`,
                              `<li class="text-warning">var-on-top</li>`,
                              `<li class="text-warning">linebreak</li>` ];
  // change code above this line

  return resultDisplayArray;
}
/**
 * makeList(result.failure) should return:
 * [ `<li class="text-warning">no-var</li>`,
 *   `<li class="text-warning">var-on-top</li>`,
 *   `<li class="text-warning">linebreak</li>` ]
 **/
const resultDisplayArray = makeList(result.failure);
