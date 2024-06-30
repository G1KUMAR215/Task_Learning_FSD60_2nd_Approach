document.getElementById("countdown").innerText = 10;
setTimeout(() => {
    document.getElementById("countdown").innerText = 9;
    setTimeout(() => {
        document.getElementById("countdown").innerText = 8;
        setTimeout(() => {
            document.getElementById("countdown").innerText = 7;
            setTimeout(() => {
                document.getElementById("countdown").innerText = 6;
                setTimeout(() => {
                    document.getElementById("countdown").innerText = 5;
                    setTimeout(() => {
                        document.getElementById("countdown").innerText = 4;
                        setTimeout(() => {
                            document.getElementById("countdown").innerText = 3;
                            setTimeout(() => {
                                document.getElementById("countdown").innerText = 2;
                                setTimeout(() => {
                                    document.getElementById("countdown").innerText = 1;
                                    setTimeout(() => {
                                        document.getElementById("countdown").innerText = "Happy Independence Day!";
                                        document.getElementById("indianFlag").style.display = "block";
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);
