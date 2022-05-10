
		// create a key named 'test' with a value of 'This is just a test' and store it in local storage i.e browser
		localStorage.setItem('story1_1_en', 'Alice was beginning to get very tired of sitting by her sister on the bank, and of having nothing to do: once or twice she had peeped into the book her sister was reading, but it had no pictures or conversations in it, “and what is the use of a book,” thought Alice “without pictures or conversations?” So she was considering in her own mind (as well as she could, for the hot day made her feel very sleepy and stupid), whether the pleasure of making a daisy-chain would be worth the trouble of getting up and picking the daisies, when suddenly a White Rabbit with pink eyes ran close by her. There was nothing so very remarkable in that; nor did Alice think it so very much out of the way to hear the Rabbit say to itself, “Oh dear! Oh dear! I shall be late!” (when she thought it over afterwards, it occurred to her that she ought to have wondered at this, but at the time it all seemed quite natural); but when the Rabbit actually took a watch out of its waistcoat-pocket, and looked at it, and then hurried on, Alice started to her feet, for it flashed across her mind that she had never before seen a rabbit with either a waistcoat-pocket, or a watch to take out of it, and burning with curiosity, she ran across the field after it, and fortunately was just in time to see it pop down a large rabbit-hole under the hedge.');

		localStorage.setItem('story1_1_mal',' Alice mula bosan duduk dengan kakaknya di tebing, dan tidak mempunyai apa-apa untuk dilakukan: sekali atau dua kali dia telah mengintip ke dalam buku yang dibaca oleh kakaknya, tetapi ia tidak mempunyai gambar atau perbualan di dalamnya, "dan apa adakah penggunaan buku," fikir Alice "tanpa gambar atau perbualan?" Jadi dia sedang mempertimbangkan dalam fikirannya sendiri (sebaik yang dia boleh, kerana hari yang panas membuatkan dia berasa sangat mengantuk dan bodoh), sama ada keseronokan membuat rantai daisy akan berbaloi dengan kesukaran untuk bangun dan memetik bunga aster, apabila tiba-tiba Arnab Putih bermata merah jambu berlari menghampirinya. Tiada apa-apa yang sangat luar biasa dalam hal itu; Alice juga tidak terfikir begitu jauh untuk mendengar Arnab berkata kepada dirinya sendiri, “Oh sayang! Oh sayang! Saya akan lambat!” (apabila dia memikirkannya selepas itu, dia terfikir bahawa dia sepatutnya tertanya-tanya tentang perkara ini, tetapi pada masa itu semuanya kelihatan agak semula jadi); tetapi apabila Arnab benar-benar mengeluarkan jam tangan dari poket kotnya, dan melihatnya, dan kemudian tergesa-gesa, Alice mula berdiri, kerana terlintas di fikirannya bahawa dia tidak pernah melihat arnab dengan sama ada kot- poket, atau jam tangan untuk dikeluarkan daripadanya, dan dengan rasa ingin tahu, dia berlari melintasi padang selepas itu, dan mujurlah tepat pada masanya untuk melihatnya muncul ke dalam lubang arnab yang besar di bawah pagar.');

		localStorage.setItem('story1_2_en',' In another moment down went Alice after it, never once considering how in the world she was to get out again.The rabbit-hole went straight on like a tunnel for some way, and then dipped suddenly down, so suddenly that Alice had not a moment to think about stopping herself before she found herself falling down a very deep well.Either the well was very deep, or she fell very slowly, for she had plenty of time as she went down to look about her and to wonder what was going to happen next. First, she tried to look down and make out what she was coming to, but it was too dark to see anything; then she looked at the sides of the well, and noticed that they were filled with cupboards and book-shelves; here and there she saw maps and pictures hung upon pegs. She took down a jar from one of the shelves as she passed; it was labelled “ORANGE MARMALADE”, but to her great disappointment it was empty: she did not like to drop the jar for fear of killing somebody underneath, so managed to put it into one of the cupboards as she fell past it. “Well!” thought Alice to herself, “after such a fall as this, I shall think nothing of tumbling down stairs! How brave they’ll all think me at home! Why, I wouldn’t say anything about it, even if I fell off the top of the house!” (Which was very likely true.) ');

		localStorage.setItem('story1_2_mal','Dalam masa yang lain turun Alice selepas itu, tidak pernah sekali pun mempertimbangkan bagaimana di dunia dia boleh keluar lagi. Lubang arnab itu terus berjalan seperti terowong untuk beberapa cara, dan kemudian tenggelam secara tiba-tiba ke bawah, begitu tiba-tiba bahawa Alice tidak mempunyai seketika untuk berfikir tentang menghentikan dirinya sebelum dia mendapati dirinya jatuh ke dalam perigi yang sangat dalam. Sama ada perigi itu sangat dalam, atau dia jatuh dengan sangat perlahan, kerana dia mempunyai banyak masa semasa dia turun untuk melihat sekelilingnya dan tertanya-tanya apa yang berlaku akan berlaku seterusnya. Mula-mula, dia cuba melihat ke bawah dan melihat apa yang dia datang, tetapi terlalu gelap untuk melihat apa-apa; kemudian dia melihat ke sisi telaga, dan perasan bahawa mereka dipenuhi dengan almari dan rak buku; sana sini dia melihat peta dan gambar yang digantung pada pasak. Dia menurunkan balang dari salah satu rak semasa dia berlalu; ia dilabelkan "OREN MARMALADE", tetapi yang sangat mengecewakannya ia adalah kosong: dia tidak suka menjatuhkan balang kerana takut membunuh seseorang di bawahnya, jadi berjaya memasukkannya ke dalam salah satu almari ketika dia jatuh melepasinya. “Nah!” fikir Alice kepada dirinya sendiri, "selepas kejatuhan seperti ini, saya tidak akan fikir apa-apa untuk jatuh ke bawah tangga! Betapa beraninya mereka semua akan menganggap saya di rumah! Kenapa, saya tidak akan mengatakan apa-apa mengenainya, walaupun saya jatuh dari bahagian atas rumah!" (Yang sangat mungkin benar.)')
		// display the local storage texts
		function s1_1_en(){
			document.getElementById("textS").innerHTML = localStorage.getItem('story1_1_en');
		}
		function s1_1_mal(){
			document.getElementById("textS").innerHTML = localStorage.getItem('story1_1_mal');
		}
		function s1_2_en(){
			document.getElementById("textS").innerHTML = localStorage.getItem('story1_2_en');
		}
		function s1_2_mal(){
			document.getElementById("textS").innerHTML = localStorage.getItem('story1_2_mal');
		}


		// -----------------------------------------------------------
		var voicelist = document.getElementById('voicelist');
		var inputText = document.getElementById('textS');
		var btnSpeak = document.getElementById('btnSpeak');

		// set var tts as the speech synthesis
		var tts = window.speechSynthesis;

		// array list for the type of voices
		var voices = [];

		// get the voice type from the list of voice and play it
		GetVoices();
		if(speechSynthesis !== undefined){
			speechSynthesis.onvoiceschanged = GetVoices;
		}
		btnSpeak.addEventListener('click', ()=>{
			var toSpeak = new SpeechSynthesisUtterance(inputText.value);
			var selectedVoiceName = voicelist.selectedOptions[0].getAttribute('data-name');
			voices.forEach((voice)=>{
				if(voice.name === selectedVoiceName){
					toSpeak.voice = voice;
				}
			});
			tts.speak(toSpeak);
		});

		function pauseVoice(){
			tts.pause();
		}

		function resumeVoice(){
			tts.resume();
		}
		function stopVoice(){
			tts.cancel();
		}

		// get the list of available voice type and display it on a select list
		function GetVoices(){
			voices = tts.getVoices();
			var selectedIndex = voicelist.selectedIndex < 0 ? 0 : voicelist.selectedIndex;
			voicelist.innerHTML = '';
			voices.forEach((voice)=>{
				var listItem = document.createElement('option');
				listItem.textContent = voice.name;
				listItem.setAttribute('data-lang', voice.lang);
				listItem.setAttribute('data-name', voice.name);
				voicelist.appendChild(listItem);
			});

			voicelist.selectedIndex = 0;
		}

		document.addEventListener('DOMContentLoaded', function () {
			var input = document.getElementById('voicelist');
   			if (localStorage['voicelist']) { // if job is set
       		input.value = localStorage['voicelist']; // set the value
   			}
   				input.onchange = function () {
        		localStorage['voicelist'] = this.value; // change localStorage on change
    		}
		});
		// -----------------------------------------------------------