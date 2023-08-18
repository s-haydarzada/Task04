
// function fn1(n) {

//     let sum = 0;
//     let num;

//     while (n > 0) {
//         num = n % 10;
//         sum += num;
//         n = Math.floor(n / 10)
//     }
//     return sum;
// }
// console.log(fn1(342))

// function EBOB(a,b){
//     while(a!==b){
//         if(a>b) a-=b
//         else b-=a
//     }
//     return a;
// }

// var x= EBOB(18,48)
// console.log(x)

// function MaxNum(nums){

//     let max = nums[0]
//     for(let  i =0;i<nums.length;i++){
//         if(nums[i]>max) max=nums[i]
//     }
//     return max;
// }

// const nums = [1,2,3]
// let maximumNum = MaxNum(nums)
// console.log(maximumNum)

// function reqemCemiTap(eded) {
//     let cem = 0;
//     let reqem;
//     while (eded > 0) {
//         reqem = eded % 10;
//         eded=(eded-reqem)/10;
//         cem += reqem;
//     }
//     return cem;
// }

// function neticeHesabla(eded1, eded2) {
//     const cem1 = reqemCemiTap(eded1);
//     const cem2 = reqemCemiTap(eded2);
//     const hasil = cem1 * cem2;
//     return hasil;
// }

// const eded1 = 324;  // Birinci ədədi dəyişənə göre təyin edin
// const eded2 = 456;  // İkinci ədədi dəyişənə göre təyin edin

// const hasil = neticeHesabla(eded1, eded2);
// console.log("Nəticə:", hasil);

// function kvadratVeyaKub(num) {
//     if (num < 0) {
//         var musbetEded = -num;
//         var kvadrat = musbetEded * musbetEded;
//         return kvadrat;
//     } else {
//         var kub = num * num * num;
//         return kub;
//     }
// }

var n = prompt("daxil edin");
for (let i = 1; i < n; i++) {
    let count = 0;
    for (let j = 1; j <= i; j++) {
        if (i % j === 0) count++
    }
    if(count>2) console.log(i)
}
