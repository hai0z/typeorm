const arr: [Array<string>, string, string] = [["a", "e"], "b", "c"];

const b : typeof arr = [["a", "e"], "b", "c"];

const useState = <T>(initValue: T): [T, (v: T) => void] => {
    let value = initValue;
    return [value, (v: T) => (value = v)];
};

const [a, setA] = useState<string>("a");



