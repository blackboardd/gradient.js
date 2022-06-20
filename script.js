const html = '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi tristique. In ante metus dictum at. Faucibus a pellentesque sit amet porttitor eget dolor morbi. Vitae tortor condimentum lacinia quis vel eros donec ac. Vulputate mi sit amet mauris commodo. Arcu felis bibendum ut tristique et egestas. Quam nulla porttitor massa id neque aliquam. Odio tempor orci dapibus ultrices in iaculis nunc sed augue. In cursus turpis massa tincidunt dui ut ornare lectus sit. Arcu non odio euismod lacinia at quis risus sed vulputate. Imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor. Enim eu turpis egestas pretium aenean. Turpis massa sed elementum tempus egestas sed sed risus pretium. Lectus vestibulum mattis ullamcorper velit. Aliquam etiam erat velit scelerisque in. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi tristique. In ante metus dictum at. Faucibus a pellentesque sit amet porttitor eget dolor morbi. Vitae tortor condimentum lacinia quis vel eros donec ac. Vulputate mi sit amet mauris commodo. Arcu felis bibendum ut tristique et egestas. Quam nulla porttitor massa id neque aliquam. Odio tempor orci dapibus ultrices in iaculis nunc sed augue. In cursus turpis massa tincidunt dui ut ornare lectus sit. Arcu non odio euismod lacinia at quis risus sed vulputate. Imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor. Enim eu turpis egestas pretium aenean. Turpis massa sed elementum tempus egestas sed sed risus pretium. Lectus vestibulum mattis ullamcorper velit. Aliquam etiam erat velit scelerisque in. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi tristique. In ante metus dictum at. Faucibus a pellentesque sit amet porttitor eget dolor morbi. Vitae tortor condimentum lacinia quis vel eros donec ac. Vulputate mi sit amet mauris commodo. Arcu felis bibendum ut tristique et egestas. Quam nulla porttitor massa id neque aliquam. Odio tempor orci dapibus ultrices in iaculis nunc sed augue. In cursus turpis massa tincidunt dui ut ornare lectus sit. Arcu non odio euismod lacinia at quis risus sed vulputate. Imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor. Enim eu turpis egestas pretium aenean. Turpis massa sed elementum tempus egestas sed sed risus pretium. Lectus vestibulum mattis ullamcorper velit. Aliquam etiam erat velit scelerisque in. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi tristique. In ante metus dictum at. Faucibus a pellentesque sit amet porttitor eget dolor morbi. Vitae tortor condimentum lacinia quis vel eros donec ac. Vulputate mi sit amet mauris commodo. Arcu felis bibendum ut tristique et egestas. Quam nulla porttitor massa id neque aliquam. Odio tempor orci dapibus ultrices in iaculis nunc sed augue. In cursus turpis massa tincidunt dui ut ornare lectus sit. Arcu non odio euismod lacinia at quis risus sed vulputate. Imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor. Enim eu turpis egestas pretium aenean. Turpis massa sed elementum tempus egestas sed sed risus pretium. Lectus vestibulum mattis ullamcorper velit. Aliquam etiam erat velit scelerisque in.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi tristique. In ante metus dictum at. Faucibus a pellentesque sit amet porttitor eget dolor morbi. Vitae tortor condimentum lacinia quis vel eros donec ac. Vulputate mi sit amet mauris commodo. Arcu felis bibendum ut tristique et egestas. Quam nulla porttitor massa id neque aliquam. Odio tempor orci dapibus ultrices in iaculis nunc sed augue. In cursus turpis massa tincidunt dui ut ornare lectus sit. Arcu non odio euismod lacinia at quis risus sed vulputate. Imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor. Enim eu turpis egestas pretium aenean. Turpis massa sed elementum tempus egestas sed sed risus pretium. Lectus vestibulum mattis ullamcorper velit. Aliquam etiam erat velit scelerisque in.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi tristique. In ante metus dictum at. Faucibus a pellentesque sit amet porttitor eget dolor morbi. Vitae tortor condimentum lacinia quis vel eros donec ac. Vulputate mi sit amet mauris commodo. Arcu felis bibendum ut tristique et egestas. Quam nulla porttitor massa id neque aliquam. Odio tempor orci dapibus ultrices in iaculis nunc sed augue. In cursus turpis massa tincidunt dui ut ornare lectus sit. Arcu non odio euismod lacinia at quis risus sed vulputate. Imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor. Enim eu turpis egestas pretium aenean. Turpis massa sed elementum tempus egestas sed sed risus pretium. Lectus vestibulum mattis ullamcorper velit. Aliquam etiam erat velit scelerisque in. </p>';

const addDiv = () => {
    const div = document.createElement('div');
    div.className = 'section';
    div.innerHTML = html;
    document.body.appendChild(div);
}

// wait until body exists
const observer = new MutationObserver((mutations, obs) => {
    const body = document.querySelector('body');
    if (body) {
        addDiv();
        addDiv();
        addDiv();
        addDiv();
        addDiv();
        addDiv();
        obs.disconnect();
    }
});

observer.observe(document, {
    childList: true,
    subtree: true
});

document.addEventListener('DOMContentLoaded', function(e) {
    document.addEventListener('scroll', function(e) {
        let documentHeight = document.body.scrollHeight;
        let currentScroll = window.scrollY + window.innerHeight;
        let modifier = 200; 
        if(currentScroll + modifier > documentHeight) {
            addDiv();
        }
    })
})
