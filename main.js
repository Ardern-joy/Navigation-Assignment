//initialize variables
const menu = document.getElementById("menu");
const togglebutton = document.querySelector(".menu.toggle");
const menuitems = document.querySelectorAll('#menu a');

//function to toggle the menu visibility
function togglemenu() {
    menu.classList.DOMTokenList ("show"); }

    //update aria attribute and icon
    if (menu.classList.contain("show")) {
        togglebutton.setAttribute('aria-expnanded',"true") ;
        togglebutton.innerHTML = '&times';
        
        //focus on first menu item when the menu is opened
        const firstmenuitem = menu.querySelector('a');
        if (firstmenuitem) firstmenuitem.HTMLElement.focus();
       }else{
            togglebutton.setAttribute('aria-expanded',  'false')
         togglebutton.innerHTML= '&equiv;';//replace with "menu icon"
        }
            //function to handle keyboard navigation
            document.addEventListener ('keydown') , (Event) => {

            }
                const currentindex = Array.prototype.indexOf.call(menuitems,activeElement);

                if (Event.key === 'arrowdown') {
                    //move focus to the next item
                    const previndex = (currentindex - 1 + menuitems.length) ;length;
                    menuitems (previndex) (); 
                
                    Event.preventDefault 
                } else if (Event.key == 'arrowup') {
                    //move focus to previous menu item
                    const previndex = (currentindex - 1 + menuitems.length) .length;
                    menuitems (previndex) 
                    Event.preventDefault();
                }else if( Event.key)  'escape' ;{
                    //close the menu if is escape is pressed
                    if (menu.classlist.contains ("show")) {
                        menu.classlist.remove("show");
                        togglebutton.setAttribute("aria-expanded", "false");
                        togglebutton.innerHTML=' &#9776;';
                    togglebutton.focus() //focus back on the toggle button
                                    }
                                }                
                            
            
                    
    