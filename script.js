class MyFont
{
    constructor()
    {
        this.name = "";
        this.value = [];
	this.distance = 0;
    }

    calcDistance( sliders )
    {
        let totalValue = 0;
        for( let i=0; i<sliders.length; i++ )
	{
		totalValue += ( sliders[i].value - this.value[i] ) * ( sliders[i].value - this.value[i] );
	}
	this.distance = Math.sqrt( totalValue );
	return this.distance;
    }
}


	const fontElements = [];

	fontElements[0] = new MyFont();
	fontElements[0].name = 'font a';
	fontElements[0].value[0] = 1;
	fontElements[0].value[1] = 1;
	fontElements[0].value[2] = 1;
	fontElements[0].value[3] = 1;
	fontElements[0].value[4] = 1;
	fontElements[0].value[5] = 1;
	fontElements[0].value[6] = 1;
	fontElements[0].value[7] = 1;
	fontElements[0].value[8] = 1;
	fontElements[0].value[9] = 1;
	fontElements[0].value[10] = 1;
	fontElements[0].value[11] = 1;

	fontElements[1] = new MyFont();
	fontElements[1].name = 'font b';
	fontElements[1].value[0] = 2;
	fontElements[1].value[1] = 2;
	fontElements[1].value[2] = 2;
	fontElements[1].value[3] = 2;
	fontElements[1].value[4] = 2;
	fontElements[1].value[5] = 2;
	fontElements[1].value[6] = 2;
	fontElements[1].value[7] = 2;
	fontElements[1].value[8] = 2;
	fontElements[1].value[9] = 2;
	fontElements[1].value[10] = 2;
	fontElements[1].value[11] = 2;

	fontElements[2] = new MyFont();
	fontElements[2].name = 'font c';
	fontElements[2].value[0] = 3;
	fontElements[2].value[1] = 3;
	fontElements[2].value[2] = 3;
	fontElements[2].value[3] = 3;
	fontElements[2].value[4] = 3;
	fontElements[2].value[5] = 3;
	fontElements[2].value[6] = 3;
	fontElements[2].value[7] = 3;
	fontElements[2].value[8] = 3;
	fontElements[2].value[9] = 3;
	fontElements[2].value[10] = 3;
	fontElements[2].value[11] = 3;
	
	fontElements[3] = new MyFont();
	fontElements[3].name = 'font d';
	fontElements[3].value[0] = 4;
	fontElements[3].value[1] = 4;
	fontElements[3].value[2] = 4;
	fontElements[3].value[3] = 4;
	fontElements[3].value[4] = 4;
	fontElements[3].value[5] = 4;
	fontElements[3].value[6] = 4;
	fontElements[3].value[7] = 4;
	fontElements[3].value[8] = 4;
	fontElements[3].value[9] = 4;
	fontElements[3].value[10] = 4;
	fontElements[3].value[11] = 4;

	fontElements[4] = new MyFont();
	fontElements[4].name = 'font e';
	fontElements[4].value[0] = 5;
	fontElements[4].value[1] = 5;
	fontElements[4].value[2] = 5;
	fontElements[4].value[3] = 5;
	fontElements[4].value[4] = 5;
	fontElements[4].value[5] = 5;
	fontElements[4].value[6] = 5;
	fontElements[4].value[7] = 5;
	fontElements[4].value[8] = 5;
	fontElements[4].value[9] = 5;
	fontElements[4].value[10] = 5;
	fontElements[4].value[11] = 5;

	fontElements[5] = new MyFont();
	fontElements[5].name = 'font f';
	fontElements[5].value[0] = 6;
	fontElements[5].value[1] = 6;
	fontElements[5].value[2] = 6;
	fontElements[5].value[3] = 6;
	fontElements[5].value[4] = 6;
	fontElements[5].value[5] = 6;
	fontElements[5].value[6] = 6;
	fontElements[5].value[7] = 6;
	fontElements[5].value[8] = 6;
	fontElements[5].value[9] = 6;
	fontElements[5].value[10] = 6;
	fontElements[5].value[11] = 6;

	fontElements[6] = new MyFont();
	fontElements[6].name = 'font g';
	fontElements[6].value[0] = 7;
	fontElements[6].value[1] = 7;
	fontElements[6].value[2] = 7;
	fontElements[6].value[3] = 7;
	fontElements[6].value[4] = 7;
	fontElements[6].value[5] = 7;
	fontElements[6].value[6] = 7;
	fontElements[6].value[7] = 7;
	fontElements[6].value[8] = 7;
	fontElements[6].value[9] = 7;
	fontElements[6].value[10] = 7;
	fontElements[6].value[11] = 7;

	fontElements[7] = new MyFont();
	fontElements[7].name = 'font h';
	fontElements[7].value[0] = 8;
	fontElements[7].value[1] = 8;
	fontElements[7].value[2] = 8;
	fontElements[7].value[3] = 8;
	fontElements[7].value[4] = 8;
	fontElements[7].value[5] = 8;
	fontElements[7].value[6] = 8;
	fontElements[7].value[7] = 8;
	fontElements[7].value[8] = 8;
	fontElements[7].value[9] = 8;
	fontElements[7].value[10] = 8;
	fontElements[7].value[11] = 8;

	fontElements[8] = new MyFont();
	fontElements[8].name = 'font i';
	fontElements[8].value[0] = 9;
	fontElements[8].value[1] = 9;
	fontElements[8].value[2] = 9;
	fontElements[8].value[3] = 9;
	fontElements[8].value[4] = 9;
	fontElements[8].value[5] = 9;
	fontElements[8].value[6] = 9;
	fontElements[8].value[7] = 9;
	fontElements[8].value[8] = 9;
	fontElements[8].value[9] = 9;
	fontElements[8].value[10] = 9;
	fontElements[8].value[11] = 9;

	fontElements[9] = new MyFont();
	fontElements[9].name = 'font j';
	fontElements[9].value[0] = 10;
	fontElements[9].value[1] = 10;
	fontElements[9].value[2] = 10;
	fontElements[9].value[3] = 10;
	fontElements[9].value[4] = 10;
	fontElements[9].value[5] = 10;
	fontElements[9].value[6] = 10;
	fontElements[9].value[7] = 10;
	fontElements[9].value[8] = 10;
	fontElements[9].value[9] = 10;
	fontElements[9].value[10] = 10;
	fontElements[9].value[11] = 10;


document.addEventListener('DOMContentLoaded', function() 
{
    const sliders = [];
    const sliderValues = [];
    const fontList = document.getElementById('font-list');


    // 12個のスライダーとその値の要素を取得
    for (let i = 0; i < 12; i++) {
        sliders[i] = document.getElementById(`slider${i + 1}`);
        sliderValues[i] = document.getElementById(`slider${i + 1}-value`);
    }

    // スライダーの値を更新する
    sliders.forEach((slider, index) => {
        if (slider) {
            slider.addEventListener('input', function() {
                const sliderValue = slider.value;
                sliderValues[index].textContent = sliderValue;

                // 提案されるフォントをスライダーの値に応じて変更する
                updateFonts(sliderValue);
            });
        }
    });

    // フォント提案を更新する関数
    function updateFonts(sliderValue) {

	for( let i=0; i<fontElements.length; i++ )
	{
		fontElements[i].calcDistance( sliders );
		console.log( fontElements[i].distance );
	}

	let index1 = -1;
	let index2 = -1;
	let distMin = 9999999;

	// １番近いフォント
	distMin = 9999999;
	for( let i=0; i<fontElements.length; i++ )
	{
		if( fontElements[i].distance < distMin )
		{
			distMin = fontElements[i].distance;
			index1 = i;
		}
	}
	// ２番目に近いフォント
	distMin = 9999999;
	for( let i=0; i<fontElements.length; i++ )
	{
		if( i == index1 )
		{
			continue;
		}
		if( fontElements[i].distance < distMin )
		{
			distMin = fontElements[i].distance;
			index2 = i;
		}
	}

	let fonts = [];
	fonts[0] = fontElements[index1].name;
	fonts[1] = fontElements[index2].name;
/*
        // 提案するフォントリストを動的に更新
        const fonts = {
            1: ['Noto Sans JP', 'Kosugi Maru'],
            2: ['M PLUS 1p', 'Roboto'],
            3: ['Yu Gothic', 'Meiryo'],
            4: ['Hiragino Kaku Gothic ProN', 'MS Gothic'],
            5: ['Noto Serif JP', 'Sawarabi Mincho'],
            6: ['M PLUS Rounded 1c', 'Rounded Mplus 1c'],
            7: ['TakaoPGothic', 'MotoyaLMaru'],
            8: ['Ume Gothic', 'Klee One'],
            9: ['Zen Maru Gothic', 'Hannari'],
            10: ['Comic Sans MS', 'Papyrus']
        };
*/
        // フォントリストをクリアしてから新しい提案を表示
        fontList.innerHTML = '';
        fonts.forEach(function(font) {
            const listItem = document.createElement('li');
            listItem.style.fontFamily = font;

            const fontName = document.createElement('span');
            fontName.textContent = font;
            fontName.style.fontFamily = font;
            fontName.style.marginRight = '10px';

            const inputField = document.createElement('input');
            inputField.type = 'text';
            inputField.placeholder = 'テキストを入力';

            const displayText = document.createElement('span');
            displayText.textContent = '';
            displayText.style.fontFamily = font;
            displayText.style.marginLeft = '10px';
            displayText.style.fontSize = '20px';

            inputField.addEventListener('input', function() {
                displayText.textContent = inputField.value;
            });

            listItem.appendChild(fontName);
            listItem.appendChild(inputField);
            listItem.appendChild(displayText);

            fontList.appendChild(listItem);
        });
    }

    // 初期値でのフォント提案
    updateFonts(sliders[0].value);
});
