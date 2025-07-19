type Bucket = Array<[key: string, value: string]>;

export default function HashMap() {
    let capacity: number = 16;
    let buckets: Bucket[] = Array.from({ length: capacity }, () => []);
    const loadFactor: number = 0.75;
    
    const hash = (key: string) => {
        let hashCode: number = 0;

        const primeNumber: number = 31;
        for(let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
        } 
        
        return hashCode % capacity;
    }

    const set = (key: string, value: string) => {
        const index: number = hash(key);
        
        if (index < 0 || index >= buckets.length) {
            throw new Error("Trying to access index out of bounds");
        }
        
        let bucket = buckets[index];
        const foundEntry:number = bucket.findIndex(entry => { entry[0] ===key });

        foundEntry !== -1 ? bucket[foundEntry][1] = value : bucket.push([key, value]);
        return;
    }

    const get = (key: string) => {
        const index: number = hash(key);
        const bucket = buckets[index];

        for (const entry of bucket) {
            if (entry[0] === key) return entry 
        }

        return "Nothing was found";
    }

    const has = (key: string) => {
        const index: number = hash(key);
        const bucket: Bucket = buckets[index];
        
        for (const [k, v] of bucket) {
            if (k === key) return true;
        }

        return false;
    }

    const remove = (key: string) => {}
    const size = () => {}
    const clear = () => {}
    const keys = () => {}
    const values = () => {}
    const entries = () => {}

    return { hash, set, get, has, remove, size, clear, keys, values, entries }
}