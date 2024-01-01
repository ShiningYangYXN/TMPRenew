// 请打开tmp.link或ttttt.link,登录账号，然后按F12，在控制台运行以下代码：
// 获取所有的链接元素  
const links = document.querySelectorAll('.filelist_link.mr-1');
let currentIndex = links.length - 1;
function openNextLink() {
  if (currentIndex >= 0) {
    // 创建一个新的窗口或
    let newWindow = window.open(links[currentIndex].href, '_blank');
    setTimeout(() => {
      // 关闭新窗口  
      newWindow.close();
    }, 2500); // 2500毫秒等于2.5秒  
    currentIndex--;
    setTimeout(() => {
      openNextLink();
    }, 2500);
  }
}
// 开始打开第一个链接  
openNextLink();