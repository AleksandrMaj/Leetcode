function kWeakestRows(mat: number[][], k: number): number[] {
    let map: Map<number,number[]> = new Map<number,number[]>();
    let strongestPower = 0;

    for(let row = 0; row < mat.length; row++) {
        let power = 0;

        for(let pos = 0; pos < mat[row].length; pos++) {
            if(mat[row][pos] == 0) break;
            power++;
        };
        if(map.has(power)) {
            map.get(power).push(row);
            power = 0;
            continue;  
        };

        if(power > strongestPower) strongestPower = power;

        map.set(power,[row]);
        power = 0;
    };

    let result: number[] = [];
    for(let power = 0;power <= strongestPower; power++) {
        if(map.has(power)) {
            let arr = map.get(power)
            for(let i = 0; i < arr.length; i++) {
                if(result.length == k) return result;
                result.push(arr[i])
            }
        };
    }

    return result;
};