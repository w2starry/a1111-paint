window.a1111minipaint = {}  //全局 window 对象上创建了一个名为 a1111minipaint 的空对象。这种做法通常是为了在后续的代码中向该对象添加属性和方法，以便在整个页面中共享和使用这些属性和方法。
//当 a1111minipaint.onload 被触发时，这个箭头函数将被执行。通常，这个 onload 事件表示 iframe 内部的页面已经完全加载。
window.a1111minipaint.onload = () => {
        setTimeout(() =>{
                a1111minipaint.createSendButton("image_buttons_txt2img", window.parent.txt2img_gallery);  //在指定位置上创建按钮，第一个是标识符，第二个是指定位置
                a1111minipaint.createSendButton("image_buttons_img2img", window.parent.img2img_gallery);
                a1111minipaint.createSendButton("image_buttons_extras", window.parent.extras_gallery);
        }, )
        /*setTimeout(() => { ... }, ): setTimeout 函数是一个 JavaScript 内置函数，
        用于在一定的时间延迟后执行指定的代码。这个函数接受两个参数：一个函数作为第一个参数，以及一个表示延迟时间的毫秒数作为第二个参数。
        在这个例子中，由于第二个参数没有提供值，代码中并没有明确指定延迟的时间。*/
}