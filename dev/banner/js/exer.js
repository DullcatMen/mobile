function Banner(option){
	var position = option.position,
		data = option.option,
		arr_tagA,
		arr_indicator,
		currentIndex = 0,
		previousIndex;

	function createBanner(){
		var fragment = document.createDocumentFragment();
		arr_tagA = data.map(function(list, index){
			var tagA = document.createElement("a");
			tagA.title = list.name;
			tagA.href = list.anchorHref;
			tagA.style.backgroundImage = "url("+ list.imageUrl +")";
			fragment.appendChild(tagA);
			return tagA;
		});
		position.appendChild(fragment);
		arr_tagA[0].classList.add("first");
	}

	function createIndicator(){
		var indicator = document.createElement("div");
		indicator.className = "indicator";
		arr_indicator = data.map(function(list, index){
			var tagEm = document.createElement("em");
			tagEm.appendChild(document.createTextNode(index + 1));
			indicator.appendChild(tagEm);
			tagEm.addEventListener("touchend", function(){
				//点击em时，把前一个图的index，即previousIndex赋值为currentIndex
				previousIndex = currentIndex;
				//与此同时，把点击的这个index赋值给当前的currentIndex
				currentIndex = index;
				setView();
			}, 0); 
			return tagEm;
		});
		position.appendChild(indicator);
		arr_indicator[0].classList.add("current");
	}

	function setView(){
		//按钮动画
		arr_indicator[currentIndex].classList.add("current");
		arr_indicator[previousIndex].classList.remove("current");
		//图片动画
		arr_tagA[previousIndex].classList.add("previous");
		arr_tagA[currentIndex].classList.add("current");
		arr_tagA[currentIndex].classList.remove("previous");
		arr_tagA[previousIndex].classList.remove("current");
	}

	function autoChange(){
		var tagA_len = data.length;
		setInterval(function(){
			currentIndex = currentIndex < tagA_len - 1 ? currentIndex + 1 : 0;
			previousIndex = currentIndex > 0 ? currentIndex - 1 : tagA_len - 1;
			setView();
		},2000);
		
	}

	createBanner();
	createIndicator();
	autoChange();
}

var _banner = document.querySelector(".banner");

ajax({
	url : "http://www.ikindness.cn/api/test/get",
	success : function(data){
		new Banner({
			position : _banner,
			option : data.data,
		});
	},
});