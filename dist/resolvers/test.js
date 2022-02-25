"use strict";
const arr = [["a", "e"], "b", "c"];
const b = [["a", "e"], "b", "c"];
const useState = (initValue) => {
    let value = initValue;
    return [value, (v) => (value = v)];
};
const [a, setA] = useState("a");
