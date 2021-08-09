
const consultarinteresado = async () => { 
    document.getElementById('linkproyecto').setAttribute("class","navbar-brand")
    document.getElementById('linkproyecto').setAttribute("style","color: #0A2269")
    document.getElementById('linkinteresado').setAttribute("class","nav-link navbar-brand active")
    document.getElementById('linkinteresado').setAttribute("style","background: #0A2269; color: #E6E6E6")
    document.getElementById('linkentregable').setAttribute("class","navbar-brand")
    document.getElementById('linkentregable').setAttribute("style","color: #0A2269")
    document.getElementById('linksupuesto').setAttribute("class","navbar-brand")
    document.getElementById('linksupuesto').setAttribute("style","color: #0A2269")
    document.getElementById('linkincidente').setAttribute("class","navbar-brand")
    document.getElementById('linkincidente').setAttribute("style","color: #0A2269")
    document.getElementById('linkriesgo').setAttribute("class","navbar-brand")
    document.getElementById('linkriesgo').setAttribute("style","color: #0A2269")
    document.getElementById('mensaje').innerHTML= ""
    document.getElementById('nuevoboton').innerHTML= 
    ` 
    <button type="button" 
            data-bs-toggle="modal" 
            data-bs-target="#modal-1" 
            style="background: #0A2269; border-color: #E6E6E6; width:150px" 
            id="nuevoboton" 
            class="col-1 bt btn-primary btn-block"
        >Nuevo Interesado
    </button> 
    <p></p> 
    `
    document.getElementById('div-modal').innerHTML =
    ` 
    <div class="modal fade" id="modal-1" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true"> 
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Formulario Crear Interesado</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                  </button>
                </div>
                <form onsubmit="agregarinteresado(); return false">
                    <div class="modal-body">
                        <div> 
                            <h6>Nombre Interesado</h6> 
                            <input id="nombreinteresado" type="text" class="form-control mb-3" placeholder="Nombre Interesado" rows="2" autocomplete="off" minlength="3" required>
                        </div> 
                         <div> 
                            <h6>Tipo influencia</h6> 
                            <!-- <input id="tipoinfluencia" type="text" class="form-control mb-3" placeholder="Tipo influencia" rows="2"> -->
                            <select id="tipoinfluencia" required>
                                <option value="">Selecciona una opción</option>
                                <option value="Alta">Alta</option>
                                <option value="Media">Media</option>
                                <option value="Baja">Baja</option>
                            </select> <p></p>
                        </div>
                        <div> 
                            <h6>Cargo</h6> 
                            <input id="cargo" type="text" class="form-control mb-3" placeholder="Cargo" rows="2">
                        </div>
                        <div> 
                            <h6>Rol Proyecto</h6> 
                            <input id="rolproyecto" type="text" class="form-control mb-3" placeholder="Rol Proyecto" rows="2">
                        </div>
                        <div> 
                            <h6>Equipo Proyecto</h6> 
                            <input id="equipoproyecto" type="text" class="form-control mb-3" placeholder="Equipo Proyecto" rows="2">
                        </div>
                        <div> 
                            <h6>Teléfono</h6> 
                            <input id="telefono" type="text" class="form-control mb-3" placeholder="Teléfono" rows="2">
                        </div>
                        <div> 
                            <h6>E-mail</h6> 
                            <input id="email" type="text" class="form-control mb-3" placeholder="E-mail" rows="2">
                        </div>
                        <div id="divauxcrearinteresado">
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        <button type="submit" class="btn btn-primary"
                                >Guardar
                        </button>
                    </div>
                </form>
            </div>
        </div>    
    </div>
    `
    document.getElementById('div-modal-2').innerHTML =
    ` 
    <div class="modal fade" id="modal-2" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true"> 
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Formulario Editar Interesado</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                  </button>
                </div>
                <form onsubmit="editarinteresado(); return false">
                    <div class="modal-body">
                        <div> 
                            <h6>Nombre Interesado</h6> 
                            <input id="nombreinteresado-2" type="text" class="form-control mb-3" autocomplete="off" minlength="3" required>
                        </div>
                        <div> 
                            <h6>Tipo influencia</h6> 
                            <!-- <input id="tipoinfluencia-2" class="form-control mb-3" rows="4" style="height:100%"></textarea> -->
                            <select id="tipoinfluencia-2" required>
                                <option value="">Selecciona una opción</option>
                                <option value="Alta">Alta</option>
                                <option value="Media">Media</option>
                                <option value="Baja">Baja</option>
                            </select> <p></p>
                        </div> 
                        <div> 
                            <h6>Cargo</h6> 
                            <input id="cargo-2" type="text" class="form-control mb-3">
                        </div>
                        <div> 
                            <h6>Rol Proyecto</h6> 
                            <input id="rolproyecto-2" type="text" class="form-control mb-3">
                        </div>
                        <div> 
                            <h6>Equipo Proyecto</h6> 
                            <input id="equipoproyecto-2" type="text" class="form-control mb-3">
                        </div>
                        <div> 
                            <h6>Teléfono</h6> 
                            <input id="telefono-2" type="text" class="form-control mb-3">
                        </div>
                        <div> 
                            <h6>E-mail</h6> 
                            <input id="email-2" type="text" class="form-control mb-3">
                        </div>
                        <div id="divauxeditarinteresado">

                        </div>
                        <input type="hidden" id="idinteresado">
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        <button type="submit" class="btn btn-primary"
                                >Editar
                        </button>
                    </div>
                </form>
            </div>
        </div>    
    </div>
    `
    document.getElementById('div-info').innerHTML = 
    `
    <div class="modal fade" id="modal-info" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Información Completa del Interesado</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                    </button>
                </div>
                <div class="modal-body">
                    <div> 
                        <h6>Rol Proyecto</h6> 
                        <p id="rolproyecto-3"></p>
                    </div>
                    <div> 
                        <h6>Equipo Proyecto</h6> 
                        <p id="equipoproyecto-3"></p>
                    </div>
                    <div> 
                        <h6>Teléfono</h6> 
                        <p id="telefono-3"></p>
                    </div>
                    <div> 
                        <h6>E-mail</h6> 
                        <p id="email-3"></p>
                    </div>
                    <div id="divproyecto"> 
                        <h6>Proyecto</h6> 
                    </div> 
                    
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"
                            style="background: #0A2269; border-color: #E6E6E6">Cerrar</button>
                </div>
            </div>
        </div>
    </div>
    `      
    buscandointeresado()
} 

const buscandointeresado = async () => {
    const option = 11
    const queryParams = `?option=${option}`
    try 
    {
        const ipserver = location.host
        const { data } = await axios.get(`http://`+ipserver+`/OntoPrototipoRepo/webresources/generic${queryParams}`)
        const resultDiv = document.getElementById('result')
        let stringHtml = '<div style="color: #0A2269; background: #E6E6E6; border-color: #E6E6E6" class="alert alert-primary" role="alert">SIN INTERESADOS</div>'
        if (data.length > 0) 
        {  
        const items = data.map(item =>  
        `
        <tr>
            <td style="text-align: left" data-placement="top" title="Nombre interesado">${item.nombre}</td>
            <td data-placement="top" title="Tipo Influencia">${item.influencia}</td>
            <td data-placement="top" title="Cargo">${item.cargo}</td>
                       
            <td>
                <div class="btn-group">
                    <button class="btn btn-info btn-sm rounded-0" type="button" 
                            style="background: #0A2269; border-color: #FFFFFF"
                            data-bs-toggle="modal" data-placement="right" title="Pulsa aquí para conocer toda la información de este interesado" 
                            data-original-title="Info" data-bs-target="#modal-info" onclick="mostrarinfointeresado('${item.idinteresado}','${item.rol}','${item.equipo}','${item.telefono}','${item.email}','${item.proyectos}')"><i class="bi bi-info-circle" style="background: #0A2269; color: #FFFFFF"></i>
                    </button>
                    <button class="btn btn-success btn-sm rounded-0" type="button" 
                            style="background: #0A2269; border-color: #FFFFFF"
                            data-bs-toggle="modal" data-placement="right" title="Editar" 
                            data-original-title="Edit" data-bs-target="#modal-2" onclick="mostrareditarinteresado('${item.idinteresado}','${item.nombre}','${item.influencia}','${item.cargo}','${item.rol}','${item.equipo}','${item.telefono}','${item.email}','${item.proyectos}')"><i class="bi bi-pencil-square" style="background: #0A2269; color: #FFFFFF"></i>
                    </button> 
                    <button class="btn btn-danger btn-sm rounded-0" type="button"
                            style="background: #0A2269; border-color: #FFFFFF"
                            data-bs-toggle="tooltip" data-placement="right" title="Eliminar" 
                            data-original-title="Delete" onclick="eliminarinteresado('${item.idinteresado}')"><i class="bi bi-trash" style="background: #0A2269; color: #FFFFFF"></i>
                    </button>
                </div>
            </td>
        </tr> 
        `
        ).join('')
        stringHtml =
        `
        <table class="table-editable table table-bordered table-responsive-md table-striped text-center">
            <thead>
                <tr>
                    <th class= "col-4" scope="col">Nombre Interesado</th>
                    <th class= "col-3" scope="col">Tipo influencia</th>
                    <th class= "col-3" scope="col">Cargo</th>
                    <th class= "col-2" scope="col">Acción</th> 
                </tr>
            </thead>
            <tbody>${items}</tbody>
        </table>
        `
        } 
        metodoauxiliarcrearinteresado()
        resultDiv.innerHTML = stringHtml
    }
    catch (err) 
    { 
        console.log(err)
    } 
}

const agregarinteresado = async () => {
    $('#modal-1').modal('hide')
    const option = 12
    const nombreinteresado = document.getElementById('nombreinteresado').value
    const tipoinfluencia = document.getElementById('tipoinfluencia').value
    const cargo = document.getElementById('cargo').value
    const rolproyecto = document.getElementById('rolproyecto').value
    const equipoproyecto = document.getElementById('equipoproyecto').value
    const telefono = document.getElementById('telefono').value
    const email = document.getElementById('email').value
    var otrosvalores = ""
    const id = ""
    var inputElements = document.getElementsByClassName('proyectosCheckbox');
    for(var i=0; inputElements[i]; ++i){
        if(inputElements[i].checked){
            otrosvalores += inputElements[i].value+":"+"S"
        }
        else
        {
            otrosvalores += inputElements[i].value+":"+"N"
        }
        if(i<(inputElements.length-1)){
            otrosvalores += ","
        }
    }
    
    const queryParams = `?option=${option}&atributo1=${nombreinteresado}&atributo2=${tipoinfluencia}&atributo3=${cargo}&atributo4=${rolproyecto}&atributo5=${equipoproyecto}&atributo6=${telefono}&atributo7=${id}&atributo8=${email}&superatributo=${otrosvalores}`
    try 
    {
        const ipserver = location.host
        const { data } = await axios.get(`http://`+ipserver+`/OntoPrototipoRepo/webresources/generic${queryParams}`)
        buscandointeresado()
    }
    catch (err) 
    { 
        console.log(err)
    }
    document.getElementById('nombreinteresado').value = ""
    document.getElementById('tipoinfluencia').value = ""
    document.getElementById('cargo').value = ""
    document.getElementById('rolproyecto').value = ""
    document.getElementById('equipoproyecto').value = ""
    document.getElementById('telefono').value = ""
    document.getElementById('email').value = ""
    var targetDiv = document.getElementById("div-alert");
    targetDiv.innerHTML = 
    `
    <div class="alert alert-success" id="success-alert" style="display: none">
        <strong>Interesado creado con éxito</strong>
    </div>
    `
    $("#success-alert").fadeIn(4000);
    $("#success-alert").fadeOut(2000);
}

const editarinteresado = async (aux) => {
    $('#modal-2').modal('hide')
    const option = 13
    const nombreinteresado = document.getElementById('nombreinteresado-2').value
    const tipoinfluencia = document.getElementById('tipoinfluencia-2').value
    const cargo = document.getElementById('cargo-2').value
    const rolproyecto = document.getElementById('rolproyecto-2').value
    const equipoproyecto = document.getElementById('equipoproyecto-2').value
    const telefono = document.getElementById('telefono-2').value
    const email = document.getElementById('email-2').value
    var otrosvalores = ""
    const id = document.getElementById('idinteresado').value
    
    var inputElements = document.getElementsByClassName('proyectosCheckbox2');
    for(var i=0; inputElements[i]; ++i){
        if(inputElements[i].checked){
            otrosvalores += inputElements[i].value+":"+"S"
        }
        else
        {
            otrosvalores += inputElements[i].value+":"+"N"
        }
        if(i<(inputElements.length-1)){
            otrosvalores += ","
        }
    }
    
    const queryParams = `?option=${option}&atributo1=${nombreinteresado}&atributo2=${tipoinfluencia}&atributo3=${cargo}&atributo4=${rolproyecto}&atributo5=${equipoproyecto}&atributo6=${telefono}&atributo7=${id}&atributo8=${email}&superatributo=${otrosvalores}`
    try 
    {
        const ipserver = location.host
        const { data } = await axios.get(`http://`+ipserver+`/OntoPrototipoRepo/webresources/generic${queryParams}`)
        buscandointeresado()
    }
    catch (err) 
    { 
        console.log(err)
    }
    var targetDiv = document.getElementById("div-alert");
    targetDiv.innerHTML = 
    `
    <div class="alert alert-success" id="success-alert" style="display: none">
        <strong>Interesado editado con éxito</strong>
    </div>
    `
    $("#success-alert").fadeIn(4000);
    $("#success-alert").fadeOut(2000);
}

const mostrareditarinteresado = async(aux1,aux2,aux3,aux4,aux5,aux6,aux7,aux8,proyectos) => {
    document.getElementById('nombreinteresado-2').value = aux2
    document.getElementById('tipoinfluencia-2').value = aux3
    document.getElementById('cargo-2').value = aux4
    document.getElementById('rolproyecto-2').value =aux5
    document.getElementById('equipoproyecto-2').value = aux6
    document.getElementById('telefono-2').value = aux7
    document.getElementById('email-2').value = aux8
    document.getElementById('idinteresado').value = aux1
    metodoauxiliareditarinteresado(aux1,proyectos)  
}

const eliminarinteresado = async(aux) => {
    if(confirm('¿Está seguro de borrar este interesado?'))
    {
        const option = 14
        const id = aux
        const queryParams = `?option=${option}&atributo7=${id}`
        try 
        {
            const ipserver = location.host
            const { data } = await axios.get(`http://`+ipserver+`/OntoPrototipoRepo/webresources/generic${queryParams}`)
            buscandointeresado()
        }
        catch (err) 
        { 
            console.log(err)
        }
        var targetDiv = document.getElementById("div-alert");
        targetDiv.innerHTML = 
        `
        <div class="alert alert-success" id="success-alert" style="display: none">
            <strong>Interesado eliminado con éxito</strong>
        </div>
        `
        $("#success-alert").fadeIn(4000);
        $("#success-alert").fadeOut(2000);
    }
}

const mostrarinfointeresado = async(id,aux4,aux5,aux6,aux8,proyectos) => {
    document.getElementById('rolproyecto-3').innerHTML = aux4
    document.getElementById('equipoproyecto-3').innerHTML = aux5
    document.getElementById('telefono-3').innerHTML = aux6
    document.getElementById('email-3').innerHTML = aux8
    let divproyecto = document.getElementById('divproyecto')
    let h6= document.createElement("h6")
    let textoH6 = document.createTextNode("Proyecto")
    divproyecto.innerHTML=""
    divproyecto.setAttribute("class","row")
    h6.appendChild(textoH6)
    divproyecto.append(h6)
    var proyecto = proyectos.split(',,');
    for(let i=0;i<proyecto.length;i++)
    {
        var proy= (proyecto[i].split(":"))[1]
        let parragrafo1 = document.createElement("div")
        let nombreproy= document.createTextNode((i+1)+") "+proy)
        parragrafo1.setAttribute("class","col-md-12")
        parragrafo1.append(nombreproy)
        divproyecto.append(parragrafo1)
    }
    divproyecto.append(document.createElement("p"))
}

const metodoauxiliarcrearinteresado = async() => {
    const option = 15
    const queryParams = `?option=${option}`
    try 
    {
        const ipserver = location.host
        const { data } = await axios.get(`http://`+ipserver+`/OntoPrototipoRepo/webresources/generic${queryParams}`)
        const proyectos = data.split(',,')
        let divauxcrearinteresado = document.getElementById('divauxcrearinteresado')
        divauxcrearinteresado.innerHTML=""
        divauxcrearinteresado.setAttribute("class","row")
        let divproyecto = document.createElement("div")
        let h6= document.createElement("h6")
        let textoH6 = document.createTextNode("Proyectos")
        h6.appendChild(textoH6)
        divproyecto.setAttribute("class","row")
        divproyecto.append(h6)
        if (proyectos[0]!=="Proyecto:SIN PROYECTOS") {
            for (let i = 0; i < proyectos.length; i++)
            {
                let div = document.createElement("div")
                let input = document.createElement("input")
                let label = document.createElement("label")
                let aux = proyectos[i].split("&&")
                let nombreproyecto = (aux[0].split(":"))[1]
                let idproyecto = (aux[1].split(":"))[1]
                div.setAttribute("class", "col-md-6")
                input.setAttribute("type", "checkbox")
                input.setAttribute("value", idproyecto)
                input.setAttribute("class", "proyectosCheckbox")
                label.append(input)
                label.append(" " + nombreproyecto)
                div.append(label)
                divproyecto.append(div)
            }
        } 
        else{
            let div = document.createElement("div")
            div.setAttribute("class", "col-md-12")
            div.append("NO HAY PROYECTOS")
            divproyecto.append(div)
        }
        divauxcrearinteresado.append(divproyecto)
        divauxcrearinteresado.append(document.createElement("p"))
    }
    catch (err) 
    { 
        console.log(err)
    } 
}

const metodoauxiliareditarinteresado = async(aux1,proye) => {
    const option = 15
    const queryParams = `?option=${option}`
    try 
    {
        const ipserver = location.host
        const { data } = await axios.get(`http://`+ipserver+`/OntoPrototipoRepo/webresources/generic${queryParams}`)
        const proyectos = data.split(',,')
        const proyecaux = proye.split(',,')
        var  proyecaux2 = ""
        let divauxeditarinteresado = document.getElementById('divauxeditarinteresado')
        divauxeditarinteresado.innerHTML=""
        divauxeditarinteresado.setAttribute("class","row")
        let divproyecto = document.createElement("div")
        let h6= document.createElement("h6")
        let textoH6 = document.createTextNode("Proyectos")
        h6.appendChild(textoH6)
        divproyecto.setAttribute("class","row")
        divproyecto.append(h6)
        if (proyectos[0]!=="Proyecto:SIN PROYECTOS") {
            for (let i = 0; i < proyectos.length; i++)
            {   
                let div = document.createElement("div")
                let input = document.createElement("input")
                let label = document.createElement("label")
                let aux = proyectos[i].split("&&")
                let nombreProyecto = (aux[0].split(":"))[1]
                let idProyecto = (aux[1].split(":"))[1]
                div.setAttribute("class", "col-md-6")
                input.setAttribute("type", "checkbox")
                input.setAttribute("value", idProyecto)
                input.setAttribute("class", "proyectosCheckbox2")
                for (let j = 0; j < proyecaux.length; j++) {
                    proyecaux2 = proyecaux[j].split('&&')
                    proyecaux2 = proyecaux2[0].split(':')
                    proyecaux2 = proyecaux2[1]
                    if (proyecaux2 === nombreProyecto) {
                        input.setAttribute("checked", true)
                    }
                }
                label.append(input)
                label.append(" " + nombreProyecto)
                div.append(label)
                divproyecto.append(div)
            }
        }
        else{
            let div = document.createElement("div")
            div.setAttribute("class", "col-md-12")
            div.append("NO HAY PROYECTOS")
            divproyecto.append(div)
        }
        divauxeditarinteresado.append(divproyecto)
        divauxeditarinteresado.append(document.createElement("p"))
    }
    catch (err) 
    { 
        console.log(err)
    }
}
