function cargainicio() 
{
    document.getElementById("listado").style.display = ""
    document.getElementById("contacto").style.display = "none"
    document.getElementById("lcontacto").classList.remove("linkActivo")
    document.getElementById("linicio").classList.add("linkActivo")
}

function cargacontacto() 
{
    document.getElementById("listado").style.display = "none"
    document.getElementById("contacto").style.display = ""
    document.getElementById("lcontacto").classList.add("linkActivo")
    document.getElementById("linicio").classList.remove("linkActivo")
}