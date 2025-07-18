export default function HashMap() {
    let capacity: number = 16;
    const loadFactor: number = 0.75;
    const bucketList: Array<[key: number, value: string]> = [];

    const hash = (key: string) => {
        let hashCode: number = 0;

        const primeNumber: number = 31;
        for(let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
            hashCode = hashCode % capacity;
        } 

        return hashCode;
    }

    const set = (key: string, value: string) => {}

    const get = () => {}

    const has = (key: number) => {}
    const remove = (key: number) => {}
    const size = () => {}
    const clear = () => {}
    const keys = () => {}
    const values = () => {}
    const entries = () => {}

    return { hash, set, get, has, remove, size, clear, keys, values, entries }
}