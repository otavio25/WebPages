$(document).ready(function () {
    $("#Historia").load("historia.html");
    $("#menu").load("menu.html"); 
});

$(document).ready(function () {
    var pagina = window.location.href;
    var numero = (pagina.indexOf("="));

    pagina = pagina.substring(numero + 2, numero + 1);

    if (pagina === "b") {
        $("#tituloAba").text("Barcelona | Tour no Velho Continente !");
        $("#c1").attr("src", "img/barcelona1.jpg");
        $("#c2").attr("src", "img/barcelona2.jpg");
        $("#c3").attr("src", "img/barcelona3.jpg");
        $("#TitleCity").text("Barcelona(ESP)");

    } else if (pagina === "c") {
        $("#tituloAba").text("Creta | Tour no Velho Continente !");
        $("#c1").attr("src", "img/creta1.jpg");
        $("#c2").attr("src", "img/creta2.jpg");
        $("#c3").attr("src", "img/creta3.jpg");
        $("#TitleCity").text("Creta(GRE)");

    } else if (pagina === "d") {
        $("#tituloAba").text("Dubrovnik | Tour no Velho Continente !");
        $("#c1").attr("src", "img/dubrovnik1.jpg");
        $("#c2").attr("src", "img/dubrovnik2.jpg");
        $("#c3").attr("src", "img/dubrovnik3.jpg");
        $("#TitleCity").text("Dubrovnik(CRO)");
    }

});

$(document).ready(function () {

    $("#erroNome").hide();
    $("#erroCPF").hide();
    $("#erroIdade").hide();
    $("#erroTel").hide();
    $("#erroEnd").hide();
    $("#erroCEP").hide();
    $("#erroEmail").hide();
    $("#erroSenha").hide();
    $("#erroSenha2").hide();

    $("#erroEmailLogin").hide();
    $("#erroSenhaLogin").hide();

    $("#cadastrar").click(function () {
        var validarCad = 0;

        if ($("#CampoNome").val() == "") {
            validarCad++;
            $("#erroNome").show();
        } else {
            $("#erroNome").hide();
        }

        if ($("#CampoCPF").val() == "") {
            validarCad++;
            $("#erroCPF").show();
        } else {
            $("#erroCPF").hide();
        }

        if ($("#CampoIdade").val() == "" || $("#CampoIdade").val() < 14) {
            validarCad++;
            $("#erroIdade").show();
        } else {
            $("#erroIdade").hide();
        }

        if ($("#CampoTel").val() == "") {
            validarCad++;
            $("#erroTel").show();
        } else {
            $("#erroTel").hide();
        }

        if ($("#CampoEnd").val() == "") {
            validarCad++;
            $("#erroEnd").show();
        } else {
            $("#erroEnd").hide();
        }

        if ($("#CampoCEP").val() == "") {
            validarCad++;
            $("#erroCEP").show();
        } else {
            $("#erroCEP").hide();
        }

        if ($("#exampleInputEmail1").val() == "") {
            validarCad++;
            $("#erroEmail").show();
        } else {
            $("#erroEmail").hide();
        }

        if ($("#exampleInputPassword1").val() == "") {
            validarCad++;
            $("#erroSenha").show();
        } else {
            $("#erroSenha").hide();
        }

        if ($("#exampleInputPassword2").val() == "") {
            validarCad++;
            $("#erroSenha2").show();
        } else {
            $("#erroSenha2").hide();
        }

        if (validarCad == 0)
            $("#cadastrar").attr("type", "submit");
    
    });

    $("#logar").click(function(){
            var validarLogin = 0;

        if ($("#exampleInputEmail2").val() == "") {
            validarLogin++;
            $("#erroEmailLogin").show();
        } else {
            $("#erroEmailLogin").hide();
        }

        if ($("#exampleInputPassword3").val() == "") {
            validarLogin++;
            $("#erroSenhaLogin").show();
        } else {
            $("#erroSenhaLogin").hide();
        }

        if (validarLogin == 0)
            $("#logar").attr("type", "submit");
    });

    $('#CampoCPF').mask('000.000.000-00', {reverse: true});
    $('#CampoTel').mask('(00)0 0000-0000');
    $('#CampoCEP').mask('00000-000');
});

function instagram() {
    window.open('https://www.instagram.com/?hl=pt-br', '_blank');
}
function pinterest() {
    window.open('https://br.pinterest.com/', '_blank');
}
function twitter() {
    window.open('https://twitter.com/login?lang=pt', '_blank');
}
function facebook() {
    window.open('https://pt-br.facebook.com/', '_blank');
}


