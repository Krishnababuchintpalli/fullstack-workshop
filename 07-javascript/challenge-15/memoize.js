const memoize = (fn, options = {}) => {
    const cache = new Map();
    const maxSize = options.maxSize || Infinity;
    const ttl = options.ttl || 0;

    return function (...args) {
        const key = JSON.stringify(args);
        const now = Date.now();

      
        if (cache.has(key)) {
            const entry = cache.get(key);

        
            if (!ttl || now - entry.time < ttl) {
               
                cache.delete(key);
                cache.set(key, entry);
                return entry.value;
            } else {
                
                cache.delete(key);
            }
        }

   
        const value = fn.apply(this, args);

       
        if (cache.size >= maxSize) {
            const oldestKey = cache.keys().next().value;
            cache.delete(oldestKey);
        }

        cache.set(key, {
            value,
            time: now
        });

        return value;
    };
};


const expensiveFn = (n) => {
    console.log('Computing...');
    return n * n;
};

const memoized = memoize(expensiveFn, { maxSize: 100, ttl: 60000 });

console.log(memoized(5)); 
console.log(memoized(5)); 
console.log(memoized(6)); 
