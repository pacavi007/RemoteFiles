
const consultarentregable = async () => {
    document.getElementById('linkproyecto').setAttribute("class","navbar-brand")
    document.getElementById('linkproyecto').setAttribute("style","color: #0A2269")
    document.getElementById('linkinteresado').setAttribute("class","navbar-brand")
    document.getElementById('linkinteresado').setAttribute("style","color: #0A2269")
    document.getElementById('linkentregable').setAttribute("class","nav-link navbar-brand active")
    document.getElementById('linkentregable').setAttribute("style","background: #0A2269; color: #E6E6E6")
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
        >Nuevo Entregable
    </button> 
    <p></p> 
    `
    document.getElementById('div-modal').innerHTML =
    ` 
    <div class="modal fade" id="modal-1" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true"> 
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Formulario Crear Entregable</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                  </button>
                </div>
                <form onsubmit="agregarentregable(); return false">
                    <div class="modal-body">
                        <div> 
                            <h6>Nombre Entregable</h6> 
                            <input id="nombreentregable" type="text" class="form-control mb-3" placeholder="Nombre Entregable" rows="2" autocomplete="off" minlength="3" required>
                        </div> 
                         <div> 
                            <h6>Tipo Entregable</h6> 
                            <input id="tipoentregable" type="text" class="form-control mb-3" placeholder="Tipo Entregable" rows="2">
                        </div>
   
  
        

                        <div class="row">              
                            <div class="col-md-4"> 
                                <h6>Versión Entregable</h6> 
                                <input id="versionent" type="text" class="form-control mb-3" placeholder="Versión Entregable" rows="2">
                            </div>
                            <div class="col-md-4"> 
                                <h6>Fecha Entrega</h6> 
                                <input id="fechaentrega" type="date" class="form-control mb-3" placeholder="Fecha Entrega" rows="2">
                            </div>
                            <div class="col-md-4"> 
                                <h6>Estado</h6> 
                                <input id="estadoent" type="text" class="form-control mb-3" placeholder="Estado" rows="2">
                            </div>
                        </div>
                        <div id="divauxcrearentregable">

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
                  <h5 class="modal-title" id="exampleModalLabel">Formulario Editar Entregable</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                  </button>
                </div>
                <form onsubmit="editarentregable(); return false">
                    <div class="modal-body">
                        <div> 
                            <h6>Nombre Entregable</h6> 
                            <input id="nombreentregable-2" type="text" class="form-control mb-3" autocomplete="off" minlength="3" required>
                        </div>
                        <div> 
                            <h6>Tipo Entregable</h6> 
                            <input id="tipoentregable-2" class="form-control mb-3" rows="4" style="height:100%"></textarea>
                        </div> 
                        <div class="row">              
                            <div class="col-md-4">  
                                <h6>Versión Entregable</h6> 
                                <input id="versionent-2" type="text" class="form-control mb-3">
                            </div>
                            <div class="col-md-4">
                                <h6>Fecha Entrega</h6> 
                                <input id="fechaentrega-2" type="date" class="form-control mb-3">
                            </div>
                            <div class="col-md-4">
                                <h6>Estado</h6> 
                                <input id="estadoent-2" type="text" class="form-control mb-3">
                            </div>
                        </div>
                        <div id="divauxeditarentregable">

                        </div>
                        <input type="hidden" id="identregable">
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
                    <h5 class="modal-title" id="exampleModalLabel">Información Completa del Entregable</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                    </button>
                </div>
                <div class="modal-body">
                    <div> 
                        <h6>Versión Entregable</h6> 
                        <p id="versionent-3"></p>
                    </div>
                    <div> 
                        <h6>Fecha Entrega</h6> 
                        <p id="fechaent-3"></p>
                    </div>
                    <div> 
                        <h6>Estado</h6> 
                        <p id="estado-3"></p>
                    </div>
                    <div id="divinteresado"> 
                        <h6>Interesado</h6> 
                    </div>
                    <div id="divproceso"> 
                        <h6>Proceso</h6> 
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
    document.getElementById('div-archivo').innerHTML =
    `
    <div class="modal fade" id="modal-archivo" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true"> 
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Formulario Cargar Entregable</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                  </button>
                </div>
                <div class="modal-body">
                        
                         <div class="row">
                            <div id="url" type="hidden"> </div>
                            <div class="col-md-12">
                                    <input id="fileButton" type="file" class="form-control" onchange="resetprogreso()"/>

                            </div>
                            <!-- <div class="col-md-1" style="margin-top: 5px; margin-left: -20px">
                                <div>    
                                    <button style="background: #0A2269; color: #FFFFFF; border-color: #FFFFFF" onclick="cargararchivo()">
                                        <i class="bi bi-upload"></i>
                                    </button>
                                </div>
                            </div> -->
                             
                        </div> 
                    <input type="hidden" id="idcarga">
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                    <button type="submit" class="btn btn-primary" 
                            style="background: #0A2269; border-color: #FFFFFF" onclick="cargararchivo()"
                            >Guardar Entregable
                    </button>
                </div>
            </div>
        </div>    
    </div>
    `
    buscandoentregable()
} 

const buscandoentregable = async () => {
    const option = 21
    const queryParams = `?option=${option}`
    try 
    {
        const ipserver = location.host
        const { data } = await axios.get(`http://`+ipserver+`/OntoPrototipoRepo/webresources/generic${queryParams}`)
        const resultDiv = document.getElementById('result')
        let stringHtml = '<div style="color: #0A2269; background: #E6E6E6; border-color: #E6E6E6" class="alert alert-primary" role="alert">SIN ENTREGABLES</div>'
        if (data.length > 0) 
        {  
        const items = data.map(item =>  
        `
        <tr>
            <td style="text-align: left" data-placement="top" title="Nombre Entregable">${item.nombre}</td>
            <td data-placement="top" title="Tipo Entregable">${item.tipo}</td>
                       
            <td>
                <div class="btn-group">
                    <button class="btn btn-sm rounded-0" type="button" id="carga${item.identregable}"
                            style="background: #0A2269; border-color: #FFFFFF" onclick="mostrarinfocarga('${item.identregable}')"
                            data-bs-toggle="modal" data-placement="right" title="Pulsa aquí para asignar un archivo a este entregable"
                            data-original-title="Archivo" data-bs-target="#modal-archivo" onclick=""
                            ><i class="bi bi-file-earmark-text" style="background: #0A2269; color: #FFFFFF"></i>
                    </button>
                    <button class="btn btn-sm rounded-0" type="button" id="descarga${item.identregable}"
                            style="background: #0A2269; border-color: #FFFFFF" onclick="iniciardescarga('${item.url}')"
                            data-placement="right" title="Pulsa aquí para descargar este entregable"
                            ><i class="bi bi-download"  style="background: #0A2269; color: #FFFFFF"></i>
                    </button>
                    
                    <button class="btn btn-info btn-sm rounded-0" type="button" 
                            style="background: #0A2269; border-color: #FFFFFF"
                            data-bs-toggle="modal" data-placement="right" title="Pulsa aquí para conocer toda la información de este entregable" 
                            data-original-title="Info" data-bs-target="#modal-info" onclick="mostrarinfoentregable('${item.identregable}','${item.estado}','${item.version}','${item.fechaent}','${item.url}','${item.interesados}','${item.procesos}','${item.proyectos}')"><i class="bi bi-info-circle" style="background: #0A2269; color: #FFFFFF"></i>
                    </button>
                    <button class="btn btn-success btn-sm rounded-0" type="button" 
                            style="background: #0A2269; border-color: #FFFFFF"
                            data-bs-toggle="modal" data-placement="right" title="Editar" 
                            data-original-title="Edit" data-bs-target="#modal-2" onclick="mostrareditarentregable('${item.identregable}','${item.nombre}','${item.tipo}','${item.estado}','${item.version}','${item.fechaent}','${item.url}','${item.interesados}','${item.procesos}','${item.proyectos}')"><i class="bi bi-pencil-square" style="background: #0A2269; color: #FFFFFF"></i>
                    </button> 
                    <button class="btn btn-danger btn-sm rounded-0" type="button"
                            style="background: #0A2269; border-color: #FFFFFF"
                            data-bs-toggle="tooltip" data-placement="right" title="Eliminar" 
                            data-original-title="Delete" onclick="eliminarentregable('${item.identregable}')"><i class="bi bi-trash" style="background: #0A2269; color: #FFFFFF"></i>
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
                    <th class= "col-5" scope="col">Nombre Entregable</th>
                    <th class= "col-5" scope="col">Tipo Entregable</th>
                    <th class= "col-2" scope="col">Acción</th> 
                </tr>
            </thead>
            <tbody>${items}</tbody>
        </table>
        `
        } 
        metodoauxiliarcrearentregable()
        resultDiv.innerHTML = stringHtml
    }
    catch (err) 
    { 
        console.log(err)
    } 
}

const agregarentregable = async () => {
    $('#modal-1').modal('hide')
    const option = 22
    const nombreentregable = document.getElementById('nombreentregable').value
    const tipoentregable = document.getElementById('tipoentregable').value
    const versionent = document.getElementById('versionent').value
    const fechaentrega = document.getElementById('fechaentrega').value
    const estadoent = document.getElementById('estadoent').value
    //const url = document.getElementById('estadoent').value
    const url = "url"
    const proceso = document.getElementById('proceso').value
    var otrosvalores = ""
    const id = ""
    
    var inputElements = document.getElementsByClassName('interesadosCheckbox');
    for (var i = 0; inputElements[i]; ++i) {
        /*if(inputElements[i].checked){
         otrosvalores += inputElements[i].value
         if((i<=(inputElements.length-2))&&(inputElements[i+1].checked))
         {
         //console.log("Entro interesados: ",inputElements[i+1].value)
         otrosvalores += ","

         }
         }*/
        if (inputElements[i].checked) {
            otrosvalores += inputElements[i].value + ":" + "S"
        } else
        {
            otrosvalores += inputElements[i].value + ":" + "N"
        }
        if (i < (inputElements.length - 1)) {
            otrosvalores += ","
        }
    }
    //otrosvalores += ";"
    otrosvalores += ";"+proceso+ ":" + "S"+";"
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
    
    const queryParams = `?option=${option}&atributo1=${nombreentregable}&atributo2=${tipoentregable}&atributo3=${estadoent}&atributo4=${versionent}&atributo5=${fechaentrega}&atributo6=${estadoent}&atributo7=${id}&superatributo=${otrosvalores}`
    try 
    {
        const ipserver = location.host
        const { data } = await axios.get(`http://`+ipserver+`/OntoPrototipoRepo/webresources/generic${queryParams}`)
        buscandoentregable()
    }
    catch (err) 
    { 
        console.log(err)
    }
    document.getElementById('nombreentregable').value = ""
    document.getElementById('tipoentregable').value = ""
    document.getElementById('versionent').value = ""
    document.getElementById('fechaentrega').value = ""
    document.getElementById('estadoent').value = ""
    //document.getElementById('url').value = ""
    document.getElementById('proceso').value = ""


    var targetDiv = document.getElementById("div-alert");
    targetDiv.innerHTML = 
    `
    <div class="alert alert-success" id="success-alert" style="display: none; width: 250px">
        <strong>Entregable creado con éxito</strong>
    </div>
    `
    $("#success-alert").fadeIn(4000);
    $("#success-alert").fadeOut(2000);
}

const editarentregable = async (aux) => {
    $('#modal-2').modal('hide')
    const option = 23
    const nombreentregable = document.getElementById('nombreentregable-2').value
    const tipoentregable = document.getElementById('tipoentregable-2').value
    const versionent = document.getElementById('versionent-2').value
    const fechaentrega = document.getElementById('fechaentrega-2').value
    const estadoent = document.getElementById('estadoent-2').value
    //const url = document.getElementById('url-2').value
    const url = "url"
    const proceso = document.getElementById('proceso-2').value
    var otrosvalores = ""
    const id = document.getElementById('identregable').value
    
    var inputElements = document.getElementsByClassName('interesadosCheckbox2');
    for (var i = 0; inputElements[i]; ++i) {
        if (inputElements[i].checked) {
            otrosvalores += inputElements[i].value + ":" + "S"
        } else
        {
            otrosvalores += inputElements[i].value + ":" + "N"
        }
        if (i < (inputElements.length - 1)) {
            otrosvalores += ","
        }
    }
    otrosvalores += ";"
    //otrosvalores += ";"+proceso+ ":" + "S"+";"
    var inputElements = document.getElementsByClassName('procesosOption');
    for(var i=0; inputElements[i]; ++i){
        if(inputElements[i].selected){
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
    otrosvalores += ";"
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
    console.log(" ",otrosvalores)
    const queryParams = `?option=${option}&atributo1=${nombreentregable}&atributo2=${tipoentregable}&atributo3=${estadoent}&atributo4=${versionent}&atributo5=${fechaentrega}&atributo6=${estadoent}&atributo7=${id}&superatributo=${otrosvalores}`
    try 
    {
        const ipserver = location.host
        const { data } = await axios.get(`http://`+ipserver+`/OntoPrototipoRepo/webresources/generic${queryParams}`)
        buscandoentregable()
    }
    catch (err) 
    { 
        console.log(err)
    }
    var targetDiv = document.getElementById("div-alert");
    targetDiv.innerHTML = 
    `
    <div class="alert alert-success" id="success-alert" style="display: none; width: 270px">
        <strong>Entregable editado con éxito</strong>
    </div>
    `
    $("#success-alert").fadeIn(4000);
    $("#success-alert").fadeOut(2000);
}

const mostrareditarentregable = async(id,nombre,tipo,estado,version,fechaent,url,interesados,procesos,proyectos) => {
    document.getElementById('nombreentregable-2').value = nombre
    document.getElementById('tipoentregable-2').value = tipo
    document.getElementById('versionent-2').value =version
    document.getElementById('fechaentrega-2').value = fechaent
    document.getElementById('estadoent-2').value = estado
    //document.getElementById('proceso-2').value = procesos
    //document.getElementById('url-2').value = aux8
    document.getElementById('identregable').value = id
    metodoauxiliareditarentregable(id,interesados,procesos,proyectos)  
}

const eliminarentregable = async(aux) => {
    if(confirm('¿Está seguro de borrar este entregable?'))
    {
        const option = 14
        const id = aux
        const queryParams = `?option=${option}&atributo7=${id}`
        try 
        {
            const ipserver = location.host
            const { data } = await axios.get(`http://`+ipserver+`/OntoPrototipoRepo/webresources/generic${queryParams}`)
            buscandoentregable()
        }
        catch (err) 
        { 
            console.log(err)
        }
        var targetDiv = document.getElementById("div-alert");
        targetDiv.innerHTML = 
        `
        <div class="alert alert-success" id="success-alert" style="display: none; width: 270px">
            <strong>Entregable eliminado con éxito</strong>
        </div>
        `
        $("#success-alert").fadeIn(4000);
        $("#success-alert").fadeOut(2000);
    }
}

const mostrarinfoentregable = async(id,estado,version,fecha,url,interesados,procesos,proyectos) => {
    document.getElementById('versionent-3').innerHTML = version
    document.getElementById('fechaent-3').innerHTML = fecha
    document.getElementById('estado-3').innerHTML = estado
    
    let divinteresado = document.getElementById('divinteresado')
    let h6= document.createElement("h6")
    let textoH6 = document.createTextNode("Interesado")
    divinteresado.innerHTML=""
    divinteresado.setAttribute("class","row")
    h6.appendChild(textoH6)
    divinteresado.append(h6)
    var interesado = interesados.split(',');
    for(let i=0;i<interesado.length;i++)
    {
        var auxi= interesado[i].split('&&')
        var Nombre= auxi[0]
        var Telefono= auxi[1]
        let parragrafo1 = document.createElement("div")
        let parragrafo2 = document.createElement("div")
        let nombre= document.createTextNode((i+1)+") "+Nombre)
        let telefono= document.createTextNode(Telefono)
        parragrafo1.setAttribute("class","col-md-4")
        parragrafo2.setAttribute("class","col-md-6")
        parragrafo1.append(nombre)
        parragrafo2.append(telefono)
        divinteresado.append(parragrafo1)
        divinteresado.append(parragrafo2)
        let br = document.createElement("div")
        br.setAttribute("class","col-md-2")
        divinteresado.append(br)
    }
    divinteresado.append(document.createElement("p"))
    
    let divproceso = document.getElementById('divproceso')
    h6= document.createElement("h6")
    textoH6 = document.createTextNode("Proceso")
    divproceso.innerHTML=""
    divproceso.setAttribute("class","row")
    h6.appendChild(textoH6)
    divproceso.append(h6)
    var nombreproceso = procesos.split(',')
    for(let i=0;i<nombreproceso.length;i++)
    {
        var auxi= nombreproceso[i].split(':')
        var NombreProceso= auxi[1]
        let parragrafo1 = document.createElement("div")
        let nompro= document.createTextNode((i+1)+") "+NombreProceso)
        parragrafo1.setAttribute("class","col-md-12")
        parragrafo1.append(nompro)
        divproceso.append(parragrafo1)
    }
    divproceso.append(document.createElement("p"))
    
    let divproyecto = document.getElementById('divproyecto')
    h6= document.createElement("h6")
    textoH6 = document.createTextNode("Proyecto")
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

const metodoauxiliarcrearentregable = async() => {
    const option = 25
    const queryParams = `?option=${option}`
    try 
    {
        const ipserver = location.host
        const { data } = await axios.get(`http://`+ipserver+`/OntoPrototipoRepo/webresources/generic${queryParams}`)
        const info = data.split(';')
        
        const interesados = info[0]
        const procesos = info[1]
        const proyectos = info[2]
        
        const interesado = interesados.split(',')
        const proceso = procesos.split(',')
        const proyecto = proyectos.split(',,')
        
        let divauxcrearentregable = document.getElementById('divauxcrearentregable')
        divauxcrearentregable.innerHTML=""
        //divauxcrearentregable.setAttribute("class","row")
        let divinteresados = document.createElement("div")
        let h6= document.createElement("h6")
        let textoH6 = document.createTextNode("Interesados")
        h6.appendChild(textoH6)
        divinteresados.setAttribute("class","row")
        divinteresados.append(h6)
        if (interesado[0]!=="Nombre:SIN INTERESADOS") {
            for (let i = 0; i < interesado.length; i++)
            {
                let div = document.createElement("div")
                let input = document.createElement("input")
                let label = document.createElement("label")
                let aux = interesado[i].split("&&")
                let nombreproyecto = (aux[0].split(":"))[1]
                let idproyecto = (aux[1].split(":"))[1]
                div.setAttribute("class", "col-md-4")
                input.setAttribute("type", "checkbox")
                input.setAttribute("value", idproyecto)
                input.setAttribute("class", "interesadosCheckbox")
                label.append(input)
                label.append(" " + nombreproyecto)
                div.append(label)
                divinteresados.append(div)
            }
        } 
        else{
            let div = document.createElement("div")
            div.setAttribute("class", "col-md-12")
            div.append("NO HAY INTERESADOS")
            divinteresados.append(div)
        }
        divauxcrearentregable.append(divinteresados)
        divauxcrearentregable.append(document.createElement("p"))
        
        let divprocesos = document.createElement("div")
        h6= document.createElement("h6")
        textoH6 = document.createTextNode("Procesos")
        h6.appendChild(textoH6)
        divprocesos.setAttribute("class","row")
        divprocesos.append(h6)
        if (proceso[0]!=="Proceso:SIN PROCESOS") {
            let div    = document.createElement("div")
            let select = document.createElement("select")
            let option = document.createElement("option")
            select.setAttribute("id","proceso")
            select.setAttribute("required",true)
            select.setAttribute("class","col-6")
            option.setAttribute("value","")
            option.setAttribute("selected",true)
            option.append("Selecciona una opción")
            select.append(option)
            for (let i = 0; i < proceso.length; i++)
            {
                
                let option1 = document.createElement("option")
                //let label = document.createElement("label")
                let aux = proceso[i].split("&&")
                let nombreproyecto = (aux[0].split(":"))[1]
                let idproyecto = (aux[1].split(":"))[1]
                //div.setAttribute("class", "col-md-6")
                option1.setAttribute("value",idproyecto)
                option1.append(nombreproyecto)
                
                select.append(option1)
                //label.append(" " + nombreproceso)
                //div.append(label)
                //divprocesos.append(div)
            }
            div.append(select)
            divprocesos.append(div)
        } 
        else{
            let div = document.createElement("div")
            div.setAttribute("class", "col-md-12")
            div.append("NO HAY PROCESOS")
            divprocesos.append(div)
        }
        divauxcrearentregable.append(divprocesos)
        divauxcrearentregable.append(document.createElement("p"))
        
        let divproyecto = document.createElement("div")
        h6= document.createElement("h6")
        textoH6 = document.createTextNode("Proyectos")
        h6.appendChild(textoH6)
        divproyecto.setAttribute("class","row")
        divproyecto.append(h6)
        if (proyecto[0]!=="Proyecto:SIN PROYECTOS") {
            for (let i = 0; i < proyecto.length; i++)
            {
                let div = document.createElement("div")
                let input = document.createElement("input")
                let label = document.createElement("label")
                let aux = proyecto[i].split("&&")
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
        divauxcrearentregable.append(divproyecto)
        divauxcrearentregable.append(document.createElement("p"))
    }
    catch (err) 
    { 
        console.log(err)
    } 
}

const metodoauxiliareditarentregable = async(aux1,inte,proce,proye) => {
    const option = 25
    const queryParams = `?option=${option}`
    try 
    {
        const ipserver = location.host
        const { data } = await axios.get(`http://`+ipserver+`/OntoPrototipoRepo/webresources/generic${queryParams}`)
        const info = data.split(';')
        
        const interesados = info[0]
        const procesos = info[1]
        const proyectos = info[2]
        
        const interesado = interesados.split(',')
        const proceso = procesos.split(',')
        const proyecto = proyectos.split(',,')

        var inteaux1 = inte.split(',') 
        var inteaux2 = "" 
        var proceaux1  = proce.split(',')
        var proceaux2  = ""
        var proyeaux1 = proye.split(',,')
        var proyeaux2 = ""
        
        let divauxeditarentregable = document.getElementById('divauxeditarentregable')
        divauxeditarentregable.innerHTML=""
        divauxeditarentregable.setAttribute("class","row")
        
        let divinteresado = document.createElement("div")
        let h6= document.createElement("h6")
        let textoH6 = document.createTextNode("Interesados")
        h6.appendChild(textoH6)
        divinteresado.setAttribute("class","row")
        divinteresado.append(h6)
        if (interesado[0]!=="Nombre:SIN INTERESADOS") {
            for (let i = 0; i < interesado.length; i++)
            {   
                let div = document.createElement("div")
                let input = document.createElement("input")
                let label = document.createElement("label")
                let aux = interesado[i].split("&&")
                let nombreinteresado = (aux[0].split(":"))[1]
                let idProyecto = (aux[1].split(":"))[1]
                div.setAttribute("class", "col-md-4")
                input.setAttribute("type", "checkbox")
                input.setAttribute("value", idProyecto)
                input.setAttribute("class", "interesadosCheckbox2")
                for (let j = 0; j < inteaux1.length; j++) {
                    inteaux2 = inteaux1[j].split('&&')
                    inteaux2 = inteaux2[0].split(':')
                    inteaux2 = inteaux2[1]
                    inteaux2 = inteaux2.split(' ')
                    inteaux2 = inteaux2[1] + " " + inteaux2[2]
                    if (inteaux2 === nombreinteresado) {
                        input.setAttribute("checked", true)
                    }
                }
                label.append(input)
                label.append(" " + nombreinteresado)
                div.append(label)
                divinteresado.append(div)
            }
        }
        else{
            let div = document.createElement("div")
            div.setAttribute("class", "col-md-12")
            div.append("NO HAY INTERESADOS")
            divinteresado.append(div)
        }
        divauxeditarentregable.append(divinteresado)
        divauxeditarentregable.append(document.createElement("p"))
        
        let divprocesos = document.createElement("div")
        h6= document.createElement("h6")
        textoH6 = document.createTextNode("Procesos")
        h6.appendChild(textoH6)
        divprocesos.setAttribute("class","row")
        divprocesos.append(h6)
        if (proceso[0]!=="Proceso:SIN PROCESOS") {
            let div    = document.createElement("div")
            let select = document.createElement("select")
            let option = document.createElement("option")
            select.setAttribute("id","proceso-2")
            select.setAttribute("required",true)
            select.setAttribute("class","col-6")
            option.setAttribute("value","")
            //option.setAttribute("class", "procesosOption")
            //option.setAttribute("selected",true)
            option.append("Selecciona una opción")
            select.append(option)
            //console.log("proc ",proceaux1)
            proceaux1 = (proceaux1[0].split(":"))[1]
            
            //console.log("proc ",proceaux1)
            for (let i = 0; i < proceso.length; i++)
            {
                
                let option1 = document.createElement("option")
                //let label = document.createElement("label")
                let aux = proceso[i].split("&&")
                let nombreproceso = (aux[0].split(":"))[1]
                let idproceso = (aux[1].split(":"))[1]
                //div.setAttribute("class", "col-md-6")
                option1.setAttribute("value",idproceso)
                option1.setAttribute("class", "procesosOption")
                option1.append(nombreproceso)
                
                if (proceaux1===nombreproceso) {
                    option1.setAttribute("selected",true)
                }
                select.append(option1)
                //label.append(" " + nombreproceso)
                //div.append(label)
                //divprocesos.append(div)
            }
            div.append(select)
            divprocesos.append(div)
        } 
        else{
            let div = document.createElement("div")
            div.setAttribute("class", "col-md-12")
            div.append("NO HAY PROCESOS")
            divprocesos.append(div)
        }
        divauxeditarentregable.append(divprocesos)
        divauxeditarentregable.append(document.createElement("p"))
        
        let divproyecto = document.createElement("div")
        h6= document.createElement("h6")
        textoH6 = document.createTextNode("Proyectos")
        h6.appendChild(textoH6)
        divproyecto.setAttribute("class","row")
        divproyecto.append(h6)
        if (proyecto[0]!=="Proyecto:SIN PROYECTOS") {
            for (let i = 0; i < proyecto.length; i++)
            {
                let div = document.createElement("div")
                let input = document.createElement("input")
                let label = document.createElement("label")
                let aux = proyecto[i].split("&&")
                let nombreproyecto = (aux[0].split(":"))[1]
                let idproyecto = (aux[1].split(":"))[1]
                div.setAttribute("class", "col-md-6")
                input.setAttribute("type", "checkbox")
                input.setAttribute("value", idproyecto)
                input.setAttribute("class", "proyectosCheckbox2")
                for (let j = 0; j < proyeaux1.length; j++) {
                    proyeaux2 = proyeaux1[j].split('&&')
                    proyeaux2 = proyeaux2[0].split(':')
                    proyeaux2 = proyeaux2[1]
                    if (proyeaux2 === nombreproyecto) {
                        input.setAttribute("checked", true)
                    }
                }
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
        divauxeditarentregable.append(divproyecto)
        divauxeditarentregable.append(document.createElement("p"))
    }
    catch (err) 
    { 
        console.log(err)
    }
}

const mostrarinfocarga = async(idcarga) => {
    document.getElementById('idcarga').value = idcarga
    
}

/*const iniciardescarga = async(link) =>{
    console.log("en iniciadno descarga",link)
    //link = "https://firebasestorage.googleapis.com/v0/b/ontoblogp.appspot.com/o/Recursos%2Fcrud-interesado.js?alt=media&token=b866d65b-9024-4c00-8335-37e8db042fe7"
    if(link.length>0){
    window.open(link)
    }
    else
    {
        alert('¡No existe archivo asociado a este entregable!')
    }

}*/
    
      