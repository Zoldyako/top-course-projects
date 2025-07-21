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
        const bucket: Bucket = buckets[index];
        const entryIndex: number = findEntryIndex(key);
        return entryIndex !== -1 ? bucket[entryIndex][1] = value : bucket.push([key, value]);
    }

    const get = (key: string) => {
        const entry = findEntry(key);
        return entry === false ? 'No entry found' : entry;
    }

    const has = (key: string) => {
        const entry = findEntry(key);
        return entry === false ? false : true;
    }

    const remove = (key: string) => {}
    const size = () => {}
    const clear = () => {}
    const keys = () => {}
    const values = () => {}
    const entries = () => {}

    const findEntry = (key: string) => {
        const index = hash(key);
        
        if (index < 0 || index >= buckets.length) {
            throw new Error("Trying to access index out of bounds");
        }
        
        const bucket: Bucket = buckets[index];

        if (bucket.length === 0) {
            return false;
        }
        
        if (bucket.length === 1) { 
            return bucket; 
        }

        for (const entry of bucket) {
            if (entry[0] === key) { return entry }
            else { return false }
        }
    }

    const findEntryIndex = (key: string) => {
        const index = hash(key);
        const bucket: Bucket = buckets[index];
        return bucket.findIndex(entry => entry[0] === key);
    }

    return { hash, set, get, has, remove, size, clear, keys, values, entries }
}