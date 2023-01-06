document.getElementById("menu").addEventListener ("click", ev => {
    ev.preventDefault();
});

var pagePr = document.getElementById("registerProduct");
var pageOp = document.getElementById("registerOperator");
var pageSt = document.getElementById("productStock");

function loadRegisterOp () {
    

    if(pageOp.style.display == "none") {
        pageOp.style.display = "block";
    } else {
        pageOp.style.display = "none";
    }

    if(pagePr.style.display == "block") {
        pagePr.style.display = "none";
        pageOp.style.display = "block";
    }
}

function loadRegisterPr() {
    

    if(pagePr.style.display == "none") {
        pagePr.style.display = "block";
    } else {
        pagePr.style.display = "none";
    }
    
    if(pageOp.style.display == "block") {
        pageOp.style.display = "none";
        pagePr.style.display = "block";
    }
}

function loadProductStock() {
    

    if(pageSt.style.display == "none") {
        pageSt.style.display = "block";
    } else {
        pageSt.style.display = "none";
    }
    
    if(pageOp.style.display == "block" || pagePr.style.display == "block" ) {
        pageOp.style.display = "none";
        pagePr.style.display = "none";
        pageSt.style.display = "block";
        
    }
}



