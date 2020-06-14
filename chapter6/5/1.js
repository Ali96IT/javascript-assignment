var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]; 
var b=[];
var len=arr1.length;
for(i=0;i<len;i++){
if(b.indexOf(arr1[i])===-1){
b.push(arr1[i]);}
}
document.write(b);