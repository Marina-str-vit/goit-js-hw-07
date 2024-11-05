const allItemElements = document.querySelectorAll(".item");
console.log(`Number of categories: ${allItemElements.length}`);

allItemElements.forEach((item) => {     
    console.log(`Category: ${item.children[0].textContent}`);    
    console.log(`Elements: ${item.children[1].children.length}`); 
});

allItemElements.forEach((item) => {    
      item.setAttribute(`style`, `margin: 24px; padding: 16px`);
      item.style.borderRadius = `8px`;
      item.style.backgroundColor = `#f6f6fe`;    
      item.style.width = `392px`;
      item.style.listStyleType = `none`;
 
      item.children[0].setAttribute(`style`, `font-family: "Montserrat", SemiBold; font-weight: 600; font-size: 24px; line-height: 133%; letter-spacing: 0.04em; margin:0 0 16px`);
      item.children[0].style.color = `#2e2f42`;  
     
      for (let itemLi of item.children[1].children) {
          itemLi.setAttribute(`style`, `font-family: "Montserrat", regular; margin-bottom: 8px; line-height: 150%; letter-spacing: 0.04em; padding-left: 16px`);
          itemLi.style.borderradius = `4px`;
          itemLi.style.border = `1px solid #808080`;                        
          itemLi.style.color = `#2e2f42`;
          itemLi.style.listStyleType = `none`; 
      }        
  });