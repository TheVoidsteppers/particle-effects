$(function () {
  var script = document.createElement('script')
  $(script).attr('type','text/javascript')
  $(script).attr('src',chrome.extension.getURL('dist/canvas-nest/canvas-nest.js'))

  chrome.storage.sync.get(function(result){

    const particleConfig = result

    // 参数配置
    $(script).attr('zIndex',particleConfig.zIndex||'-2')
    $(script).attr('count',particleConfig.count||'500')
    $(script).attr('color',particleConfig.color||'34,139,34')
    $(script).attr('pointColor',particleConfig.pointColor||'124,255,0')

    $('body').append(script)
  });

})
