
submit.addEventListener("click",(e)=>{
    e.preventDefault()
    let titlec = title.value
    let descc = desc.value
    localStorage.setItem("todo", JSON.stringify[titlec,descc])
    console.log(e)
})


deletebtn.addEventListener("click",(e)=>{
    e.preventDefault()   //isse reload nahi hoga
    localStorage.removeItem("todo")
    // e.preventDefault()
    // let titlec = title.value
    // let descc = desc.value
    // localStorage.setItem("todo", JSON.stringify[titlec,descc])
    // console.log(e)
})