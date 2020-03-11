$( document ).ready(function() {
    console.log( "ready!" );

    $("#enviar").click(function(){
    	if(
    		$("#nome").val() == "" ||
    		$("#sobrenome").val() == "" ||
    		$("#email").val() == "" ||
    		$("#telefone").val() == "" ||
    		$("#dia").val() == "" ||
    		$("#mes").val() == "" ||
    		$("#ano").val() == "" ||
    		$("#descricao").val() == ""
    	)
    	{
    		alert(
    			"O campo [Nome] é necessário.\n"+
    			"O campo [Sobrenome] é necessário.\n"+
    			"O campo [Email] é necessário.\n"+
    			"O campo [Telefone] é necessário.\n"+
    			"O campo [Dia de Nascimento] é necessário.\n"+
    			"O campo [Mês de Nascimento] é necessário.\n"+
    			"O campo [Ano de Nascimento] é necessário.\n"+
    			"O campo [Descrição] é necessário.\n"
    			)
    	}
    	else
    	{
    		alert(
    			"Usuário cadastrado com sucesso:\n\n"+
				"Nome: "+$("#nome").val()+
				"\nSobrenome: "+$("#sobrenome").val()+
				"\nEmail: "+$("#email").val()+
				"\nTelefone: "+$("#telefone").val()+
				"\nData de Nascimento: "+$("#dia").val()+"/"+$("#mes").val()+"/"+$("#ano").val()+
				"\nDescrição: "+$("#descricao").val())
    	}
    })
});

