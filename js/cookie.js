
			// let date = new Date
			// date.setSeconds(date.getSeconds()+30)
			// document.cookie = `username=yuani;expires=${date.toGMTString()}`;
			// document.cookie = `password=23232;expires=${date.toGMTString()}`
			// let cook = document.cookie;
			// let arr = cook.split(";");
			// let obj = {};
			// arr.forEach(function(item,index){
			// 	item = item.replace(" ","");
			// 	let arr = item.split("=");
			// 	obj[arr[0]] = arr[1]
			// })
			// console.log(obj)
			
			function Cookie (){
				this.setcookie = function(key,value,day){
					let date = new Date();
					date.setDate(date.getDate() + day);
					document.cookie = `${key}=${value};expires=${date.toGMTString()}`;
				};
				this.getcookie = function(key){
					let data = document.cookie;
					if (data.indexOf(";") != -1) {
						data = data.split(";")
						for(let i = 0; i < data.length; i++){
							item = data[i].replace(" ","");
							item = item.split("=");
							if(item[0] == key){
								return item[1]
							};
						};
					}
					 else{
						let arr = data.split("=");
						if(arr[0] = key){
							return arr[1]
						};
					};
				};
				this.removecookie = function(key){
					this.setcookie(key,"",-1)
				};
			};
			// let cookie=new Cookie();
			// cookie.setcookie("username","yuanqi",1);
			// cookie.setcookie("password","123645",1);
			// console.log(cookie.getcookie("password"))
	