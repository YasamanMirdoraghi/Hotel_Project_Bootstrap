
      function _click(){
        document.getElementById('_img34').setAttribute('src', 'img/service1.webp')
      }
      function _click1(){
        document.getElementById('_img34').setAttribute('src', 'img/service2.webp')
      }
      function _click3(){
        document.getElementById('_img34').setAttribute('src', 'img/service3.webp')
      }
      function _click4(){
        document.getElementById('_img34').setAttribute('src', 'img/service6.webp')
      }


      let value = document.querySelectorAll("._num")
      let interval = 5000;
        // console.log(value);
      value.forEach((value)=>{
        let startvalue = 0;
        let endvalue = parseInt(value.getAttribute("data-val"))
        // console.log(endvalue);
        let dur = Math.floor(interval / endvalue)
        let count = setInterval( function(){
          startvalue += 1
          value.textContent = startvalue
            if(startvalue == endvalue ){
              clearInterval(count);

            }
        }, dur)
      })
