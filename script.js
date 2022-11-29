function Verify(){

    var date = new Date();

    var year = date.getFullYear();

    var fyear = document.getElementById('txtano');

    var res = document.getElementById('res');

    if (fyear.value.length == 0 || Number(fyear.value) > year) {

        alert('[ERRO] Verifique os dados e tente novamente!');

        console.error('[ERRO] Verifique os dados e tente novamente!');

    } else {

        var fgen = document.getElementsByName('radgen');

        var idade = year - Number.parseInt(fyear.value);

        var gênero = '';

        var img = document.createElement('img');

        img.setAttribute('id', 'foto');

        if (fgen[0].checked) {

            gênero = 'homem';
            
            if (idade >= 0 && idade <= 12) {

                img.setAttribute('src', 'img/foto-bebe-m.png');

            } else if (idade < 22) {

                img.setAttribute('src', 'img/foto-jovem-m.png');

            } else if (idade < 60) {

                img.setAttribute('src', 'img/foto-adulto-m.png');

            } else {

                img.setAttribute('src', 'img/foto-idoso-m.png');

            };

        } else {

            gênero = 'Mulher';

            if (idade >= 0 && idade <= 12) {

                img.setAttribute('src', 'img/foto-bebe-f.png');

            } else if (idade < 22) {

                img.setAttribute('src', 'img/foto-jovem-f.png');

            } else if (idade < 60) {

                img.setAttribute('src', 'img/foto-adulto-f.png');

            } else {

                img.setAttribute('src', 'img/foto-idoso-f.png')

            }

        };

        res.innerText = `Detectamos ${gênero} com ${idade} anos`;

        res.appendChild(img);

    };
};


document.querySelector('input#btn').addEventListener('click', Verify);


document.getElementById('res').style.textAlign = 'center';