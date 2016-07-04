import test from "ava";
/* This is an alias defined by JSPM */
import example from "example/Home.js";
/* This is an alias defined by module-alias */
import example2 from "client/Home.js";
test("This is an example", t => {
	console.log(example, example2);
	if (example && example2) {
		t.pass();
	}
	else {
		t.fail();
	}
});