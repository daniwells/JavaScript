const sum=(...values)=>{
    const s=val=>{
        let res = 0
        for (let v of val){
            res+=v
        }
        return res
    }
    return s(values)
}

console.log(sum(4, 5, 10, 2))
