let arr=[];
const barsize=document.getElementById("size");
const slidespeed=document.getElementById("speed");
let n=barsize.value;
let t=slidespeed.value;

function generatebars(arr){
for(var i=0;i<100;i++){
    const val= Math.floor(Math.random()*100) + 1;
    arr.push(val);
    var bar=document.createElement("DIV");
    bar.classList.add("sort-bar");
    document.getElementById("bar-components").appendChild(bar);
    let prop= document.getElementsByClassName("sort-bar");
    prop[i].style.height= val*5;
    prop[i].style.left= 12*i;
    prop[i].style.backgroundColor="#f0ece2";
}
}

generatebars(arr);

function swap(el1,el2){
    const style1=window.getComputedStyle(el1);
    const style2=window.getComputedStyle(el2);
    
    const transform1=style1.getPropertyValue("height")
    const transform2=style2.getPropertyValue("height")
    
    el1.style.height=transform2;
    el2.style.height=transform1;
}

function Delay(time){
    return new Promise((resolve)=>{
        setTimeout(()=>{resolve("")},time*(800/t));
    })
}

const bubbleSort=async function(){
    for(let i=0;i<n;i++){
        for(let j=0;j<n-i-1;j++){
            const el1=document.querySelectorAll('.sort-bar')[j];
            const el2=document.querySelectorAll('.sort-bar')[j+1];
            el1.style.backgroundColor="#69779b";
            el2.style.backgroundColor="#69779b";
            await Delay(1);
            if(arr[j]>arr[j+1]){
                let temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
              swap(el1,el2);
            }
            el1.style.backgroundColor="#f0ece2";
            el2.style.backgroundColor="#f0ece2";
        }
        const finalBar=document.querySelectorAll('.sort-bar')[n-i-1];
        finalBar.style.backgroundColor="#00FF7F";
    }
}
const selectionSort=async function(){
    for(let i=0;i<n;i++){
        var min_idx=i;
        var j; var el1; var el2;
        for(j=i+1;j<n;j++){
            el1=document.querySelectorAll('.sort-bar')[j];
            el2=document.querySelectorAll('.sort-bar')[min_idx];
            el1.style.backgroundColor="#69779b";
            el2.style.backgroundColor="#69779b";
            await Delay(1);
            if(arr[j]<arr[min_idx]){
                min_idx=j;
            }
            el1.style.backgroundColor="#f0ece2";
            el2.style.backgroundColor="#f0ece2";
        }
        var el3=document.querySelectorAll('.sort-bar')[i];
        let temp=arr[min_idx];
        arr[min_idx]=arr[i];
        arr[i]=temp;
        swap(el2,el3);
        const finalBar=document.querySelectorAll('.sort-bar')[i];
        finalBar.style.backgroundColor="#00FF7F";
    }
}

const insertionSort=async function(){
    for(let i=1;i<n;i++){
        let j=i-1;
    for(j=i-1;j>=0;j--){
    let el1=document.querySelectorAll('.sort-bar')[j];
    let el2=document.querySelectorAll('.sort-bar')[j+1];
    el1.style.backgroundColor="#69779b";
    el2.style.backgroundColor="#69779b";
    await Delay(1);
    if(arr[j]>arr[j+1]){
        const temp=arr[j];
        arr[j]=arr[j+1];
        arr[j+1]=temp;
     swap(el1,el2);
    }else{
        el1.style.backgroundColor="#00FF7F";
        el2.style.backgroundColor="#00FF7F";
        break;
    }
    el2.style.backgroundColor="#00FF7F";
    }
    let finalBar=document.querySelectorAll('.sort-bar')[j+1];
    finalBar.style.backgroundColor="#00FF7F";
    }
}

const findPivot=async function(arr,si,ei){
    if(si<ei){
    let pivot=arr[ei];
    let pivotBar=document.querySelectorAll('.sort-bar')[ei];
    pivotBar.style.backgroundColor="yellow";
    
    let j=si; var el2;
    for(let i=si;i<=ei;i++){
        let el1=document.querySelectorAll('.sort-bar')[i];
        el1.style.backgroundColor="#69779b";
        await Delay(1);
    if(arr[i]<pivot){
        el2=document.querySelectorAll('.sort-bar')[j];
        el2.style.backgroundColor="#69779b";
        const temp=arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
        swap(el1,el2);
        el2.style.backgroundColor="#00FF7F";
        j+=1;
    }
    el1.style.backgroundColor="#00FF7F";
    }
    const elj=document.querySelectorAll('.sort-bar')[j];
    elj.style.backgroundColor="#69779b";
    const temp=arr[ei];
    arr[ei]=arr[j];
    arr[j]=temp;
    swap(elj,pivotBar);
    elj.style.backgroundColor="#00FF7F";
    pivotBar.style.backgroundColor="#00FF7F";
    return j;
    }
    }
    
    
    const quickSortFunction=async function(arr,si,ei){
        if(si<ei){  
          const pivot=await findPivot(arr,si,ei);
          quickSortFunction(arr,si,pivot-1);
          quickSortFunction(arr,pivot+1,ei);  
        }else{
            return new Promise((resolve)=>{
                "promise fullfilled";
            });
        }
    }
    const quickSort=async function(){
            const promise= await quickSortFunction(arr,0,n-1);
        }    