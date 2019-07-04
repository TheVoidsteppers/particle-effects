let particleConfig = {}
chrome.storage.sync.get(function(response){
  particleConfig = response
  $('.count').val((particleConfig.count)||'500')
  $('.pointColor').val((particleConfig.pointColor)||'124,255,0')
  $('.color').val((particleConfig.color)||'34,139,34')
  $('.zIndex').val((particleConfig.zIndex)||'-2')
})

$('.btn').on('click',function(){
  let $count = $('.count').val()||particleConfig.count||''
  let $pointColor = $('.pointColor').val()||particleConfig.pointColor||''
  let $color = $('.color').val()||particleConfig.color||''
  let $zIndex = $('.zIndex').val()||particleConfig.zIndex||''

  particleConfig = {
    count:$count,
    pointColor:$pointColor,
    color:$color,
    zIndex:$zIndex,
  }

  chrome.storage.sync.set(particleConfig, function() {
    // 通知保存完成。
    alert('设置已保存');
  });

})