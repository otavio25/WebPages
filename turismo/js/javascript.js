$(document).ready(function () {
    $("#menu").load("menu.html");
    $("#Historia").load("historia.html");
    $("#login").hide();
});

$(document).on('click', '.BtnLogin', function () {
    $("#login").toggle();
});

$(document).ready(function () {
    var pagina = window.location.href;
    var numero = (pagina.indexOf("="));

    pagina = pagina.substring(numero + 2, numero + 1);

    if (pagina === "b") {
        $("#c1").attr("src", "img/barcelona1.jpg");
        $("#c2").attr("src", "img/barcelona2.jpg");
        $("#c3").attr("src", "img/barcelona3.jpg");
        $("#TitleCity").text("Barcelona(ESP)");

    } else if (pagina === "c") {
        $("#c1").attr("src", "img/creta1.jpg");
        $("#c2").attr("src", "img/creta2.jpg");
        $("#c3").attr("src", "img/creta3.jpg");
        $("#TitleCity").text("Creta(GRE)");

    } else if (pagina === "d") {
        $("#c1").attr("src", "img/dubrovnik1.jpg");
        $("#c2").attr("src", "img/dubrovnik2.jpg");
        $("#c3").attr("src", "img/dubrovnik3.jpg");
        $("#TitleCity").text("Dubrovnik(CRO)");
    }

});

$(document).ready(function () {
    $("#CampoCPF").focusout(function () {
        var cpf = $("#CampoCPF").val();
        pesquisarCPF(cpf);
    });
});

$(document).ready(function () {

    $("#erroNome").hide();
    $("#erroCPF").hide();
    $("#erroIdade").hide();
    $("#erroTel").hide();
    $("#erroEnd").hide();
    $("#erroEmail").hide();
    $("#erroSenha").hide();
    $("#cadastrar").click(function () {
        var validar = 0;
        if ($("#CampoNome").val() == "") {
            validar++;
            $("#erroNome").show();
        } else {
            $("#erroNome").hide();
        }

        if ($("#CampoCPF").val() == "") {
            validar++;
            $("#erroCPF").show();
        } else {
            $("#erroCPF").hide();
        }

        if ($("#CampoIdade").val() == "" || $("#CampoIdade").val() < 14) {
            validar++;
            $("#erroIdade").show();
        } else {
            $("#erroIdade").hide();
        }

        if ($("#CampoTel").val() == "") {
            validar++;
            $("#erroTel").show();
        } else {
            $("#erroTel").hide();
        }

        if ($("#CampoEnd").val() == "") {
            validar++;
            $("#erroEnd").show();
        } else {
            $("#erroEnd").hide();
        }

        if ($("#exampleInputEmail1").val() == "") {
            validar++;
            $("#erroEmail").show();
        } else {
            $("#erroEmail").hide();
        }

        if ($("#exampleInputPassword1").val() == "") {
            validar++;
            $("#erroSenha").show();
        } else {
            $("#erroSenha").hide();
        }

        if (validar == 0)
            $("#cadastrar").attr("type", "submit");
    });

    $('#CampoCPF').mask('000.000.000-00', {reverse: true});
    $('#CampoTel').mask('(00)0 0000-0000');
});

/*function pesquisarCPF(cpf) {
    var url = "http://localhost/json/json.php";
    $.ajax({
        type: "POST",
        dataType: "json",
        url: url,
        data: {cpf: cpf},
        success: function (resultado) {

            if (resultado) {
                $("#erroCPF").text("(CPF informado já foi cadastrado)");
                $("#erroCPF").show();
            }
        }
    });
}

$(document).ready(function () {
    pesquisarDados();
    function pesquisarDados() {
        var url = "http://localhost/json/listar.php";
        $.ajax({
            type: "POST",
            dataType: "json",
            url: url,
            success: function (resultado) {
                var dados = "";
                var i;
                for (i = 0; i < resultado.length; i++) {
                    dados += "<tr>";
                    dados += "<td>" + resultado[i].cpf + "</td>";
                    dados += "<td>" + resultado[i].nome + "</td>";
                    dados += '<td class="idade">' + resultado[i].idade + "</td>";
                    dados += "</tr>";
                }
                $("tbody").html(dados);

                $(".idade").each(function () {
                    if ($(this).text() > 12)
                        $(this).css("color", "red");
                });

            }
        });
    }
});*/

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


