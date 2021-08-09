
const consultarproyecto = async () => {  
    const option = 1
    //const link = document.getElementById('linkinteresado')
    document.getElementById('linkproyecto').setAttribute("class","nav-link navbar-brand active")
    document.getElementById('linkproyecto').setAttribute("style","background: #0A2269; color: #E6E6E6")
    document.getElementById('linkinteresado').setAttribute("class","navbar-brand")
    document.getElementById('linkinteresado').setAttribute("style","color: #0A2269")
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
        >Nuevo Proyecto
    </button> 
    <p></p> 
    `
    document.getElementById('div-modal').innerHTML =
    ` 
    <div class="modal fade" id="modal-1" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true"> 
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Formulario Crear Proyecto</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                  </button>
                </div>
                <form onsubmit="agregarproyecto(); return false">
                    <div class="modal-body">
                        <div> 
                            <h6>Título</h6>  
                            <input id="titulo" type="text" class="form-control mb-3" placeholder="Título" rows="2" autocomplete="off" minlength="3" required>
                        </div> 
                        <div> 
                            <h6>Objetivo</h6> 
                            <textarea id="objetivo" class="form-control mb-3" placeholder="Objetivo" rows="4" style="height:100%"></textarea>
                        </div> 
                        <div>
                            <h6>Descripción</h6>
                            <textarea id="descripcion" class="form-control mb-3" placeholder="Descripción" rows="4" style="height:100%"></textarea>
                        </div>
                    <div class="row">
                        <div class="col-md-4">
                            <h6>Presupuesto</h6> 
                            <input id="presupuesto" type="text" class="form-control mb-3" placeholder="Presupuesto">
                        </div>
                        <div class="col-md-4">
                            <h6>Fecha Inicio</h6>
                            <input id="fechainicio" type="date" class="form-control mb-3" placeholder="Fecha Inicio"> 
                        </div> 
                        <div class="col-md-4"> 
                            <h6>Fecha Fin</h6> 
                            <input id="fechafin" type="date" class="form-control mb-3" placeholder="Fecha Fin">
                        </div>
                    </div>
                        <div id="divauxcrear">
                            <div id="divinteresado2"> 
                                <h6>Interesado</h6> 
                            </div> 
                            <div id="divcvp2"> 
                                <h6>Ciclo Vida Proyecto</h6>
                            </div>
                            <div id="diventregable2"> 
                                <h6>Entregable</h6> 
                            </div>
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
                  <h5 class="modal-title" id="exampleModalLabel">Formulario Editar Proyecto</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                  </button>
                </div>
                <form onsubmit="editarproyecto(); return false">
                    <div class="modal-body">
                        <div> 
                            <h6>Título</h6> 
                            <input id="titulo-2" type="text" class="form-control mb-3" autocomplete="off" minlength="3" required>
                        </div> 
                        <div> 
                            <h6>Objetivo</h6> 
                            <textarea id="objetivo-2" class="form-control mb-3" rows="4" style="height:100%"></textarea>
                        </div> 
                        <div>
                            <h6>Descripción</h6>
                            <textarea id="descripcion-2" class="form-control mb-3" rows="4" style="height:100%"></textarea>
                        </div>
                    <div class="row">
                        <div class="col-md-4">
                            <h6>Presupuesto</h6> 
                            <input id="presupuesto-2" type="text" class="form-control mb-3">
                        </div>
                        <div class="col-md-4">
                            <h6>Fecha Inicio</h6>
                            <input id="fechainicio-2" type="date" class="form-control mb-3"> 
                        </div> 
                        <div class="col-md-4"> 
                            <h6>Fecha Fin</h6> 
                            <input id="fechafin-2" type="date" class="form-control mb-3">
                        </div>
                    </div>
                        <div id="divauxeditar">
                            <div id="divinteresado3"> 
                                <h6>Interesado</h6> 
                            </div> 
                            <div id="divcvp3"> 
                                <h6>Ciclo Vida Proyecto</h6>
                            </div>
                            <div id="diventregable3"> 
                                <h6>Entregable</h6> 
                        </div>
                        </div>
                        <input type="hidden" id="idproyecto">
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
                    <h5 class="modal-title" id="exampleModalLabel">Información Completa del Proyecto</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                    </button>
                </div>
                <div class="modal-body">
                    <div> 
                        <h6>Objetivo</h6> 
                        <p id="objetivo-3"></p>
                    </div> 
                    <div>
                        <h6>Descripción</h6>
                        <p id="descripcion-3"></p>
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                            <h6>Presupuesto</h6> 
                            <p id="presupuesto-3"></p>
                        </div>
                        <div class="col-md-4">
                            <h6>Fecha Inicio</h6>
                            <p id="fechainicio-3"></p>
                        </div>
                        <div class="col-md-4">
                            <h6>Fecha Fin</h6> 
                            <p id="fechafin-3"></p>
                        </div>
                    </div>
                    <div id="divinteresado"> 
                        <h6>Interesado</h6> 
                    </div> 
                    <div id="divcvp"> 
                        <h6>Ciclo Vida Proyecto</h6>
                    </div>
                    <div id="diventregable"> 
                        <h6>Entregable</h6> 
                    </div>
                    <div id="divnombreproceso"> 
                        <h6>Número Procesos</h6> 
                    </div>
                    <div id="desrds"> 
                        <h6>Descripción RDS</h6> 
                    </div>
                    <div id="desriesgo"> 
                        <h6>Descripción Riesgo</h6> 
                    </div>
                    <div id="desri"> 
                        <h6>Descripción RI</h6> 
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
    buscandoproyecto();
} 

const buscandoproyecto = async () => {
    const option = 1
    const queryParams = `?option=${option}`
    try 
    {
        const ipserver = location.host
        const { data } = await axios.get(`http://`+ipserver+`/OntoPrototipoRepo/webresources/generic${queryParams}`)
        //const { data } = await axios.get(`http://localhost:8080/OntoPrototipoRepo/webresources/generic${queryParams}`)
        const resultDiv = document.getElementById('result');
        let stringHtml = '<div style="color: #0A2269; background: #E6E6E6; border-color: #E6E6E6" class="alert alert-primary" role="alert">SIN PROYECTOS</div>'
        if (data.length > 0) 
        {
        const items = data.map(item =>  
        `
        <tr>
            <td style="text-align: left" data-placement="top" title="Título">${item.titulo}</td>
            <!-- comment <td data-placement="top" title="Objetivo">${item.objetivo}</td>
            <td data-placement="top" title="Descripción">${item.descripcion}</td>
            <td data-placement="top" title="Presupuesto">${item.presupuesto}</td> -->
            <td data-placement="top" title="Fecha Inicio">${item.fechainicio}</td>
            <td data-placement="top" title="Fecha Fin" contenteditable="false">${item.fechafin}</td>            
            <td>
                <div class="btn-group">
                    <button class="btn btn-info btn-sm rounded-0" type="button" 
                            style="background: #0A2269; border-color: #FFFFFF"
                            data-bs-toggle="modal" data-placement="right" title="Pulsa aquí para conocer toda la información de este proyecto" 
                            data-original-title="Info" data-bs-target="#modal-info" onclick="mostrarinfo('${item.idproyecto}','${item.objetivo}','${item.descripcion}','${item.presupuesto}','${item.fechainicio}','${item.fechafin}','${item.interesados}','${item.cvp}','${item.entregables}','${item.procesos}','${item.incidentes}','${item.supuestos}','${item.riesgos}')"><i class="bi bi-info-circle" style="background: #0A2269; color: #FFFFFF"></i>
                    </button>
                    <button class="btn btn-success btn-sm rounded-0" type="button" 
                            style="background: #0A2269; border-color: #FFFFFF"
                            data-bs-toggle="modal" data-placement="right" title="Editar" 
                            data-original-title="Edit" data-bs-target="#modal-2" onclick="mostrareditar('${item.idproyecto}','${item.titulo}','${item.objetivo}','${item.descripcion}','${item.fechainicio}','${item.fechafin}','${item.presupuesto}','${item.interesados}','${item.cvp}','${item.entregables}')"><i class="bi bi-pencil-square" style="background: #0A2269; color: #FFFFFF"></i>
                    </button> 
                    <button class="btn btn-danger btn-sm rounded-0" type="button"
                            style="background: #0A2269; border-color: #FFFFFF"
                            data-bs-toggle="tooltip" data-placement="right" title="Eliminar" 
                            data-original-title="Delete" onclick="eliminarproyecto('${item.idproyecto}')"><i class="bi bi-trash" style="background: #0A2269; color: #FFFFFF"></i>
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
                    <th class= "col-8" scope="col">Título</th>
                    <!-- comment <th class= "col-4" scope="col">Objetivo</th>
                    <th class= "col-6" scope="col">Descripción</th>
                    <th class= "col-2" scope="col">Presupuesto</th> -->
                    <th class= "col-1" scope="col">Fecha Inicio</th>
                    <th class= "col-1" scope="col">Fecha Fin</th> 
                    <th class= "col-1" scope="col">Acción</th> 
                </tr>
            </thead>
            <tbody>${items}</tbody>
        </table>
        `
        }
        console.log("Entro a buscandoproyecto",data)
        metodoauxiliarcrear()
        resultDiv.innerHTML = stringHtml
    }
    catch (err) 
    { 
        console.log(err)
    }
}

const agregarproyecto = async () => {
    console.log("entrando a agregarproyecto");
    $('#modal-1').modal('hide')
    const option = 2
    const titulo = document.getElementById('titulo').value
    const objetivo = document.getElementById('objetivo').value
    const descripcion = document.getElementById('descripcion').value
    const fechainicio = document.getElementById('fechainicio').value
    const fechafin = document.getElementById('fechafin').value
    const presupuesto = document.getElementById('presupuesto').value
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
    otrosvalores += ";"
    inputElements = document.getElementsByClassName('cvpCheckbox');
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
    inputElements = document.getElementsByClassName('entregablesCheckbox');
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
    //console.log("otrosconceptos ",otrosvalores)
    const queryParams = `?option=${option}&atributo1=${titulo}&atributo2=${objetivo}&atributo3=${descripcion}&atributo4=${fechainicio}&atributo5=${fechafin}&atributo6=${presupuesto}&atributo7=${id}&superatributo=${otrosvalores}`
    try 
    {
        const ipserver = location.host;
        const {data} = await axios.get(`http://`+ipserver+`/OntoPrototipoRepo/webresources/generic${queryParams}`);
        
    } catch (err) 
    { 
        console.log(err)
    }
    buscandoproyecto();
    document.getElementById('titulo').value = ""
    document.getElementById('objetivo').value = ""
    document.getElementById('descripcion').value = ""
    document.getElementById('fechainicio').value = ""
    document.getElementById('fechafin').value = ""
    document.getElementById('presupuesto').value = ""
    var targetDiv = document.getElementById("div-alert");
    targetDiv.innerHTML = 
    `
    <div class="alert alert-success" id="success-alert" style="display: none">
        <strong>Proyecto creado con éxito</strong>
    </div>
    `
    $("#success-alert").fadeIn(4000);
    $("#success-alert").fadeOut(2000);
    //$("#success-alert").fadeTo(4000, 0).slideUp(1000, function(){
    //$("#success-alert").slideUp(4000);
    //});
    
}

const editarproyecto = async (aux) => {
    console.log("entrando a editarproyecto");
    $('#modal-2').modal('hide')
    const option = 3
    const titulo = document.getElementById('titulo-2').value
    const objetivo = document.getElementById('objetivo-2').value
    const descripcion = document.getElementById('descripcion-2').value
    const fechainicio = document.getElementById('fechainicio-2').value
    const fechafin = document.getElementById('fechafin-2').value
    const presupuesto = document.getElementById('presupuesto-2').value
    var otrosvalores = ""
    const id = document.getElementById('idproyecto').value
    
    var inputElements = document.getElementsByClassName('interesadosCheckbox2');
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
    otrosvalores += ";"
    inputElements = document.getElementsByClassName('cvpCheckbox2');
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
    otrosvalores += ";"
    inputElements = document.getElementsByClassName('entregablesCheckbox2');
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
    
    const queryParams = `?option=${option}&atributo1=${titulo}&atributo2=${objetivo}&atributo3=${descripcion}&atributo4=${fechainicio}&atributo5=${fechafin}&atributo6=${presupuesto}&atributo7=${id}&superatributo=${otrosvalores}`
    try 
    {
        const ipserver = location.host
        const { data } = await axios.get(`http://`+ipserver+`/OntoPrototipoRepo/webresources/generic${queryParams}`)
        buscandoproyecto()
    }
    catch (err) 
    { 
        console.log(err)
    }
    var targetDiv = document.getElementById("div-alert");
    targetDiv.innerHTML = 
    `
    <div class="alert alert-success" id="success-alert" style="display: none">
        <strong>Proyecto editado con éxito</strong>
    </div>
    `
    $("#success-alert").fadeIn(4000);
    $("#success-alert").fadeOut(2000);
}

const mostrareditar = async(aux1,aux2,aux3,aux4,aux5,aux6,aux7,interesados,cvps,entregables) => {
    document.getElementById('titulo-2').value = aux2
    document.getElementById('objetivo-2').value = aux3
    document.getElementById('descripcion-2').value = aux4
    document.getElementById('fechainicio-2').value = aux5
    document.getElementById('fechafin-2').value = aux6
    document.getElementById('presupuesto-2').value= aux7
    document.getElementById('idproyecto').value = aux1
    metodoauxiliareditar(aux1,interesados,cvps,entregables)  
}

const eliminarproyecto = async(aux) => {
    if(confirm('¿Está seguro de borrar este proyecto?'))
    {
        const option = 4
        const id = aux
        const queryParams = `?option=${option}&atributo7=${id}`
        try 
        {
            const ipserver = location.host
            const { data } = await axios.get(`http://`+ipserver+`/OntoPrototipoRepo/webresources/generic${queryParams}`)
            buscandoproyecto()
        }
        catch (err) 
        { 
            console.log(err)
        }
        var targetDiv = document.getElementById("div-alert");
        targetDiv.innerHTML = 
        `
        <div class="alert alert-success" id="success-alert" style="display: none">
            <strong>Proyecto eliminado con éxito</strong>
        </div>
        `
        $("#success-alert").fadeIn(4000);
        $("#success-alert").fadeOut(2000);
    }
}

const mostrarinfo = async(aux,aux2,aux3,aux4,aux5,aux6,aux7,aux8,aux9,aux10,aux11,aux12,aux13) => {
    document.getElementById('objetivo-3').innerHTML = aux2
    document.getElementById('descripcion-3').innerHTML = aux3
    document.getElementById('presupuesto-3').innerHTML = aux4
    document.getElementById('fechainicio-3').innerHTML = aux5
    document.getElementById('fechafin-3').innerHTML = aux6
    let divinteresado = document.getElementById('divinteresado')
    let h6= document.createElement("h6")
    let textoH6 = document.createTextNode("Interesado")
    divinteresado.innerHTML=""
    divinteresado.setAttribute("class","row")
    h6.appendChild(textoH6)
    divinteresado.append(h6)
    var interesados = aux7.split(',');
    for(let i=0;i<interesados.length;i++)
    {
        var auxi= interesados[i].split('&&')
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
    
    let divcvp = document.getElementById('divcvp')
    h6= document.createElement("h6")
    textoH6 = document.createTextNode("Ciclo Vida Proyecto")
    divcvp.innerHTML=""
    divcvp.setAttribute("class","row")
    h6.appendChild(textoH6)
    divcvp.append(h6)
    var cvp = aux8.split(',')
    for(let i=0;i<cvp.length;i++)
    {
        var auxi= cvp[i].split(':')
        var CicloVidaProyecto= auxi[1]
        let parragrafo1 = document.createElement("div")
        let ciclovidaproyecto= document.createTextNode((i+1)+") "+CicloVidaProyecto)
        parragrafo1.setAttribute("class","col-md-12")
        parragrafo1.append(ciclovidaproyecto)
        divcvp.append(parragrafo1)
    }
    divcvp.append(document.createElement("p"))
    
    let diventregable = document.getElementById('diventregable')
    h6= document.createElement("h6")
    textoH6 = document.createTextNode("Entregable")
    diventregable.innerHTML=""
    diventregable.setAttribute("class","row")
    h6.appendChild(textoH6)
    diventregable.append(h6)
    var entre = aux9.split(',,')
    for(let i=0;i<entre.length;i++)
    {
        var auxi= entre[i].split(':')
        var Entregable= auxi[1]
        let parragrafo1 = document.createElement("div")
        let entregable= document.createTextNode((i+1)+") "+Entregable)
        parragrafo1.setAttribute("class","col-md-12")
        parragrafo1.append(entregable)
        diventregable.append(parragrafo1)
    }
    diventregable.append(document.createElement("p"))
    
    let divnombreproceso = document.getElementById('divnombreproceso')
    h6= document.createElement("h6")
    textoH6 = document.createTextNode("Procesos")
    divnombreproceso.innerHTML=""
    divnombreproceso.setAttribute("class","row")
    h6.appendChild(textoH6)
    divnombreproceso.append(h6)
    var nombreproceso = aux10.split(',')
    for(let i=0;i<nombreproceso.length;i++)
    {
        var auxi= nombreproceso[i].split(':')
        var NombreProceso= auxi[1]
        let parragrafo1 = document.createElement("div")
        let nompro= document.createTextNode((i+1)+") "+NombreProceso)
        parragrafo1.setAttribute("class","col-md-12")
        parragrafo1.append(nompro)
        divnombreproceso.append(parragrafo1)
    }
    divnombreproceso.append(document.createElement("p"))
    
    let divsupuesto = document.getElementById('desrds')
    h6= document.createElement("h6")
    textoH6 = document.createTextNode("Descripción Supuestos")
    divsupuesto.innerHTML=""
    divsupuesto.setAttribute("class","row")
    h6.appendChild(textoH6)
    divsupuesto.append(h6)
    var nombresupuesto = aux12.split(',')
    for(let i=0;i<nombresupuesto.length;i++)
    {
        var auxi= nombresupuesto[i].split(':')
        var descripcionSupuesto= auxi[1]
        let parragrafo1 = document.createElement("div")
        let dessupuesto= document.createTextNode((i+1)+") "+descripcionSupuesto)
        parragrafo1.setAttribute("class","col-md-12")
        parragrafo1.append(dessupuesto)
        divsupuesto.append(parragrafo1)
    }
    divsupuesto.append(document.createElement("p"))
    
    let divriesgo = document.getElementById('desriesgo')
    h6= document.createElement("h6")
    textoH6 = document.createTextNode("Descripción Riesgos")
    divriesgo.innerHTML=""
    divriesgo.setAttribute("class","row")
    h6.appendChild(textoH6)
    divriesgo.append(h6)
    var nombreriesgo = aux13.split(',')
    for(let i=0;i<nombreriesgo.length;i++)
    {
        var auxi= nombreriesgo[i].split(':')
        var descripcionRiesgo= auxi[1]
        let parragrafo1 = document.createElement("div")
        let desriesgo= document.createTextNode((i+1)+") "+descripcionRiesgo)
        parragrafo1.setAttribute("class","col-md-12")
        parragrafo1.append(desriesgo)
        divriesgo.append(parragrafo1)
    }
    divriesgo.append(document.createElement("p"))
    
    let divincidente = document.getElementById('desri')
    h6= document.createElement("h6")
    textoH6 = document.createTextNode("Descripción Incidentes")
    divincidente.innerHTML=""
    divincidente.setAttribute("class","row")
    h6.appendChild(textoH6)
    divincidente.append(h6)
    var nombreincidente = aux11.split(',')
    for(let i=0;i<nombreincidente.length;i++)
    {
        var auxi= nombreincidente[i].split(':')
        var descripcionIncidente= auxi[1]
        let parragrafo1 = document.createElement("div")
        let desincidente= document.createTextNode((i+1)+") "+descripcionIncidente)
        parragrafo1.setAttribute("class","col-md-12")
        parragrafo1.append(desincidente)
        divincidente.append(parragrafo1)
    }
    divincidente.append(document.createElement("p"))
}

const metodoauxiliarcrear = async() => {
    const option = 5
    const queryParams = `?option=${option}`
    try 
    {
        const ipserver = location.host
        const { data } = await axios.get(`http://`+ipserver+`/OntoPrototipoRepo/webresources/generic${queryParams}`)
        const info = data.split(';')
        
        const interesados = info[0]
        const cvps = info[1]
        const entregables = info[2]
        const procesos = info[3]
        
        const interesado = interesados.split(',')
        const cvp = cvps.split(',')
        const entregable = entregables.split(',,')
        const proceso = procesos.split(',')
        
        let divauxcrear = document.getElementById('divauxcrear')
        divauxcrear.innerHTML=""
        divauxcrear.setAttribute("class","row")

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
                let idinteresado = (aux[1].split(":"))[1]
                div.setAttribute("class", "col-md-4")
                input.setAttribute("type", "checkbox")
                input.setAttribute("value", idinteresado)
                input.setAttribute("class", "interesadosCheckbox")
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
        divauxcrear.append(divinteresado)
        divauxcrear.append(document.createElement("p"))
        
        let divcvp = document.createElement("div")
        h6= document.createElement("h6")
        textoH6 = document.createTextNode("Ciclo Vida Proyecto")
        h6.appendChild(textoH6)
        divcvp.setAttribute("class","row")
        divcvp.append(h6)
        if (cvp[0]!=="SIN CVP") {
            for (let i = 0; i < cvp.length; i++)
            {
                let div = document.createElement("div")
                let input = document.createElement("input")
                let label = document.createElement("label")
                let aux = cvp[i].split("&&")
                let nombrecvp = (aux[0].split(":"))[1]
                let idcvp = (aux[1].split(":"))[1]
                div.setAttribute("class", "col-md-4")
                input.setAttribute("type", "checkbox")
                input.setAttribute("value", idcvp)
                input.setAttribute("class", "cvpCheckbox")
                label.append(input)
                label.append(" " + nombrecvp)
                div.append(label)
                divcvp.append(div)
            }
        } 
        else{
            let div = document.createElement("div")
            div.setAttribute("class", "col-md-12")
            div.append("NO HAY CVP")
            divcvp.append(div)
        }
        divauxcrear.append(divcvp)
        divauxcrear.append(document.createElement("p"))
        
        let diventregable = document.createElement("div")
        h6= document.createElement("h6")
        textoH6 = document.createTextNode("Entregables")
        h6.appendChild(textoH6)
        diventregable.setAttribute("class","row")
        diventregable.append(h6)
        if (entregable[0]!=="Entregable:SIN ENTREGABLES") {
            for (let i = 0; i < entregable.length; i++)
            {
                let div = document.createElement("div")
                let input = document.createElement("input")
                let label = document.createElement("label")
                let aux = entregable[i].split("&&")
                let nombreentregable = (aux[0].split(":"))[1]
                let identregable = (aux[1].split(":"))[1]
                div.setAttribute("class", "col-md-6")
                input.setAttribute("type", "checkbox")
                input.setAttribute("value", identregable)
                input.setAttribute("class", "entregablesCheckbox")
                label.append(input)
                label.append(" " + nombreentregable)
                div.append(label)
                diventregable.append(div)
            }
        } 
        else{
            let div = document.createElement("div")
            div.setAttribute("class", "col-md-12")
            div.append("NO HAY ENTREGABLES")
            diventregable.append(div)
        }
        divauxcrear.append(diventregable)
        divauxcrear.append(document.createElement("p"))
    }
    catch (err) 
    { 
        console.log(err)
    } 
}

const metodoauxiliareditar = async(aux1,inte,cvpss,entre) => {
    const option = 5
    const queryParams = `?option=${option}`
    try 
    {
        const ipserver = location.host
        const { data } = await axios.get(`http://`+ipserver+`/OntoPrototipoRepo/webresources/generic${queryParams}`)
        const info = data.split(';')
        
        const interesados = info[0]
        const cvps = info[1]
        const entregables = info[2]
        const procesos = info[3]
        
        const interesado = interesados.split(',')
        const cvp = cvps.split(',')
        const entregable = entregables.split(',,')
        const proceso = procesos.split(',')
        
        var inteaux1 = inte.split(',') 
        var inteaux2 = "" 
        var cvpaux1  = cvpss.split(',')
        var cvpaux2  = ""
        var entreaux1 = entre.split(',')
        var entreaux2 = ""
        
        let divauxeditar = document.getElementById('divauxeditar')
        divauxeditar.innerHTML=""
        divauxeditar.setAttribute("class","row")
        //console.log("en aux editar ",interesados)
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
                let idinteresado = (aux[1].split(":"))[1]
                div.setAttribute("class", "col-md-4")
                input.setAttribute("type", "checkbox")
                input.setAttribute("value", idinteresado)
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
        divauxeditar.append(divinteresado)
        divauxeditar.append(document.createElement("p"))
        
        let divcvp = document.createElement("div")
        h6= document.createElement("h6")
        textoH6 = document.createTextNode("Ciclo Vida Proyecto")
        h6.appendChild(textoH6)
        divcvp.setAttribute("class","row")
        divcvp.append(h6)
        if (cvp[0]!=="SIN CVP") {
            for (let i = 0; i < cvp.length; i++)
            {
                let div = document.createElement("div")
                let input = document.createElement("input")
                let label = document.createElement("label")
                let aux = cvp[i].split("&&")
                let nombrecvp = (aux[0].split(":"))[1]
                let idcvp = (aux[1].split(":"))[1]
                div.setAttribute("class", "col-md-4")
                input.setAttribute("type", "checkbox")
                input.setAttribute("value", idcvp)
                input.setAttribute("class", "cvpCheckbox2")
                for (let j = 0; j < cvpaux1.length; j++) {
                    cvpaux2 = cvpaux1[j].split('&&')
                    cvpaux2 = cvpaux2[0].split(':')
                    cvpaux2 = cvpaux2[1]
                    if (cvpaux2 === nombrecvp) {
                        input.setAttribute("checked", true)
                    }
                }
                label.append(input)
                label.append(" " + nombrecvp)
                div.append(label)
                divcvp.append(div)
            }
        } 
        else{
            let div = document.createElement("div")
            div.setAttribute("class", "col-md-12")
            div.append("NO HAY CVP")
            divcvp.append(div)
        }
        divauxeditar.append(divcvp)
        divauxeditar.append(document.createElement("p"))
        
        let diventregable = document.createElement("div")
        h6= document.createElement("h6")
        textoH6 = document.createTextNode("Entregables")
        h6.appendChild(textoH6)
        diventregable.setAttribute("class","row")
        diventregable.append(h6)
        if (entregable[0]!=="Entregable:SIN ENTREGABLES") {
            for (let i = 0; i < entregable.length; i++)
            {
                let div = document.createElement("div")
                let input = document.createElement("input")
                let label = document.createElement("label")
                let aux = entregable[i].split("&&")
                let nombreentregable = (aux[0].split(":"))[1]
                let identregable = (aux[1].split(":"))[1]
                div.setAttribute("class", "col-md-6")
                input.setAttribute("type", "checkbox")
                input.setAttribute("value", identregable)
                input.setAttribute("class", "entregablesCheckbox2")
                for (let j = 0; j < entreaux1.length; j++) {
                    entreaux2 = entreaux1[j].split('&&')
                    entreaux2 = entreaux2[0].split(':')
                    entreaux2 = entreaux2[1]
                    if (entreaux2 === nombreentregable) {
                        input.setAttribute("checked", true)
                    }
                }
                label.append(input)
                label.append(" " + nombreentregable)
                div.append(label)
                diventregable.append(div)
            }
        }
        else{
            let div = document.createElement("div")
            div.setAttribute("class", "col-md-12")
            div.append("NO HAY ENTREGABLES")
            diventregable.append(div)
        }
        divauxeditar.append(diventregable)
        divauxeditar.append(document.createElement("p"))
    }
    catch (err) 
    { 
        console.log(err)
    }
}



