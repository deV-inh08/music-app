const app = {
     songs: [
        {
            stt: 1,
            singer: "Sơn Tùng MTP",
            name: "Buông đôi tay nhau ra",
            path: "./assets/music/Buông Đôi Tay Nhau Ra _ Sơn Tùng M-TP.mp3"
        }, 
        {
            stt: 2,
            singer: "Sơn Tùng MTP",
            name: "Chúng ta của hiện tại",
            path: "./assets/music/Chúng Ta Của Hiện Tại.mp3"
        },
        {
            stt: 3,
            singer: "Sơn Tùng MTP",
            name: "Chúng ta của tương lai",
            path: "./assets/music/Chúng Ta Của Tương Lai (128 kbps).mp3"
        },
        {
            stt: 4,
            singer: "Sơn Tùng MTP",
            name: "Chúng ta không thuộc về nhau",
            path: "./assets/music/Chúng Ta Không Thuộc Về Nhau _ Sơn Tùng M-TP.mp3"
        },
        {
            stt: 5,
            singer: "Sơn Tùng MTP",
            name: "Cơn mưa ngang qua",
            path: "./assets/music/Cơn Mưa Ngang Qua (Remix 2022).mp3"
        },
        {
            stt: 6,
            singer: "Sơn Tùng MTP",
            name: "Không phải dạng vừa đâu",
            path: "./assets/music/Không Phải Dạng Vừa Đâu.mp3"
        },
        {
            stt: 7,
            singer: "Sơn Tùng MTP",
            name: "Nắng ấm xa dần",
            path: "./assets/music/NẮNG ẤM XA DẦN (ONIONN REMIX) _ SƠN TÙNG M-TP.mp3"
        }, 
        {
            stt: 8,
            singer: "Sơn Tùng MTP",
            name: "Chạy ngay đi",
            path: "./assets/music/RUN NOW (ONIONN REMIX) _ SƠN TÙNG M-TP.mp3"
        },
        {
            stt: 9,
            singer: "Sơn Tùng MTP",
            name: "Có chắc yêu là đây",
            path: "./assets/music/SƠN TÙNG M-TP _ CÓ CHẮC YÊU LÀ ĐÂY.mp3"
        },
        {
            stt: 10,
            singer: "Sơn Tùng MTP",
            name: "Hãy trao cho anh",
            path: "./assets/music/SƠN TÙNG M-TP _ HÃY TRAO CHO ANH ft. Snoop Dogg.mp3"
        },
        {
            stt: 11,
            singer: "tlinh",
            name: "Nếu lúc đó",
            path: "./assets/music/tlinh - nếu lúc đó (ft. 2pillz).mp3"
        }
    ],
    // Render ra bài hát
    render: function() {
        let getListSong = document.querySelector(".list__song");
        const htmls = this.songs.map((item) => {
            return `<article class="song">
                    <p class="numberic">${item.stt}</p>
                    <div class="info__song">
                        <span class="song__name">${item.name}</span>
                        </br>
                        <span class="singer__name">${item.singer}</span>
                    </div>
                </article>`       
        });
        getListSong.innerHTML = htmls;
    },

    // Xử lí sự kiện
    handledEnvent: function() {    
        // Rotage CD
        let getImgCd = document.querySelector(".img__cd");
        document.onscroll = function() {
           const getScroll = window.scrollY;
        //    const newWidth = getImgCd.width - getScroll;
        //    const newHeight = getImgCd.height - getScroll;

        //    getImgCd.style.width = newWidth > 0 ? newWidth + "px": 0;
        //    getImgCd.style.height = newHeight > 0 ? newHeight + "px": 0;
        //    console.log(getImgCd.width);
        //    console.log(getImgCd.height);
        //    console.log(getScroll);
        };

        // Choose Song
        let getbtnPause = document.querySelector(".pause");
        let getSongsName = document.querySelectorAll(".song__name");
        let getSongs = document.querySelectorAll(".song");
        let getAudio = document.getElementById("audio");
        getSongs.forEach((item) => {
           item.addEventListener("click", (e) => {
            getSongsName.forEach((item) => {
                if(e.target.contains(item)) {
                    getAudio.src = `./assets/music/${item.textContent}.mp3`;
                    getAudio.play();
                    getbtnPause.src = `./assets/img/img_playmusic/pause.svg`;
                }
            })
            
        })
        });

        // Rotage CD

        // Pause Songs
        getbtnPause.addEventListener("click", (e) => {
            getAudio.pause();
            getbtnPause.src = `./assets/img/img_playmusic/play.svg`;
        })


    },

    // Bắt đầu sự kiện
    start: function() {
        this.render()
        this.handledEnvent()
    }
};
app.start()