class hashMap {
    constructor(loadFactor = 0.75, capacity = 16, key, value) {
        this.loadFactor = loadFactor;
        this.capacity = capacity;
        this.key = key;
        this.value = value;
    }
    hash(key) {
        let hashCode = 0;

        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }

        return hashCode;
    }
}

// hacer funcion hash que tome un str y que devuelva la primer letra/un numero,
// guardar ese número en una key, y crear una clase llamada hashmap que al dar un str,
// se guarde en la key correspondiente