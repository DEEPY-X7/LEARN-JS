sessionStorage.getItem("name")
sessionStorage.clear("name")
sessionStorage.removeItem("name")
sessionStorage.setItem("name")

window.onstorage =(e)=>{ 
    alert("changed")
    console.log(e)
}