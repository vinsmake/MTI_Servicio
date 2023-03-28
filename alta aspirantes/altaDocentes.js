javascript: (() => {

    let apellidoPaterno = document.querySelector("[name='apellido_paterno'");
    let apellidomaterno = document.querySelector("[name='apellido_materno'");
    let nombre = document.querySelector("[name='nombre'");
    let fechaNacimiento = document.querySelector("[name='fecha_nacimiento'");
    let curp = document.querySelector("[name='curp'");
    let rfc = document.querySelector("[name='rfc'");
    let email = document.querySelector("[name='correo'");
    let calle = document.querySelector("[name='calle'");
    let numeroExterior = document.querySelector("[name='numero_exterior'");
    let colonia = document.querySelector("[name='colonia'");
    let cp = document.querySelector("[name='codigo_postal'");
    let municipio = document.querySelector("[name='municipio'");
    let tel = document.querySelector("[name='telefono'");
    let cel = document.querySelector("[name='celular'");
    let ciudadNacimiento = document.querySelector("[name='lugar_nacimiento'");
    let titulo = document.querySelector("[name='titulo'");
    let universidad = document.querySelector("[name='universidad'");
    let promedio = document.querySelector("[name='promedio'");
    let anioEgreso = document.querySelector("[name='anio_egreso'");
    let ocupacion = document.querySelector("[name='ocupacion'");
    let empresa = document.querySelector("[name='empresa'");
    let empresaDomicilio = document.querySelector("[name='domicilio_trabajo'");
    let empresaMunicipio = document.querySelector("[name='municipio_trabajo'");
    let empresaTel = document.querySelector("[name='telefono_trabajo'");
    let nivel2 = document.querySelector("[name='nivel_idioma2'");
    let estado = document.querySelector("[name='id_estado'");
    let empresaEstado = document.querySelector("[name='id_estado_trabajo'");

    
    
    
    let datosAlumno = prompt("Pega los datos del alumno separados por comas (apellido paterno,apellido materno,nombres,fecha de nacimiento,CURP,RFC,CorreoE,Calle,Numero interior,Colonia,CP,Municipio,Telefono,Celular,Lugar de nacimiento, Titulo, Universidad de procedencia, promedio, anio de agreso, Ocupacion, nombre empresa, domicilio empresa, municipio empresa, telefono empresa).").split(",");
    apellidoPaterno.value = datosAlumno[0];
    apellidomaterno.value = datosAlumno[1];
    nombre.value = datosAlumno[2];
    fechaNacimiento.value = datosAlumno[3];
    curp.value = datosAlumno[4];
    rfc.value = datosAlumno[5];
    email.value = datosAlumno[6];
    calle.value = datosAlumno[7];
    numeroExterior.value = datosAlumno[8];
    colonia.value = datosAlumno[9];
    cp.value = datosAlumno[10];
    municipio.value = datosAlumno[11];
    tel.value = datosAlumno[12];
    cel.value = datosAlumno[13];
    ciudadNacimiento.value = datosAlumno[14];
    titulo.value = datosAlumno[15];
    universidad.value = datosAlumno[16];
    promedio.value = datosAlumno[17];
    anioEgreso.value = datosAlumno[18];
    ocupacion.value = datosAlumno[19];
    empresa.value = datosAlumno[20];
    empresaDomicilio.value = datosAlumno[21];
    empresaMunicipio.value = datosAlumno[22];
    empresaTel.value = datosAlumno[23];

    if (datosAlumno[24] == "BASICO") {
        nivel2.value = "1"
    } else if (datosAlumno[24] == "INTERMEDIO") {
        nivel2.value = "2"
    } else {
        nivel2.value = "3"
    };

    if (datosAlumno[25] == "JALISCO"){
        estado.value = "15";
    }

        if (datosAlumno[26] == "JALISCO"){
        empresaEstado.value = "15";
    }
    



    let nacionalidad = document.querySelector("[name='id_pais'");
    let gradoEstudios = document.querySelector("[name='grado_estudios'");
    let idioma1 = document.querySelector("[name='id_idioma1'");
    let nivel1 = document.querySelector("[name='nivel_idioma1'");
    let idioma2 = document.querySelector("[name='id_idioma2'");

    gradoEstudios.value = 1;
    idioma1.value = 9;
    nivel1.value = 3;
    idioma2.value = 15;
    nacionalidad.value=117;



})();


//This is the code writing zone
javascript: (() => {

    let apellidoPaterno = document.querySelector("[name='apellido_paterno'");
    let apellidomaterno = document.querySelector("[name='apellido_materno'");
    let nombre = document.querySelector("[name='nombre'");
    let fechaNacimiento = document.querySelector("[name='fecha_nacimiento'");
    let curp = document.querySelector("[name='curp'");
    let rfc = document.querySelector("[name='rfc'");
    let email = document.querySelector("[name='correo'");
    let calle = document.querySelector("[name='calle'");
    let numeroExterior = document.querySelector("[name='numero_exterior'");
    let colonia = document.querySelector("[name='colonia'");
    let cp = document.querySelector("[name='codigo_postal'");
    let municipio = document.querySelector("[name='municipio'");
    let tel = document.querySelector("[name='telefono'");
    let cel = document.querySelector("[name='celular'");
    let ciudadNacimiento = document.querySelector("[name='lugar_nacimiento'");
    let titulo = document.querySelector("[name='titulo'");
    let universidad = document.querySelector("[name='universidad'");
    let promedio = document.querySelector("[name='promedio'");
    let anioEgreso = document.querySelector("[name='anio_egreso'");
    let ocupacion = document.querySelector("[name='ocupacion'");
    let empresa = document.querySelector("[name='empresa'");
    let empresaDomicilio = document.querySelector("[name='domicilio_trabajo'");
    let empresaMunicipio = document.querySelector("[name='municipio_trabajo'");
    let empresaTel = document.querySelector("[name='telefono_trabajo'");
    let nivel2 = document.querySelector("[name='nivel_idioma2'");
    let estado = document.querySelector("[name='id_estado'");
    let empresaEstado = document.querySelector("[name='id_estado_trabajo'");
    let siclo = document.querySelector("[name='id_ciclo'");

    
    
    
    let datosAlumno = prompt("Pega los datos del alumno separados por comas (apellido paterno,apellido materno,nombres,fecha de nacimiento,CURP,RFC,CorreoE,Calle,Numero interior,Colonia,CP,Municipio,Telefono,Celular,Lugar de nacimiento, Titulo, Universidad de procedencia, promedio, anio de agreso, Ocupacion, nombre empresa, domicilio empresa, municipio empresa, telefono empresa).").split(",");
    apellidoPaterno.value = datosAlumno[0];
    apellidomaterno.value = datosAlumno[1];
    nombre.value = datosAlumno[2];
    fechaNacimiento.value = datosAlumno[3];
    curp.value = datosAlumno[4];
    rfc.value = datosAlumno[5];
    email.value = datosAlumno[6];
    calle.value = datosAlumno[7];
    numeroExterior.value = datosAlumno[8];
    colonia.value = datosAlumno[9];
    cp.value = datosAlumno[10];
    municipio.value = datosAlumno[11];
    tel.value = datosAlumno[12];
    cel.value = datosAlumno[13];
    ciudadNacimiento.value = datosAlumno[14];
    titulo.value = datosAlumno[15];
    universidad.value = datosAlumno[16];
    promedio.value = datosAlumno[17];
    anioEgreso.value = datosAlumno[18];
    ocupacion.value = datosAlumno[19];
    empresa.value = datosAlumno[20];
    empresaDomicilio.value = datosAlumno[21];
    empresaMunicipio.value = datosAlumno[22];
    empresaTel.value = datosAlumno[23];

    if (datosAlumno[24] == "BASICO") {
        nivel2.value = "1"
    } else if (datosAlumno[24] == "INTERMEDIO") {
        nivel2.value = "2"
    } else {
        nivel2.value = "3"
    };

    if (datosAlumno[25] == "JALISCO"){
        estado.value = "15";
    }

        if (datosAlumno[26] == "JALISCO"){
        empresaEstado.value = "15";
    }
    



    let nacionalidad = document.querySelector("[name='id_pais'");
    let gradoEstudios = document.querySelector("[name='grado_estudios'");
    let idioma1 = document.querySelector("[name='id_idioma1'");
    let nivel1 = document.querySelector("[name='nivel_idioma1'");
    let idioma2 = document.querySelector("[name='id_idioma2'");

    gradoEstudios.value = 1;
    idioma1.value = 9;
    nivel1.value = 3;
    idioma2.value = 15;
    nacionalidad.value=117;

    siclo.value = "17";



})();