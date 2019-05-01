/*Summary: Import statements allow us to import functions and files from
external sources. We can specifiy specific functions so we don't waste space
and memory by bringing in the entire file when we only need one function. */

import { capitalizeString } from "string_functions"

"use strict";
console.log(capitalizeString("hello!"));
