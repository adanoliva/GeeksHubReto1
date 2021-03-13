window.onload = function() {
    let ls =localStorage.getItem("enlace")
    if (ls != null){
        if (ls == 'inicio')
        {
            cargainicio() 
        }
        else
        {
            cargacontacto() 
        }
    }
  };


function cargainicio() 
{
    document.getElementById("listado").style.display = ""
    document.getElementById("contacto").style.display = "none"
    document.getElementById("lcontacto").classList.remove("linkActivo")
    document.getElementById("linicio").classList.add("linkActivo")
    localStorage.setItem("enlace", "inicio")
}

function cargacontacto() 
{
    document.getElementById("listado").style.display = "none"
    document.getElementById("contacto").style.display = ""
    document.getElementById("lcontacto").classList.add("linkActivo")
    document.getElementById("linicio").classList.remove("linkActivo")
    localStorage.setItem("enlace", "contacto")
}

