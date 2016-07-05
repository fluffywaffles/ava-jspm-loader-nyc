import test from "ava";
/* `example` is an alias defined by JSPM */
import example from "example/Home.js";
/* `client` is an alias defined by `module-alias`. (Babel should resolve that.) */
import client from "client/Home.js";
test("This is an example", t => {
	console.log(example);
	console.log(client);
	if (example && client) {
		t.pass();
	}
	else {
		t.fail();
	}
});