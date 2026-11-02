document.addEventListener("DOMContentLoaded",function(){
    const current=location.pathname.split("/").pop().toLowerCase()||"index.html";
    document.querySelectorAll("nav a").forEach(function(link){
        if(link.getAttribute("href")&&link.getAttribute("href").toLowerCase()===current)link.setAttribute("aria-current","page");
    });
    document.querySelectorAll(".part3-accordion").forEach(function(button){
        button.addEventListener("click",function(){
            const open=button.getAttribute("aria-expanded")==="true";
            button.setAttribute("aria-expanded",String(!open));
            button.nextElementSibling.hidden=open;
        });
    });
    const dialog=document.getElementById("part3-lightbox");
    if(dialog){
        const image=document.getElementById("part3-lightbox-img");
        const caption=document.getElementById("part3-lightbox-caption");
        document.querySelectorAll(".part3-gallery-item").forEach(function(button){
            button.addEventListener("click",function(){
                image.src=button.dataset.full;image.alt=button.dataset.alt||"";
                caption.textContent=button.dataset.alt||"";
                if(dialog.showModal)dialog.showModal();else window.open(button.dataset.full,"_blank","noopener");
            });
        });
        document.getElementById("part3-lightbox-close").addEventListener("click",function(){dialog.close();});
    }
    const search=document.getElementById("part3-programme-search");
    if(search){
        const sections=Array.from(document.querySelectorAll(".part3-searchable"));
        const status=document.getElementById("part3-search-status");
        search.addEventListener("input",function(){
            const term=search.value.trim().toLowerCase();let count=0;
            sections.forEach(function(section){
                const match=section.textContent.toLowerCase().includes(term);
                section.hidden=!match;if(match)count++;
            });
            status.textContent=term?count+" programme section(s) match your search.":"Showing all programmes.";
        });
    }
    const map=document.getElementById("part3-map");
    if(map){
        if(window.L){
            const leaflet=L.map(map).setView([-26.2041,28.0473],10);
            L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:18,attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(leaflet);
            L.marker([-26.2041,28.0473]).addTo(leaflet).bindPopup("General Johannesburg area — not a verified street address.");
            L.marker([-26.2485,27.8540]).addTo(leaflet).bindPopup("General Soweto area — not a verified street address.");
        }else{map.textContent="Map unavailable. Check your internet connection.";}
    }
    document.querySelectorAll("form").forEach(function(form){
        form.addEventListener("submit",function(event){
            if(!form.checkValidity()){event.preventDefault();form.reportValidity();return;}
            form.querySelectorAll('input[type="email"]').forEach(function(input){input.value=input.value.trim();});
        });
    });
});
