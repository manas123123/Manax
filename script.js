const observerLeft=new IntersectionObserver((entries)=>{
   entries.forEach((entry)=>{
         console.log(entry);
         if(entry.isIntersecting){
            entry.target.classList.add('show-left');
         }
         else{
            entry.target.classList.remove('show-left');
         }
   });
});



const hiddenLeftElements= document.querySelectorAll('.hidden-left');
hiddenLeftElements.forEach((el)=> observerLeft.observe(el));





const observerRight =new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
          console.log(entry);
          if(entry.isIntersecting){
             entry.target.classList.add('show-right');
          }
          else{
             entry.target.classList.remove('show-right');
          }
    });
 });
 
 
 
 const hiddenRightElements= document.querySelectorAll('.hidden-right');
 hiddenRightElements.forEach((el)=> observerRight.observe(el));
 
 

