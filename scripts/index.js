var n=()=>{document.querySelectorAll(".details").forEach(t=>{t.addEventListener("click",()=>{let e=t.querySelector("summary img");t.hasAttribute("open")?e.src="icons/stack.svg#arrow_down":e.src="icons/stack.svg#arrow_up"})})};n();var s=()=>{let o=document.querySelector(".main-container"),e=document.getElementById("block-original").cloneNode(!0);e.removeAttribute("block-clone"),o.appendChild(e)};s();var r=()=>{let o=window.matchMedia("(min-width: 1280px)");document.querySelectorAll(".details").forEach(e=>{let c=e.querySelector("summary img");o.matches&&(e.setAttribute("open","1"),c.src="icons/stack.svg#arrow_up")})};r();
