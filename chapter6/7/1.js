var a = [10,20,4,40,60,70];
 var b = [1,2,3,4,5,6,7,8,9,10];
var arr1 = b.concat(a)
var c=[];
var len=arr1.length;
for(i=0;i<len;i++){
if(c.indexOf(arr1[i])===-1){
c.push(arr1[i]);}
}
document.write(c);