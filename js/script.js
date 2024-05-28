// btn01
$("#btn1").on('click', function(){
  //コンピュータで１〜１０のランダムな数字を生成する 
const randomNumber = Math.ceil(Math.random() * 10);
  // btn1を押したら１〜１０の範囲でランダムにグーチョキパーが表示される
if(randomNumber >= 7 && randomNumber <=10){
    $('#result').html('<img src="images/tyoki.png" alt="">');
  }else if(randomNumber >= 4 && randomNumber <=6){
    $('#result').html('<img src="images/guu.png" alt="">');
  }else{
    $('#result').html('<img src="images/paa.png" alt="">');
  }
    
  // グーチョキパーの結果に応じて勝ち・負け・引き分けの画像が表示される
if(randomNumber >= 7 && randomNumber <=10){
    $('#final-result').html('<img src="images/win.png" alt="">');
  }else if(randomNumber >= 4 && randomNumber <=6){
    $('#final-result').html('ひきわけ');
  }else{
    $('#final-result').html('<img src="images/lose.jpg" alt="">');
  }



}); 
// btn02
$("#btn2").on('click', function(){
  //コンピュータで１〜１０のランダムな数字を生成する
  const randomNumber = Math.ceil(Math.random() * 10);
  // btn２を押したら１〜１０の範囲でランダムにグーチョキパーが表示される
  if(randomNumber >= 7 && randomNumber <=10){
      $('#result').html('<img src="images/paa.png" alt="">');
    }else if(randomNumber >= 4 && randomNumber <=6){
      $('#result').html('<img src="images/tyoki.png" alt="">');
    }else{
      $('#result').html('<img src="images/guu.png" alt="">');
    }
    
  // グーチョキパーの結果に応じて勝ち・負け・引き分けの画像が表示される
  if(randomNumber >= 7 && randomNumber <=10){
      $('#final-result').html('<img src="images/win.png" alt="">');
    }else if(randomNumber >= 4 && randomNumber <=6){
      $('#final-result').html('ひきわけ');
    }else{
      $('#final-result').html('<img src="images/lose.jpg" alt="">');
    }
  });

  // btn03
  $("#btn3").on('click', function(){
  //コンピュータで１〜１０のランダムな数字を生成する 
    const randomNumber = Math.ceil(Math.random() * 10);
  // btn２を押したら１〜１０の範囲でランダムにグーチョキパーが表示される
    if(randomNumber >= 7 && randomNumber <=10){
        $('#result').html('<img src="images/guu.png" alt="">');
      }else if(randomNumber >= 4 && randomNumber <=6){
        $('#result').html('<img src="images/paa.png" alt="">');
      }else{
        $('#result').html('<img src="images/tyoki.png" alt="">');
      }
  // グーチョキパーの結果に応じて勝ち・負け・引き分けの画像が表示される
    if(randomNumber >= 7 && randomNumber <=10){
        $('#final-result').html('<img src="images/win.png" alt="">');
      }else if(randomNumber >= 4 && randomNumber <=6){
        $('#final-result').html('ひきわけ');
      }else{
        $('#final-result').html('<img src="images/lose.jpg" alt="">');
      }
    });
  // もう一回！!をクリックすると画面がリセットされる
    $('#resetbutton').on('click', function(){
      location.reload();
    })

